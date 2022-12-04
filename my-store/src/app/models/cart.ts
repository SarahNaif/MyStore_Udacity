export interface Cart {
  items: Array<CartItem>;
}
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}
