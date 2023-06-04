import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  data: any; data1:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
   // this.fetchData1();
  }

  fetchData() {
    this.http.get<any>('https://localhost:7010/api/Category/GetAll').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
}





