import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormItem, FormItemImpl } from '../my-form-item/form-item';
import { MyFormListComponent } from '../my-form-list/my-form-list.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.less']
})
export class MyFormComponent implements OnInit {

  @ViewChild('myFormList')
  public myFormList: MyFormListComponent;

  public isSubmitted: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.isSubmitted = false;
    this.myFormList.items = [
      new FormItemImpl('E-Mail Adresse'),
      new FormItemImpl('Vorname'),
      new FormItemImpl('Nachname'),
      new FormItemImpl('Straße'),
      new FormItemImpl('Straßennummer'),
      new FormItemImpl('Stadt'),
      new FormItemImpl('Postleitzahl')
    ];
  }

  onClick() {
    this.isSubmitted = true;
  }

  showItems() {
    return this.myFormList.items.map(({value}) => value);
  }

}
