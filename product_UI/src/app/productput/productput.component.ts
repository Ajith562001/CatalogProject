import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productput',
  templateUrl: './productput.component.html',
  styleUrls: ['./productput.component.css']
})
export class ProductputComponent {
  constructor(private http:HttpClient){}

  apiUrl = 'https://localhost:7010/api/Product/Updateproduct';

  user = { productNo: 0,
  subCategoryId: 0,
  brand: '',
  price: 0,
  specification: ''};
 
 
  onSubmit(){
  this.http.put(this.apiUrl, this.user).subscribe(response => {
   console.log('PUT request successful');
 }, error => {
   console.error('PUT request error:', error);
 });}
 
}
