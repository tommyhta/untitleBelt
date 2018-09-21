import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent implements OnInit {
  errors = [];
  newMovie = { 
    name:'',
    reviews : {
      name:'',
      rating:'',
      content:''
    }
  }

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  createMovie(){
    let obs = this._http.createNewToServer(this.newMovie);
    obs.subscribe(data =>{
      if(data['ServerMessage']=="Error"){
        this.errors = []
        if(typeof(data['Error'])== 'string'){
          this.errors.push(data['Error'])
        }else{
          for(var key in data['Error']['errors']){
            this.errors.push(data['Error']['errors'][key]['message'])
          }
        }
      }else{
        this.newMovie = { 
          name:'',
          reviews : {
            name:'',
            rating:'',
            content:''
          }
        }
        this.goHome()
      } 
    })
    
  }

  goHome(){
    this._router.navigate(['/movies'])
  }
}
