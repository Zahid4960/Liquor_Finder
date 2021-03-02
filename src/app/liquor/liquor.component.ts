import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-liquor',
  templateUrl: './liquor.component.html',
  styleUrls: ['./liquor.component.scss']
})
export class LiquorComponent implements OnInit {

  liquors: object

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getLiquors().subscribe(data => {
      this.liquors = data;
      console.log(this.liquors)
    });
  }

}
