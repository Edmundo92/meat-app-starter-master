import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1,2,3,4,5]

  rate: number = 0

  previewsRate: number


  constructor() { }

  ngOnInit() {
  }

  setRate(r){
    this.rate = r
    this.previewsRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRater(r: number){
    if(this.previewsRate === undefined){
      this.previewsRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate(){
    if(this.previewsRate !== undefined){
      this.rate = this.previewsRate
      this.previewsRate = undefined
    }
  }

}
