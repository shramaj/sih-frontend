import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../person";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonService }  from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() person: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
      .subscribe(person => this.person = person);
  }
  
  goBack() {
    this.location.back();
  }

}
