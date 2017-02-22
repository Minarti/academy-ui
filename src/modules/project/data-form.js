import { bindable, containerless } from "aurelia-framework";

@containerless()
export class DataForm {

  bind(context) {
    this.context = context;
    this.data = this.context.data;
    this.error = this.context.error;
    
    this.cancelCallback = this.context.cancelCallback;
    this.deleteCallback = this.context.deleteCallback;
    this.editCallback = this.context.editCallback;
    this.saveCallback = this.context.saveCallback; 
  }
}
