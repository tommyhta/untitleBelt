import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  movies=[]

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getMovies()
  }
  getMovies(){
    let obs = this._httpService.getAllFromServer();
    obs.subscribe(data=>{
      if(data['ServerMessage']== "Success"){
        this.movies = data['Items']
        this.averRating()
      }
    })
  }

  averRating(){
    let mov = this.movies;
    for(var i of mov){
      let rating = 0;
      for(var x of i['reviews']){
        rating += x['rating'];
      }
      let aveR = rating/ i['reviews'].length
      i.averageRating = aveR
    }
    this.movies = mov;
  }



}
