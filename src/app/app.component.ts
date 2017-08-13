import { Component } from '@angular/core';
import { Product } from './product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DGList';
  products:Product[];
}