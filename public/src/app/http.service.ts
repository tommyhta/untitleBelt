import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllFromServer(){
    return this._http.get('/item');
  }
  getOneFromServer(id){
    return this._http.get('/item/'+id)
  }
  updateToServer(id, item){
    return this._http.put('/item'+id, item)
  }
  deleteToServer(id){
    return this._http.delete('/item/'+id)
  }
  createNewToServer(item){
    return this._http.post('/item', item)
  }
  createComentToServer(id, comment){
    return this._http.post('/item/'+id+'/comment', comment);
  }
  deleteReviewToServer(id, cid){
    return this._http.delete('/item/'+id+'/comment/'+cid)
  }
}
