import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log, getUrlQueries } from '../../../../my_modules/stuff';
declare var require: any;

// change component mode 
const queries: any = getUrlQueries()
const mode = queries.mode ? queries.mode : 'empty'

@Component({
  selector: 'app-url-queries',
  templateUrl: './url-queries.component.html',
  styleUrls: [
    // mode == 'custom'
    // ? require('./url-queries.component-alternative.sass') // <---| not works for (ng build -prod)
    // : require('./url-queries.component.sass') // <---------------| can be used for (ng build): just for stage of development
    './url-queries.component.sass'
  ]
})
export class UrlQueriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // 1
    let mode = this.route.snapshot.queryParams["mode"];
    log(mode)

    // 2
    this.route.queryParams.subscribe(log);
  }

}
