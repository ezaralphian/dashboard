export interface DocumentRequisites {
  title: string;
  img: string;
  info: null | string;
  documentList: DocumentList[];
}

export interface DocumentList {
  title: string;
  listType: ListType;
}

export enum ListType {
  List = "LIST",
  Sub = "SUB",
}