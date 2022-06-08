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