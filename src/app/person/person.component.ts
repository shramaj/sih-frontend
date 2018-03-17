import { Component, OnInit } from '@angular/core';
import {Person} from "../person";
import {PERSONS} from "../mock-person";
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  persons = PERSONS;
  selectedPerson : Person;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(person: Person): void {
  this.selectedPerson = person;
  }

}
