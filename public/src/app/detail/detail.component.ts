import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.checkRoute()
  }

  checkRoute(){
    this._route.params.subscribe((params:Params)=>{
      let obs = this._httpService.getOneFromServer(params['id']);
      obs.subscribe(data=>{
        if(data['ServerMessage']== "Error"){
          this.goHome()
        }else{
          this.movie = data['Items']
        }
      })
    })
  }
  goHome(){
    this._router.navigate(['/movies'])
  }
  deleteReview(id){
    let obs = this._httpService.deleteReviewToServer(this.movie['_id'], id);
    obs.subscribe();
    this.checkRoute()
  }
  deleteMovie(id){
    let obs = this._httpService.deleteToServer(id);
    obs.subscribe();
    this.goHome();
  }

}
