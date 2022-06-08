import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import * as queryString from 'query-string';
import { LibraryModel } from 'src/app/model/library.model';
@Component({
  selector: 'app-thu-vien',
  templateUrl: './thu-vien.component.html',
  styleUrls: ['./thu-vien.component.scss'],
})
export class ThuVienComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  list: LibraryModel[] = [];
  roots: any
  selectedNode: any;
  ngOnInit(): void {
    this.getLibrariesFolder();
  
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

  handleSelectNode(event:any) {
    console.log(event)
  }
}
