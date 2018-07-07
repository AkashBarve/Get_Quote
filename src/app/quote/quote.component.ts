import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/quote').subscribe(data => {
      this.quotes = data;
    });
  }

}
