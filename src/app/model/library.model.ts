export class LibraryModel {
    id = '';
    name = '';
    size = '';
    height = 0;
    width = 0;
    description = '';
    url = '';
    VideoImage = '';
    type: 'folder' | 'image' | 'video' = 'folder';
    parentId = '';
    path = '';
    createDate: any = null;
    createBy = '';
    modifiedDate: any = null;
    modifiedBy = '';
    children: any[] = [];
}

export class LibraryFormModel {
    CreateBy= '';
    CreateDate= '';
    Description= '';
    Height= 0;
    Id= '';
    ModifiedBy= '';
    ModifiedDate= '';
    Name= '';
    ParentId= '';
    Path= '';
    Size= '';
    Type= '';
    Url= '';
    VideoImage= '';
    Width= 0;
}