import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  constructor(private http:HttpClient){}

   apiUrl = 'https://localhost:7010/api/Sub_Category/UpdateSubCategory';

   user = {subCategoryNo: 0,
   subCategoryName: '',
   categoryId: 0,
   description: ''};
  
  
   onSubmit(){
   this.http.put(this.apiUrl, this.user).subscribe(response => {
    console.log('PUT request successful');
  }, error => {
    console.error('PUT request error:', error);
  });}
  
}
