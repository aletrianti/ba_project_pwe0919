// Forms interfaces

import { IOptions } from './selectOptions.interfaces';

export interface IField {
  name: string;
  type: string; // ex. "input" or "textarea"
  onchange: any;
  value?: any;
  options?: IOptions;
  isShortField?: boolean;
}
