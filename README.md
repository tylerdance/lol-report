# LoL Ranked Report

Analysis tool for League of Legends ranked play information including Challenger, Grandmaster, and Master tiers. Players are ranked by League Points.

[Live site](http://lolrankedreport.herokuapp.com)

Currently in development:
- Including all regions
- Calculate each players win/loss ratio and sort list by that percentage
- Search bar to find an indvidual player's recent match info

## Build Info
This React app was built with an Express backend to avoid CORS errors. The front end makes the `axios` requests to the backend then the backend makes the `axios` requests to the Riot APIs.

## Local installation
1. Clone this repo and the [back end repo](https://github.com/tylerdance/lol-report-backend) to your machine
2. Run `npm i` to install dependencies
3. Get an API key from https://developer.riotgames.com/
4. Create a `.env` file in both the front and back end
- Front end `.env`: `REACT_APP_SERVER_URL=http://localhost:8000`
- Back end `.env`: `LOL_API_KEY=yourKeyHere`
