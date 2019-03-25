import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormItem } from './form-item';

@Component({
  selector: 'app-my-form-item',
  templateUrl: './my-form-item.component.html',
  styleUrls: ['./my-form-item.component.less']
})
export class MyFormItemComponent implements OnInit {

  @Input() public item: FormItem;

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.item.value = value;
  }

  public validate(): boolean {
    return !this.item.value;
  }

}
