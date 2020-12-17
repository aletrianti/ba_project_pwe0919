export interface IFileAWSInput {
  folder: string;
  name: string;
  file: ArrayBuffer; // Maybe it has to be addapted if we need to upload base64 string files
  type: 'application/pdf' | 'image/jpg' | 'image/jpeg' | 'image/png';
}
