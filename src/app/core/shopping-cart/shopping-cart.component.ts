import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private _productService:ProductService) { 
    this._productService.count$.subscribe((count)=>{
      this.totalItems=count;
    })
  }
  
  @Input() totalItems=0;

  ngOnInit(): void {
  }

}
