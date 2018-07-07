import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteEditComponent implements OnInit {

  quote: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuote(this.route.snapshot.params['id']);
  }

  getQuote(id) {
    this.http.get('/quote/'+id).subscribe(data => {
      this.quote = data;
    });
  }

  updateQuote(id) {
    this.http.put('/quote/'+id, this.quote)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/quote-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}