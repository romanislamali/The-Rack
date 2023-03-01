import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-customar-reg',
  templateUrl: './customar-reg.component.html',
  styleUrls: ['./customar-reg.component.scss']
})
export class CustomarRegComponent implements OnInit {

  public cRegForm !:FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.cRegForm = this.formBuilder.group({
      name:[''],
      phone:[''],
      email:[''],
      password:[''],
      address:['']
    })
  }
  registration(){
    this.http.post<any>("http://localhost:3000/customar", this.cRegForm.value)
    .subscribe(res=>{
      alert("Registration Successfull");
      this.cRegForm.reset();
      this.router.navigate(['orderdetails']);
    },error=>{
      alert("Something went wrong!!");
    })
  }

}
