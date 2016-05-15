# node-js

- web server (serves api & client app - does not expose API code)
 - server.js is "main" file 
 - minimal web client
    - index.html - consumes excuses endpoint, displays on screen with random background from reddit.com/r/earthporn
 - api endpoints:
    - api/data: CRUD with mySql db
    - /exc: dev excuse generator w/ web app - iphone companion not included
    - api/weather: consumes third party weather api, responds with data
    - api/xkcd: web crawler to scrape comics off of xkcd
