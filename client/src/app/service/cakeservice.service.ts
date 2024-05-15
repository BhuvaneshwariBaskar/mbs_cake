import { Injectable } from '@angular/core';
import { Cakes } from '../interface/cakes';

@Injectable({
  providedIn: 'root',
})
export class CakeserviceService {
  public cakes!: Cakes[];
  constructor() {}
  getCakes() {
   return this.cakes = [
      {
        cake_id: 1,
        cake_price: '$20.99',
        cake_name: 'Chocolate Delight',
        cake_image: 'chocolate_delight.jpg',
        cake_rating: 4.5,
        cake_desc:
          "Indulge in the rich, creamy goodness of our Chocolate Delight cake. Made with the finest ingredients and topped with chocolate ganache, it's a treat you won't forget.",
      },
      {
        cake_id: 2,
        cake_price: '$18.50',
        cake_name: 'Vanilla Dream',
        cake_image: 'vanilla_dream.jpg',
        cake_rating: 4.2,
        cake_desc:
          'Experience pure bliss with our Vanilla Dream cake. Light and fluffy layers infused with vanilla bean extract and finished with a velvety vanilla buttercream frosting.',
      },
      {
        cake_id: 3,
        cake_price: '$22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image: 'red_velvet.jpg',
        cake_rating: 4.7,
        cake_desc:
          'Surrender to the allure of our Red Velvet Temptation cake. Moist layers of red velvet cake paired with decadent cream cheese frosting, a classic favorite.',
      },
    ];
  }
}
