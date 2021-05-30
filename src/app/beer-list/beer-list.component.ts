import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: Beer[]=
  [
    {
      name: "Bitter call saul",
      type: "IPA",
      price: 180,
      stock: 5,
      image: "assets/img/rubea.jpg",
      oferta: false,
    },
    {
      name: "Negra Juerte",
      type: "Porter",
      price: 123,
      stock: 0,
      image: "assets/img/negrajuerte.jpg",
      oferta: false,
    },
    {
      name: "Red Red Wine",
      type: "Barley Wine",
      price: 100,
      stock: 7,
      image: "assets/img/colora.jpg",
      oferta: true,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
