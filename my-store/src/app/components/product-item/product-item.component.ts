import { CartItem } from './../../models/cart';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  count = ['1', '2', '3', '4', '5'];

  quantity= "1";
  constructor(  private cartService: CartService, private _snackBar: MatSnackBar) {
    this.product = {
      id:0,
      title:"",
      price: 0,
      image: "",
      description: "" }


  }

  onClick(): void {
    const cartItems: CartItem[] = this.cartService.getCartItems();
    let itemInCart = cartItems.find(item => item.id === this.product.id);
    if ( itemInCart) {
      itemInCart.quantity = this.quantity;
      //
      itemInCart ? this.cartService.addToCart(cartItems) : null;
      this._snackBar.open(`item updated to cart`, 'Ok', { duration: 3000 });
    } else {
      cartItems.push(Object.assign(this.product, { quantity: this.quantity}));
      this.cartService.addToCart(cartItems);
      this._snackBar.open(`${this.product.title} item added to cart`, 'Ok', { duration: 3000 });

    }
  }
}
