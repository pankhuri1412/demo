import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})

export class ProductAlertsComponent implements OnInit {

    @Input() product: any;
    @Output() notify = new EventEmitter();

    constructor() {
    }

    public ngOnInit() {}

}
