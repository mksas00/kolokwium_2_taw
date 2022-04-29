import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MSDataService {

  private url = "https://taw-posts.herokuapp.com/"
  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(this.url + 'api/posts')
  }

  getOne(id:string){
    return this.http.get(this.url + "api/posts/" + id)
  }

}
