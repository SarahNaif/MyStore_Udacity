import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent  implements OnInit{
  products!: Product[];
  id = 0;
  product!: Product;
  count = ['1', '2', '3', '4', '5'];
  constructor( private proService: ProductService, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.proService.getProducts().subscribe((res) => {
      this.products = res
      this.product = this.products.filter((item)=> item.id === this.id)[0]
    });
  }


}
