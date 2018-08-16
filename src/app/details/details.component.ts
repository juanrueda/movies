import { Component, OnInit, Input } from '@angular/core';
import {Movies} from '../movies';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  @Input() movie: Movies;

  ngOnInit() {
  }

}
