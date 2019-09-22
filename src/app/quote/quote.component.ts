import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quite: Quote[] = [
    new Quote(
      1,
      'If we acknowledge our need for God, he will help user',
      'Ben Carson',
      'Think big',
      new Date(2018, 5, 16),
      0,
      0),
      
    new Quote(
      2,
      'Some are born great,some achieve greatness,and some have greatness thrust upon them',
      'Twelfth Night',
      'Shakespear',
      new Date(1999, 1, 20),
      0,
      0),

    new Quote(
      3,
      'Time wasted never come back',
      'Albert',
      'Thomson',
      new Date(1998, 2, 16),
      0,
      0),
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
