import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
