import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  data: any; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
   // this.fetchData1();
  }

  fetchData() {
    this.http.get<any>('https://localhost:7010/api/Product/GetAll').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
}
