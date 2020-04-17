import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
