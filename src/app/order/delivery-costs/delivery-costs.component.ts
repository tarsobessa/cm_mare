import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number;
  @Input() itemsValue: number;
  @Output() valorTotal: number;
  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }

}
