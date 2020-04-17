import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log('red');
  }

}
