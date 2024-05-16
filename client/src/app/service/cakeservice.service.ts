import { Injectable } from '@angular/core';
import { Cakes } from '../interface/cakes';

@Injectable({
  providedIn: 'root',
})
export class CakeserviceService {
  public cakes!: Cakes[];
  constructor() {}
  getCakes() {
    return (this.cakes = [
      {
        cake_id: 1,
        cake_price: '20.99',
        cake_name: 'Chocolate Delight',
        cake_image:
          'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/5/1/IG1C17_30946_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1433541424559.jpeg',
        cake_rating: 4.5,
        cake_desc:"Anniversary"
      },
      {
        cake_id: 2,
        cake_price: '18.50',
        cake_name: 'Vanilla Dream',
        cake_image:
          'https://assets.winni.in/product/primary/2023/8/88014.jpeg?dpr=2&w=220',
        cake_rating: 4.2,
        cake_desc:"Birthday"
      },
      {
        cake_id: 3,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Farewell"
      },
      {
        cake_id: 4,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Anniversary"
      },
      {
        cake_id: 5,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Birthday"
      },
      {
        cake_id: 6,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Birthday"
      },
      {
        cake_id: 7,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Birthday"
      },
      {
        cake_id: 8,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Birthday"
      },
      {
        cake_id: 9,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Birthday"
      },
      {
        cake_id: 10,
        cake_price: '22.99',
        cake_name: 'Red Velvet Temptation',
        cake_image:
          'https://assets.winni.in/product/primary/2023/3/83223.jpeg?dpr=1&w=500',
        cake_rating: 4.7,
        cake_desc:"Birthday"
      },
    ]);
  }
}
