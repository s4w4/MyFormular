export interface FormItem {
  title: string;
  value: string;
}
export class FormItemImpl {
  public value: string;
  constructor(public title: string) {
    this.value = '';
  }
}
