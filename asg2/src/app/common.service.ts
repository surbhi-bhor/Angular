import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http : HttpClient) { }

  createAd(ad: any){
    return this._http.post("http://localhost:3000/ads", ad)
  }

  getAllAd(){
    return this._http.get("http://localhost:3000/ads")
  }

  updateAd(ad:any){
  return this._http.put("http://localhost:3000/ads" +ad.id, ad)
  }

  deleteAd(ad:any){
    return this._http.delete("http://localhost:3000/ads/" +ad.id)
  }
}
