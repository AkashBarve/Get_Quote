import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requirement-detail',
  templateUrl: './requirement-detail.component.html',
  styleUrls: ['./requirement-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RequirementDetailComponent implements OnInit {

  requirement = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getRequirementDetail(this.route.snapshot.params['id']);
  }

  getRequirementDetail(id) {
    this.http.get('/requirement/'+id).subscribe(data => {
      this.requirement = data;
    });
  }
  deleteRequirement(id) {
    this.http.delete('/requirement/'+id)
      .subscribe(res => {
          this.router.navigate(['/requirements']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}