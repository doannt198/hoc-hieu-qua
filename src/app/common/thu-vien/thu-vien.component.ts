import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
import { LibraryModel } from 'src/app/model/library.model';
import { Subject, take, takeUntil } from 'rxjs';
import { ConfirmationService, MessageService, PrimeNGConfig, TreeNode } from 'primeng/api';
@Component({
  selector: 'app-thu-vien',
  templateUrl: './thu-vien.component.html',
  styleUrls: ['./thu-vien.component.scss'],
})
export class ThuVienComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
    ) {}
  private readonly unsubscribe$: Subject<void> = new Subject();
  list: LibraryModel[] = [];
  listFile: any;
  items:any
  roots: any;
  selectNote: any;
  selectedFile: TreeNode;
  selectedNodes: any;
  ngOnInit(): void {
    this.fetchData()
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Thêm thư mục', icon: 'pi pi-folder'},
      { label: 'Xoá folder', icon: 'pi pi-trash'},
      { label: 'Thêm file', icon: 'pi pi-file'},
      { label: 'Sửa tên', icon: 'pi pi-pencil'}
    ]
  }

  fetchData() {
    this.getLibrariesFolder();
    this.getSelectNode();
  }

  getLibrariesFolder(): void {
    this.apiService.getLibrariesFolder().subscribe({
      next: (response) => {
        console.log('data', response);
        this.list = response.Data.Data;
        this.convertJsonToStructTree(this.list)
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  convertJsonToStructTree(list: LibraryModel[]) {
    const map: any = {};
    let node,
      i,
    roots = [];
    for (i = 0; i < list.length; i += 1) {
      map[list[i].Id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.ParentId !== '') {
        // if you have dangling branches check that map[node.parentId] exists
        if (list[map[node.ParentId]]) {
          list[map[node.ParentId]].children.push({
            nodeId: node.Id,
            label: node.Name,
            key: node.Id,
            data: node,
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            expanded: false,
            children: node.children,
          });
        }
      } else {
        roots.push(node);
      }
    }
    roots = roots.map((item) => {
      return this.bindingData(item);
    });
    console.log('rooots:', roots);
    this.roots = roots
  }

  bindingData(item: any) {
    return {
      nodeId: item.Id,
      data: item,
      key: item.Id,
      label: item.Name,
      children: item.children,
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
    };
  }
  
  getSelectNode() {
    this.apiService.getLibrariesFile(this.selectNote)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (response) => {
        this.listFile = response.Data.Data
      },
      error: (error) => {
        console.log("error", error)
      }
    })
  }

  handleSelectNode(event: any) {
    this.selectNote = event.node.nodeId
    this.apiService.getLibrariesFile(this.selectNote)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (response) => {
        this.listFile = response.Data.Data
      },
      error: (error) => {
        console.log("error", error)
      }
    })
  }

  deleteImages(Id: any) {
    this.confirmationService.confirm({
      message: 'Bạn có chắc chắn muốn xoá ảnh không?',
      accept: () => {
        this.apiService.deleteLibrariesFile(Id)
        .subscribe({
          next: (response) => {
            console.log("ss", response)
            if(response.Status === 'success') {
              this.messageService.add({severity: 'success', summary: 'Thông báo', detail: 'Xoá thành công'})
              this.getSelectNode()
            } else {
              this.messageService.add({ severity: 'error', summary: 'Thông báo', detail: 'Xoá thất bại'})
            }
          }
        })
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
