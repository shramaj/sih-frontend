import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONS } from './mock-person';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class PersonService {

  constructor(private messageService: MessageService) { }

  getPersons(): Observable<Person[]> {
    this.messageService.add('PersonService: fetched persons');
    return of(PERSONS);
  }

  getPerson(id: number): Observable<Person> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(PERSONS.find(hero => hero.id === id));
  }

}
