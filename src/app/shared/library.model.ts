export class LibraryModel {
    Id = '';
    Name = '';
    Size = '';
    Height = 0;
    Width = 0;
    Description = '';
    Url = '';
    VideoImage = '';
    Type: 'folder' | 'image' | 'video' = 'folder';
    ParentId = '';
    Path = '';
    CreateDate: any = null;
    CreateBy = '';
    ModifiedDate: any = null;
    ModifiedBy = '';
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