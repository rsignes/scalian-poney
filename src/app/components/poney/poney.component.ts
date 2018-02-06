import { Component, OnInit, Input } from '@angular/core';
import { Poney } from '../../interfaces/poney';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.css']
})
export class PoneyComponent implements OnInit {

  constructor() { }

  @Input() poney: Poney = {
    name: "",
    id: 0,
    distance: 0,
    image: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
  }

  ngOnInit() {
  }

}
