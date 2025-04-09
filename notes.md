generated components added in app.module.ts

@Component is a decorator function that specifies the Angular metadata for the component.

Always export the component class so you can import it elsewhere … like in the AppModule.

[(ngModel)] is Angular's two-way data binding syntax.

Angular needs to know how the pieces of your application fit together and what other files and libraries the application requires. This information is called metadata.

FormsModule in app.module.ts

The \*ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. Reactive-Extensions

Observable is one of the key classes in the RxJS library

of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
