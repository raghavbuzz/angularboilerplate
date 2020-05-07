import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  productList = null;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getProductList().subscribe(
      (responseData) => {
        // tslint:disable-next-line: no-string-literal
        this.productList = responseData['products'];
      }
    );
  }

}
