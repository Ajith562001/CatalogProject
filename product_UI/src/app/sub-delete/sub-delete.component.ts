import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sub-delete',
  templateUrl: './sub-delete.component.html',
  styleUrls: ['./sub-delete.component.css']
})
export class SubDeleteComponent {
  constructor(private http: HttpClient) { }
  Url = 'https://localhost:7010/api/Sub_Category';

user= {subCategoryNo:0}


onDelete() {
  return this.http.delete(`${this.Url}/${this.user.subCategoryNo}`).subscribe((res) => 
  { console.log(res);
    console.log("Deleted");
    alert("Successfully Deleted");
    
  }, error => {
    console.log(error);
  });
}
}
