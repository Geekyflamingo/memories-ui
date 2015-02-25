# Memories UI

An Ember CLI project that displays Moments and relies and uses an HTTP API for
getting the data. There is only one model and one view right now, the Moment and
Moments display.

## Assignment

Branch off of master, and work on implementing the tasks as you normally would.
Open up a pull request early, and commit often, explaining your approach and
thought process.

### The Gist

Utilizing the API endpoints and the way Ember works go through the two tasks and
add support for them in the app.

### Tasks

1. Add support for adding new Moments.
1. Add support for viewing a Memory (a Moment from the past).

### Expectations

Write tests where it seems applicable. Do not worry about smaller details. Focus
on the bigger picture implementation.

Branch off of master and commit as you go.

## Developing

### Prerequisites

Ensure the following software is installed (most can be installed with Homebrew
& NPM):

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [PhantomJS](http://phantomjs.org/)

The app expects the API app to run at http://localhost:3000.

### Getting Started

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install -g ember-cli`
* `npm install`
* `bower install`

### Starting the Server

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
