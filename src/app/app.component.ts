import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-tools-frontend';
  shadow = 'shadow-sm';
  shadow1 = 'shadow-sm';
  shadow4 = 'shadow-sm';
  shadow3 = 'shadow-sm';
  shadow2 = 'shadow-sm';
  shadow5: string;
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public minifyForm = new FormGroup({
    json: new FormControl('')
  });

  beautyfyForm = new FormGroup({
    json: new FormControl('')
  });

  dropperForm = new FormGroup({
    json: new FormControl(''),
    toDrop: new FormControl('')
  });

  filterForm = new FormGroup({
    json: new FormControl(''),
    toFilter: new FormControl('')
  });

  compareForm = new FormGroup({
    json1: new FormControl(''),
    json2: new FormControl('')
  });

  responseForm = new FormGroup({
    response: new FormControl('')
  });

  minify(){
    this.http.get(
      this.baseUrl + '/minify',
      {
        params: {json: this.minifyForm.controls.json.value}
      }
    ).subscribe(
      (data: Data) => {
        console.log(data);
        this.responseForm.controls.response.setValue(data.data);
      }
    );
  }

  beautyfy(){
    this.http.get(
      this.baseUrl + '/beautyfy',
      {
        params: {json: this.beautyfyForm.controls.json.value}
      }
    ).subscribe(
      (data: Data) => {
        console.log(data);
        this.responseForm.controls.response.setValue(data.data);
      }
    );
  }

  dropper(){
    this.http.get(
      this.baseUrl + '/drop',
      {
        params: {
          json: this.dropperForm.controls.json.value,
          toDrop: this.dropperForm.controls.toDrop.value
        }
      }
    ).subscribe(
      (data: Data) => {
        console.log(data);
        this.responseForm.controls.response.setValue(data.data);
      }
    );
  }

  filter(){
    this.http.get(
      this.baseUrl + '/filter',
      {
        params: {
          json: this.filterForm.controls.json.value,
          toFilter: this.filterForm.controls.toFilter.value
        }
      }
    ).subscribe(
      (data: Data) => {
        console.log(data);
        this.responseForm.controls.response.setValue(data.data);
      }
    );
  }

  compare(){
    this.http.get(
      this.baseUrl + '/compare',
      {
        params: {
          json1: this.compareForm.controls.json1.value,
          json2: this.compareForm.controls.json2.value
        }
      }
    ).subscribe(
      (data: Data) => {
        console.log(data);
        this.responseForm.controls.response.setValue(data.data);
      }
    );
  }
}
