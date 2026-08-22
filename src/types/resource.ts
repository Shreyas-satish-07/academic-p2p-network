export interface Resource {
  id: string;
  fileName?: string;
  fileType?: string;
  uploadDate?: string;
  downloadCount?: number;
  // Dashboard compatibility fields:
  title?: string;
  bgClass?: string;
  textClass?: string;
  type?: string;
  date?: string;
  subject?: string;
  uploader?: string;
  description?: string;
  fileSize?: string;
}


