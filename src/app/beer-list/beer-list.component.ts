import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beer={
    "name": "Negra Juerte",
    "type":"Porter",
    "price": 123,
    "stock": 5,
    "image": "assets/img/negrajuerte.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
