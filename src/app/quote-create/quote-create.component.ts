import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteCreateComponent implements OnInit {

  quote = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveQuote() {
    this.http.post('/quote', this.quote)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/quote-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}