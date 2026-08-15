export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'PPT' | 'ZIP' | string;
  date: string;
  bgClass: string;
  textClass: string;
}
