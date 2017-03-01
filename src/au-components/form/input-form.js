import { bindable, bindingMode, noView, inject, computedFrom, customElement, containerless } from "aurelia-framework";
@inject(Element)
@containerless()
@customElement("au-input-form")
export class InputForm {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) title;
  @bindable options;

  __help = `
    Please replace the template part like so:
    <br/>
    &lt;template replace-part="body"&gt;
    <br/>
      // template content
    <br/>
    &lt;/template&gt;`;
  
  constructor(element) {
    this.element = element;
  }
  @computedFrom("context.cancelCallback")
  get hasCancel() {
    return this.context && this.context.cancelCallback && typeof this.context.cancelCallback === "function";
  }
  @computedFrom("context.deleteCallback")
  get hasDelete() {
    return this.context && this.context.deleteCallback && typeof this.context.deleteCallback === "function";
  }
  @computedFrom("context.saveCallback")
  get hasSave() {
    return this.context && this.context.saveCallback && typeof this.context.saveCallback === "function";
  }
  @computedFrom("context.editCallback")
  get hasEdit() {
    return this.context && this.context.editCallback && typeof this.context.editCallback === "function";
  }

  bind(context) {
    this.context = context;
  }

  oncancel(event) {
    if (this.hasCancel) {
      var args = { event: event };
      var cancel = this.context.cancelCallback;
      cancel = cancel.bind(this.context);
      cancel(args);
    }
  }
  ondelete(event) {
    if (this.hasDelete) {
      var args = { event: event };
      var callback = this.context.deleteCallback;
      callback = callback.bind(this.context);
      callback(args);
    }
  }
  onedit(event) {
    if (this.hasEdit) {
      var args = { event: event };
      var callback = this.context.editCallback;
      callback = callback.bind(this.context);
      callback(args);
    }
  }
  onsave(event) {
    if (this.hasSave) {
      var args = { event: event };
      var callback = this.context.saveCallback;
      callback = callback.bind(this.context);
      callback(args);
    }
  }
}
