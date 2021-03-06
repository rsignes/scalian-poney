import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';
import { Race } from '../../interfaces/race';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = `the Race`;
  races$: Observable<Race[]>

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.races$ = this.raceService.getRaces()
  }

}
