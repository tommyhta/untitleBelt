import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  movieID:string;
  newReview = {
    name: '',
    rating: '',
    content: ''
  }
  errors = []

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getID()
  }

  createReview(){
    let obs = this._http.createComentToServer(this.movieID, this.newReview);
    obs.subscribe(data=>{
      this.errors=[];
      if(data['ServerMessage']== "Error"){
        for(var key in data['Error']['errors']){
          this.errors.push(data['Error']['errors'][key]['message'])
        }
      }else{
        this.newReview = {
          name:"",
          rating:"",
          content:""
        }
        this.goHome()
      }

    })
  }
  getID(){
    this._route.parent.params.subscribe(params => this.movieID = params['id'])
  }
  goHome(){
    this._router.navigate(['/movies/'+this.movieID])
  }
}
