// Forms interfaces

import { IOptions } from './selectOptions.interfaces';

export interface IField {
  name: string;
  type: string; // ex. "input" or "textarea"
  onchange: any;
  value?: string;
  options?: IOptions;
  isShortField?: boolean;
}
