import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent  implements OnInit{
  products!: Product[];
  id = 0;
  product: Product = {} as Product;
  count = ['1', '2', '3', '4', '5'];
  quantity = '1';

  constructor( private cartService: CartService,private proService: ProductService, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.proService.getProducts().subscribe((res) => {
      this.products = res
      this.product = this.products.filter((item)=> item.id === this.id)[0]
    });
  }
  addProductToCart(): void {
    const cartItems: CartItem[] = this.cartService.getCartItems();
    let itemInCart = cartItems.find(item => item.id === this.product.id);
    if (itemInCart) {
      itemInCart.quantity = this.quantity;
      itemInCart ? this.cartService.addToCart(cartItems) : null;
      alert(`updated`);
    } else {
      cartItems.push(Object.assign(this.product, { quantity: this.quantity }));
      this.cartService.addToCart(cartItems);
      alert(`${this.product?.title
        } has been added to your cart.`);
    }

  }

}
