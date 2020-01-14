To reproduce https://github.com/zeit/next.js/issues/10024

1. Run `npm install`
2. Run `npm start`
3. Goto a 404 page, eg: http://localhost:3000 
4. Analyse console or network tab in chrome and you will notice it reloads every 3 seconds

This is based off a basic express generator project:
https://expressjs.com/en/starter/generator.html

and adding next integration to it
