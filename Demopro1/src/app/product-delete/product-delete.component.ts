import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  constructor(private http: HttpClient) { }
  Url = 'https://localhost:7010/api/Product';

user= {categoryNo:0}


onDelete() {
  return this.http.delete(`${this.Url}/${this.user}`).subscribe((res) =>
   {console.log(res);
    console.log("Deleted");
    alert("Successfully Deleted");
    
  }, error => {
    console.log(error);
  });
}
}
