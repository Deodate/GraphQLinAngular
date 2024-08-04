import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_NEWS } from '../graphql.operations';

@Component({
  selector: 'app-igihe',
  templateUrl: './igihe.component.html',
  styleUrls: ['./igihe.component.css']
})
export class IgiheComponent implements OnInit {

  news: any[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_NEWS
    }).valueChanges.subscribe(({data, error }: any) => {
      this.news = data.news;
      this.error = error
    }
    );
     
  }
}