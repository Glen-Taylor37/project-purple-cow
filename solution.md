# Project Purple Cow

## Description
This is a small web application designed to show a single button that you can increment using the countapi. A counter will be displayed with the current value for the corresponding key 

## Configuration
PORT [default: 3000]:
    - Open ./run.sh, edit PORT variable at top of file to desired port
    - Cannot re-configure port for DockerFile.. currently


## Installation
execute command in shell:
    git pull https://github.com/Glen-Taylor37/project-purple-cow.git
    cd project-purple-cow

## Run
execute command in shell:
    npm install --silent --production && npm start

or

execute command in shell:
    docker build --build-arg port=3000 -t project-purple-cow . && docker run -it -p 3000:3000 project-purple-cow
open localhost:3000 in Chrome browser

or

execute command in shell:
    . ./run.sh


## To do
- Fix spacing between button cards. 
- Set min, max width for cards and limit number of entries in each row.
- Standardize text sizes for headers and buttons
- Add menu to header, when activated it will display a drawer component with navigation for the website
- Resize icons to be smaller on xs displays
- Add icon to header next to title
- Spinner for count when fetching from api instead of displaying 0 at page render
- Animation to change count value
- Make button card fully modular including ability to pass down key
- Allow developers to modify port for DockerFile

## Considerations/Design Decisions
- This app was bootstrapped using CRA in order to quickly develop a single page application
- The scaffolding for this application is as such:
    - Header: Title
    - Content: Flexbox with individual button cards
    - Footer: Social Media links corresponding to Fearless
- All styling is done via Google's Material UI
- There is a main theme following the Fearless.tech website's color palette
- This application is designed to show different button cards along a single row. There is wrap such that
once the number of cards exceeds the screen width, it will produce another row
- In order to add more button cards to the content, one must modify the Content component's box to include additional ButtonCard components
- The ButtonCard component contains the CountAPI key value, a sub-text, and the button component to increment the key
- Fetching is done via async/await using the countapi-js package
- In order to extend the ButtonCard Component, a key property could be passed in to read from other keys instead of the pre-defined one for this exercise