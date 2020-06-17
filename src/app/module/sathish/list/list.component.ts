import { Component, OnInit } from "@angular/core";
import {columns} from '../../../../assets/columns'
import {data} from '../../../../assets/payments'

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
	paymentData: any = data;
	paymentColumns: any = columns;

	constructor() {}

	ngOnInit(): void {}
}
