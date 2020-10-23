import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anil',
  templateUrl: './anil.component.html',
  styleUrls: ['./anil.component.css']
})
export class AnilComponent implements OnInit {
aname:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.aname=this.route.snapshot.params['name'];
    console.log('value',this.route.snapshot.params);
  }

}
