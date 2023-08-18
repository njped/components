import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-example-dog',
  templateUrl: './example-dog.component.html',
  styleUrls: ['./example-dog.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule]
})
export class ExampleDogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
