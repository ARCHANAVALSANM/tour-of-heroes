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

In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root AppModule.
By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app directory.

ng generate module app-routing --flat --module=app
--flat Puts the file in src/app instead of its own directory.
--module=app Tells ng generate to register it in the imports array of the AppModule.

Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
path -- A string that matches the URL in the browser address bar.
component -- The component that the router should create when navigating to this route.

The @NgModule metadata initializes the router and starts it listening for browser location changes.
The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
imports: [ RouterModule.forRoot(routes) ],
AppRoutingModule exports RouterModule to be available throughout the application.

The <router-outlet> tells the router where to display routed views.

The colon : character in the path indicates that :id is a placeholder for a specific hero id.

The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.

The route.snapshot is a static image of the route information shortly after the component was created.
The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
Route parameters are always strings. The JavaScript Number function converts the string to a number, which is what a hero id should be.

The backtick ( ` ) characters define a JavaScript template literal for embedding the id.

HttpClient is Angular's mechanism for communicating with a remote server over HTTP.
HTTP — it's the "language" between client and server.
HTTP is universal and standard
Works with REST APIs and most backends

Install the In-memory Web API package from npm with the following command:
npm install angular-in-memory-web-api --save

The forRoot() configuration method takes an InMemoryDataService class that primes the in-memory database.

of() for http.get() and the application keeps working without any other changes because both functions return an Observable<Hero[]>.

HTTP is a request/response protocol. You make a request, it returns a single response.
In general, an observable can return more than one value over time. An observable from HttpClient always emits a single value and then completes, never to emit again.
HttpClient.get() returns the body of the response as an untyped JSON object by default.

The $ is a convention that indicates heroes$ is an Observable, not an array.
Since \*ngFor can't do anything with an Observable, use the pipe | character followed by async. This identifies Angular's AsyncPipe and subscribes to an Observable automatically so you won't have to do so in the component class.

A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
You can also push values into that Observable by calling its next(value)
