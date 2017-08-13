import { Component } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DGList';
  product: Product = {
    title: '苹果Apple iPhone7 手机 黑色 32GB',
    price: 4498.00,
    image: 'http://img14.360buyimg.com/n1/s450x450_jfs/t3754/265/902031417/103522/d308968f/581af17fN1057992a.jpg'
  };
}