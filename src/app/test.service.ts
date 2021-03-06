import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(private http: Http) { }

  getTest() {
  	return new Promise((resolve, reject) => {
  		this.http.get('/test')
  			.map(res => res.json())
  			.subscribe(res => {
  				resolve(res);
  			}, (err) => {
  				reject(err);
  			});
  	});
  }
  
}
