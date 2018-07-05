import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requirement-edit',
  templateUrl: './requirement-edit.component.html',
  styleUrls: ['./requirement-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequirementEditComponent implements OnInit {

  requirement = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRequirement(this.route.snapshot.params['id']);
  }

  getRequirement(id) {
    this.http.get('/requirement/'+id).subscribe(data => {
      this.requirement = data;
    });
  }

  updateRequirement(id, data) {
    this.http.put('/requirement/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/requirement-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}