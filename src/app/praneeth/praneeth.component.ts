import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-praneeth',
  templateUrl: './praneeth.component.html',
  styleUrls: ['./praneeth.component.css']
})
export class PraneethComponent implements OnInit {
pname: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
this.pname=this.route.snapshot.params['name'];
//console.log(this.pname);
  }

}
