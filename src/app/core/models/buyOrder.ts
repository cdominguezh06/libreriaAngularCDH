import {User} from './user';
import {Libro} from './libro';
import {BuyOrderItem} from './BuyOrderItem';

export class BuyOrder {
  buyOrderItems: BuyOrderItem[];
  user: User;

  constructor(items: BuyOrderItem[], user: User) {
    this.buyOrderItems = items;
    this.user = user;
  }
}
