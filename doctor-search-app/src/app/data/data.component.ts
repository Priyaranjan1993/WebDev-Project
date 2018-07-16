import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  doctorId = '';
  docProfileInfo: string[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    return fetch
    ('/2016-03-01/doctors/' + this.doctorId + '?user_key=737c87ec63ac3e77604e2fd4524f1308')
      .then(response => response.json())
      .then(results => {
        /*        results.data.forEach(function (value, key) {
                  this.docProfileInfo[key] = value;
                }.bind(this));
                console.log(this.docProfileInfo);*/
        this.docProfileInfo = results.data;
        console.log(this.docProfileInfo);
      });
  }

}
