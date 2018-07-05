import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requirement-create',
  templateUrl: './requirement-create.component.html',
  styleUrls: ['./requirement-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequirementCreateComponent implements OnInit {

  requirement = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveRequirement() {
    this.http.post('/requirement', this.requirement)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/requirement-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}