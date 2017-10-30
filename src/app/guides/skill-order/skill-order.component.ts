import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-order',
  templateUrl: './skill-order.component.html',
  styleUrls: ['./skill-order.component.scss']
})
export class SkillOrderComponent implements OnInit {

  article: Object = {
    title: 'Skill Order',
    updated: 'Pre-Season 8'
  }

  itemList = [
    { index: 0, name: 'q max', img: '' },
    { index: 1, name: 'e max', img: '' },
  ];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value.index;
  }
  constructor() { }

  ngOnInit() {
  }

}
