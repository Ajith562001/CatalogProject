import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {
  data: any; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
   this.fetchData1();
  }
  fetchData1() {
    this.http.get<any>('https://localhost:7010/api/Sub_Category/GetAll').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
