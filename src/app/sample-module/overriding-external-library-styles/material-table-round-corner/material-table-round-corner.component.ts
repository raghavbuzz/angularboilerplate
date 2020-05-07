import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'material-table-round-corner',
  templateUrl: './material-table-round-corner.component.html',
  styleUrls: ['./material-table-round-corner.component.scss']
})
export class MaterialTableRoundCornerComponent implements OnInit {
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
