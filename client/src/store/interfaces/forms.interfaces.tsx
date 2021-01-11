// Forms interfaces

export interface IField {
  name: string;
  type: string; // ex. "input" or "textarea"
  onchange: any;
  value?: string;
}

export interface IModal {
  isOpen: boolean;
}
export interface IToggleModalAction {
  type: string;
  payload: IModal;
}
