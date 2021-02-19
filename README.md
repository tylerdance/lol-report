# LoL Ranked Report

Analysis tool for League of Legends ranked play information including leaderboards for top tiers and most recent patch bug fixes.

Currently in development:
- Including more regions beyond NA
- Calculate each players win/loss ratio and sort list by that percentage
- Search bar to find an indvidual player's stats

## Local installation
1. Clone this repo and the [back end repo](https://github.com/tylerdance/lol-report-backend) to your machine
2. Run `npm i` to install dependencies
3. Get an API key from https://developer.riotgames.com/
4. Create a `.env` file in both the front and back end
- Front end `.env`: `REACT_APP_SERVER_URL=http://localhost:8000`
- Back end `.env`: `LOL_API_KEY=yourKeyHere`
