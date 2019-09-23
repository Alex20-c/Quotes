import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'If we acknowledge our need for God, he will help us',
      'Ben Carson',
      'Think big',
      new Date(2019, 5, 16),
      0,
      0),

    new Quote(
      2,
      'Some are born great,some achieve greatness,and some have greatness thrust upon them',
      'Twelfth Night',
      'Shakespear',     
      new Date(2018, 1, 20),
      0,
      0),

    new Quote(
      3,
      'Time wasted never come back',
      'Albert',
      'Thomson',     
      new Date(2019, 2, 16),
      0,
      0),
  ];

  upvote(index) {
    this.quotes[index].upvotes++;
  }
  downvote(index) {
    this.quotes[index].downvotes++;
  }
  highestUpvote() {
    this.upvote
  }
  //this.prenum=0
  //this.lastNum=0

  // for(this.counter=0; this.quotes.length; this.counter++){
  //     this.lastNum = this.quotes[this.counter].upvotes;
  //     if(this.lastNum > this.preNum){
  //       this.preNum = lastNum}
  //   }
  //   return this.preNum;
  // }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
