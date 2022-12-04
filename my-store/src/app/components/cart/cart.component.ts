import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart: Cart = { items: [{
    id: 0,
    title: "hhh",
    price: 9,
    image: "hhh",
    description:"hhh",
    quantity: 8,
  }
  ] };

  dataSource: CartItem[] = [];

  ngOnInit(): void {
    this.dataSource =  this.cart.items;
  }
  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  }


