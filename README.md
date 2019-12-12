# DoctorsBookingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#json server running
if u want to show after login department category list. you should run following commands
npm install -g json-server
then go to your route folder 
json-server --watch doctors.json run this command line
then u can see db.json file in your route folder specifically (angular.json file location) u can paste here
{
    "category" : [ 
      {
        "id": 1,
        "department" : "Physician",
        "avatar" : "/assets/images/icons/doctor.png"
      }, 
      {
        "id": 2,
        "department" : "Dentist",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 3,
        "department" : "Dermatologist",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 4,
        "department" : "Paediatric",
        "avatar" : "/assets/images/icons/doctor.png"
      }, 
      {
        "id": 5,
        "department" : "Orthopedician",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 6,
        "department" : "Cardiology",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 7,
        "department" : "Gynologist",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 8,
        "department" : "Neurologist",
        "avatar" : "/assets/images/icons/doctor.png"
      }, 
      {
        "id": 9,
        "department" : "Homeopathy",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 10,
        "department" : "Oncologist",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 11,
        "department" : "Ayurveda",
        "avatar" : "/assets/images/icons/doctor.png"
      },
      {
        "id": 12,
        "department" : "Radiologist",
        "avatar" : "/assets/images/icons/doctor.png"
      }
    ],
    "profile" : [ 
      {
        "id": 1,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 2,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 3,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 4,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 5,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 6,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 7,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 8,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 9,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        "id": 10,
        "avatar" : "/assets/images/icons/doctor.png",
        "message" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ],
    "pictures" : [
      {
        "id": 1,
        "author" : "Lisa",
        "description" : "A wonderful view of nature",
        "img" : "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg",
        "title" : "A natural view"
      },
      {
        "id": 2,
        "author" : "Andy",
        "description" : "Seaside sunset",
        "img" : "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg",
        "title" : "Landscape view"
      }
    ]
  }
  
above is the format you can edit and customize as per ur wish

Now if you go to http://localhost:3000/category, you'll get

{
    "category" : [ 
      {
        "id": 1,
        "department" : "Physician",
        "avatar" : "/assets/images/icons/doctor.png"
      }, 

for more details regarding json server api check the following url:
https://www.npmjs.com/package/json-server

