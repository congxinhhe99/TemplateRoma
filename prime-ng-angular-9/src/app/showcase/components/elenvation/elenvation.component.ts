import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elenvation',
  templateUrl: './elenvation.component.html',
  styleUrls: ['./elenvation.component.css']
})
export class ElenvationComponent implements OnInit {
  boxes: Array<number> = new Array(24);
  constructor() { }

  ngOnInit(): void {
  }

}
