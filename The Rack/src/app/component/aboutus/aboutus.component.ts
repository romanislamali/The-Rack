import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    //this is for page top auto scrolling
    this.router.events.subscribe((evt) =>{
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0)
  })
  }

}
