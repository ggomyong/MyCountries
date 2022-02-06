import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // declarations
  datasource=[]; // datasource is the source of data for mat-table
  displayedColumns=[]; // array of columns displayed in mat-table

  totalPrice:number=0;

  streetAddress:string='';
  city:string='';
  state:string='';
  zipCode:number;

  constructor(private _productService:ProductService) { }

  ngOnInit(): void { //ngOnInit gets executed during the initialization of the component
    //console.log(this._productService.getProducts())
    //this.datasource=this._productService.getProducts();
    this.displayedColumns=['name', 'quantity', 'price', 'total'];
    let allProducts=[];
    allProducts=this._productService.getProducts();

    // calculate total price here!
    for (let i=0; i<allProducts.length; i++) {
      allProducts[i].total=allProducts[i].quantity* allProducts[i].price;
      if (allProducts[i].quantity>0) {
        this.datasource.push(allProducts[i]);
      }
      //this.totalPrice=this.totalPrice+allProducts[i].total;
      this.totalPrice+=allProducts[i].total;
    }

  }

  handlePaypal() {
    document.forms['paypalForm'].submit();
  }
}

