import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputcreator',
  templateUrl: './inputcreator.component.html',
  styleUrls: ['./inputcreator.component.css'],
})
export class InputCreatorComponent implements OnInit {
  constructor() {}

  @Input() items: string[] = ['a', 'd', 'b', 'e', 'c'];
  @Input() inputStage: boolean = true;

  addItem(newItem: string) {
    newItem
      .split('\n')
      .filter((each) => each.length > 0)
      .forEach((each) => this.items.push(each));
  }

  onClear() {
    this.items = [];
  }

  onHide() {
    this.inputStage = false;
  }

  ngOnInit() {}
}
