import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // heroes = HEROES;
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  ngOnInit(): void {
    this.getHeroes();
  }
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  // hero: Hero = { id: 1, name: 'Windstorm' };
}

// The previous version assigns an array of heroes to the component's heroes property.
// The assignment occurs synchronously, as if the server could return heroes instantly
// or the browser could freeze the UI while it waited for the server's response.
// That won't work when the HeroService is actually making requests of a remote server.
// The new version waits for the Observable to emit the array of heroes, which could
// happen now or several minutes from now. The subscribe() method passes the emitted
// array to the callback, which sets the component's heroes property.
// This asynchronous approach works when the HeroService requests heroes from the server.
