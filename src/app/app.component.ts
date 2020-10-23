import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isRouteloaded:boolean=false;
  constructor(private location :Location,private router: Router, private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.router.events.subscribe((val) =>{
      this.isRouteloaded=this.location.path() !=='' ? true : false;
console.log('value',this.isRouteloaded);
    
    });
//     // this.isRouteloaded = this.route.snapshot.queryParams[]
//   this.route.params.subscribe((data)=>{
  
  }
  asend(){
    this.router.navigate(['/anil'])
  }
  psend(){
    this.router.navigate(['praneeth'])
  }
}
