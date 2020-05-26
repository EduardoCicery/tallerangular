import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  enfermedades=['assets/img/piojos.jpg','assets/img/ojos.jpg','assets/img/resfriado.jpg','assets/img/resucitando.jpg','assets/img/voces.jpg','assets/img/3312.jpg'];


  constructor() { }

  ngOnInit(): void {
  }

}
