import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private http: HttpClient) { }
  Url = 'https://localhost:7010/api/Category';

user= {categoryNo:0}


onDelete() {
  return this.http.delete(`${this.Url}/${this.user}`).subscribe((res) => {console.log(res);
    console.log("Deleted");
    alert("Successfully Deleted");
    
  }, error => {
    console.log(error);
  });
}


}
