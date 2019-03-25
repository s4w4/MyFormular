import { Component, OnInit, Input } from '@angular/core';
import { FormItem, FormItemImpl } from '../my-form-item/form-item';

@Component({
  selector: 'app-my-form-list',
  templateUrl: './my-form-list.component.html',
  styleUrls: ['./my-form-list.component.less']
})
export class MyFormListComponent implements OnInit {

  public items: FormItem[];

  constructor() { }

  ngOnInit() {
  }

}
