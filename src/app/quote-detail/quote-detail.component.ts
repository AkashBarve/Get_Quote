import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteDetailComponent implements OnInit {

  quote = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getQuoteDetail(this.route.snapshot.params['id']);
  }

  getQuoteDetail(id) {
    this.http.get('/quote/'+id).subscribe(data => {
      this.quote = data;
    });
  }
  deleteQuote(id) {
    this.http.delete('/quote/'+id)
      .subscribe(res => {
          this.router.navigate(['/quotes']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}