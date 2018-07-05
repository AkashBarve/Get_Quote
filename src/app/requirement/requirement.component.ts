import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {
requirements: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/requirement').subscribe(data => {
      this.requirements = data;
    });
  }
  

}
