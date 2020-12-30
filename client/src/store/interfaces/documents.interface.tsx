// Documents

export interface IDocumentsData {
  filename: string;
  created: string;
  actions: any;
}

export interface IDocumentsContent {
  category: string;
  data: IDocumentsData[];
}
