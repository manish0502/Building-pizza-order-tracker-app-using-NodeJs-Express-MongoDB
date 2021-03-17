# Building-pizza-order-tracker-app-using-NodeJs-Express-and-Mongo-DB

#
![](images/1.png)




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.


# Quick Start
### Install Node.js and Angular-cli:
```sh
$ Download Project
$ cd shopping-cart
$ npm i and it will run on following port
$ http://localhost:4200/ 
$ for running json server "json-server db.json" open http://localhost:3000/products
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Tools
```sh
 * AngularJS - Base framework
 * Bootstrap4.5 - Build
 * NPM , Nodejs , json-server
 * Animate.css - Animation library, use with ng-animate
 * Rxjs
```

## Overall Directory Structure

At a high level, the structure looks roughly like this:

 ![](images/architect1.png)
 

### What follows is a brief description of each entry, but most directories contain their own README.md file with additional documentation, so browse around to learn more.

 * `karma/ `- test configuration.
 * `src/ `- our application sources. Read more »
 * `vendor/` - third-party libraries. Bower will install packages here. Anything added to this directory will need to be manually added to build.config.js and *  *`karma/karma`-unit.js to be picked up by the build system.
 * `.bowerrc` - the Bower configuration file. This tells Bower to install components into the vendor/ directory.
 *` bower.json` - this is our project configuration for Bower and it contains the list of Bower dependencies we need.
 * `build.config.js` - our customizable build settings; see "The Build System" below.
 * `module.prefix and module.suffix` - our compiled application script is wrapped in these, which by default are used to place the application inside a self-    
 * `package.json` - metadata about the app, used by NPM and our build script. Our NPM dependencies are listed here.

## Overall Screens Looks as below.

 * Main screen
 
   ![](images/1.png)

 * Login screen
 
   ![](images/3.png)
   
 * Registration
  
  ![](images/2.png)
  
  *Validated-registartion-view
  
  ![](images/reg-val.png)
  
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
