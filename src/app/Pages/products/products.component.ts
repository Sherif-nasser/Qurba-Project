import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  mainTitle: string = "IPhone";

  Items : any;
  constructor() { } 
  ngOnInit(): void {
    this.Items = [
      {id:1, path:"./../../../assets/Images/iphone8.png",title:"iphone 8"},
      {id:2, path:"./../../../assets/Images/iphone9.jpg",title:"iphone 9"},
      {id:3, path:"./../../../assets/Images/iphone10.jpg",title:"iphone 10"},
      {id:4, path:"./../../../assets/Images/iphone11.jpg",title:"iphone 11"},
      {id:5, path:"./../../../assets/Images/iphone12.jpg",title:"iphone 12"},
      {id:6, path:"./../../../assets/Images/iphone.png",title:"iphone 13"}
    ]
  }

}
