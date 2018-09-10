# :zap:  Angular Dynamic Filters Client Side | LiaVinci  :zap:

This project was built with [Angular](https://github.com/angular/angular-cli) version 1.0.2,
When you start the project an http call will be fired to get a JSON file with the filter configurations, based on the filter type when a user will make use of this filter a callback function will be fired.

In this project we will be filtering tasks thus we will also make an http call to get those tasks.

### :green_book: :blue_book: Filter Types :orange_book: :notebook:

* date
* options-checkbox
* optiona-radio
* string

### :pencil2: Define a filter :pencil2:

```sh
{
  "name": "Name", <---- Filter name to be displayed
  "identifier": "name", <---- Filter name
  "renderType": "string", <---- Define the render that will be displayed to the user as well as the logic that will be used to                                 filter the results
  "options": { <---- Extra configuration for the filter, can be empty, include validation, items etc... for more you can look                      at the mock-data/filters,json
    "validation": {
      "maxlength": 255
    }
  }
}
```

## :boom: Running & Testing :boom:

### First please make sure to install the app dependencies, to do so please follow the next steps:

- Install [npm](https://www.npmjs.com/) to make sure it's installed you can run `npm -v`
- Install [NodeJS](https://nodejs.org/en/download/package-manager/) to make sure it's installed you can run `node -v`
- Clone the repository
- Install dependencies: `npm install`

### To run the app :rocket:

* `npm run start`

### To test the app :clipboard:

* `npm run test`
