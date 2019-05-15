import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-winners-item',
  templateUrl: './winners-item.component.html',
  styleUrls: ['./winners-item.component.css']
})
export class WinnersItemComponent implements OnInit {
@Input() winner;
@Input() info;



  constructor() { }

  ngOnInit() {
  }

}

