# simple-analytics-server

> Backend for the simple analytics project
This project provides a simple alternative for analytics. 

## How it works

Using the 'https://github.com/lgaribaldi/simple-analytics-front' you can register your projects and receive an ID for each one. Then you need to change your tracked software and put a POST request to the simple-analytics-server, containing the project ID and a description for your event (eg Item added to cart).
Then, you will be able to see when each event happened.

## Disclaimer

This project still needs some adjustments to be production ready. It does not have a live version yet, but will soon.

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/simple-analytics-server; npm install
    ```
3. Go to default.json and add your data:
    - Your Github ID and Secret
    - Your authentication secret (you can simply run `feathers generate secret`)

4. Start your app

    ```
    npm start
    ```