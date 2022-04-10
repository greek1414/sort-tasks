import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css'],
})
export class SorterComponent implements OnInit {
  constructor() {}

  @Input('items') items: string[];
  @Input() isActive: boolean;
  @Output() isActiveChange = new EventEmitter<boolean>();

  @Input() done: boolean = true;

  ngOnInit() {}

  compMap: Map<string, boolean> = new Map(); // smaller idx is key, true if left is better than right

  abort() {
    this.isActive = false;
    this.isActiveChange.emit(this.isActive);
  }

  initSort() {
    this.done = false;
    this.sortStep();
  }

  a: number;
  b: number;

  sortStep() {
    var arr = this.items.map((x) => x); // "copy"
    var temp: string;
    var i, j: number;
    var swapped: boolean;

    var n = arr.length;

    // Core algorithm
    {
      for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
          var origLeft = this.orig(arr[j]);
          var origRight = this.orig(arr[j + 1]);
          if (!this.hasComp(origLeft, origRight)) {
            this.a = origLeft;
            this.b = origRight;
            return false;
          }

          if (this.getComp(origLeft, origRight)) {
            // swap arr[j] and arr[j+1]
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
          }
        }

        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false) break;
      }
    }

    this.items = arr;
    this.done = true;
    this.compMap = new Map();
  }

  save(left, right) {
    if (this.hasComp(left, right)) {
      console.log('Unexpected write');
    }
    this.compMap.set(this.getKey(left, right), left < right);
  }

  hasComp(left: number, right: number): boolean {
    return this.compMap.has(this.getKey(left, right));
  }

  getComp(left: number, right: number): boolean {
    return this.compMap.get(this.getKey(left, right)) === left < right;
  }

  getKey(a: number, b: number): string {
    if (a < b) {
      return '' + a + ',' + b;
    } else {
      return '' + b + ',' + a;
    }
  }

  orig(str: string): number {
    // idx currently used in this.arr
    return this.items.indexOf(str);
  }
}
