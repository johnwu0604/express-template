# Express App Template (With Angular 2)

This is a boiler plate for a Node + Express + Angular 2 webapp stack.

## How to use the template ##

1) Clone the repository
2) Change the name of the app in bin/wwww, .angular-cli.json, package.json, src/index.html files

## Setup ##
1) Ensure angular-cli is installed globally: Run "sudo npm install @angular/cli -g"
2) Run "npm install"
3) Run "ng build"
4) Run "npm start"
5) Go to localhost:5000 

## Adding routes to the backend ##
Any new routes files should be defined in app.js and then added to the routes folder. Creating an api folder for logic operations is reccomended.

## To create a service in angular 2 ##
1) Run "ng g service <name of service>" 
2) Add the import for app.module.ts
3) Add it to the providers in @NgModule (also in app.module.ts)
4) Implement service functionality in src/app/<name of service>.service.ts file 
* See test service as example *

## To create a component in angular 2 ##
1) Run "ng g component <name of component>"
2) Implement component in src/app/<name of component>/<name of component>.component.ts
3) Implement html in src/app/<name of component>/<name of component>.component.html (Bootstrap is already integrated)
* See test component *

## Defining routes in angular 2 ##
UI routes can be added in src/app/app.module.ts (currently the root path displays the test component which uses the test service to call our test endpoint as an example)

## Adding a database ##
There is currently no database configured for this template with the purpose of giving the developer the freedom to integrate the database however they want, catered to their own needs.