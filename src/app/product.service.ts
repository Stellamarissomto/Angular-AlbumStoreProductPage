import { Injectable } from '@angular/core';
import { Http,  Response} from '@angular/http';

@Injectable()
export class ProductService {
 
  private_albumUrl: '../assets/album.json';


  constructor(private _http: Http ) {}

}
