import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  user = {categoryNo:0, categoryName:''};
  constructor(private http:HttpClient) {}
  
    onSubmit() {
      this.http.post('https://localhost:7010/api/Category/Add', this.user).subscribe(
        (response) => {
          console.log(response);
          console.log("added");
          alert("Successfully Added");
        },
        (error) => {
          console.log(error);
        }
      );}
      user1 = {subCategoryNo:0, subCategoryName: '',categoryId: 0,description: ''}
      oSubmit() {
        this.http.post('https://localhost:7010/api/Sub_Category/Add', this.user1).subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );}
        user2 = { productNo: 0,subCategoryId: 0,brand: '',price: 0,specification: ''}
        Submit() {
          this.http.post('https://localhost:7010/api/Product/Add', this.user2).subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );}
      
      // goToNextPage() {
      //   this.router.navigate(['/next-page']);
      // }
    
    
  }
   

   

// export class PostComponent implements OnInit {

//   constructor(private router: Router) { }

//   ngOnInit() {
//   }

 
// }