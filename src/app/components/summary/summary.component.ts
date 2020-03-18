import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  constructor() { }

  @Input() stock: any;

  isNegative() {
    return (this.stock && this.stock.change < 0);
    }

  isPositive() {
    return (this.stock && this.stock.change > 0);
    }

  ngOnInit() {
  }

}
