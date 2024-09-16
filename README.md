# `S.C.I.P.E.` "Skippy"
### `Smart Computer Interface for Protocol Execution`
  
### Goals:  
#### Automated Student Assignments:  
> Develop a fully automated system that, once students are assigned teams in the Teambuilder app, immediately adds them to the appropriate GitHub repositories and Discord channels without manual intervention.  
 
#### Detect Teams Changes:  
> Ensure that any changes to teams made in the TeamBuilder app automatically update in both GitHub and Discord. Keep both platforms in sync with the current team structure.  

#### Error Detection and Notification System:   
> Create a system that detects and handles errors in the assignment process (e.g., failed API calls) and sends notifications to administrators to resolve issues.  

#### Detect Student Error:   
> If invitation to GitHub or Discord was send to all students, but the number of people in the GitHub or Discord doesn’t match to number of people in the team, send email to administrators and team members that some of them didn’t accept the invites.   

#### Long-Term Data Storage and Analytics:   
> Implement a system to store team and student data long-term, allowing for historical analysis of project team structures, participation, and outcomes for improving future course management.   

# Documentation  
- [**Discord.js documentation:**](https://discord.js.org/)
- [**GitHUb REST API Documentation:**](https://docs.github.com/en/rest?apiVersion=2022-11-28)  

Youtube Vids Thay _might_ be helpful:
- [GitHub API Tutorial | 2023](https://www.youtube.com/watch?v=-kFyPaHNgXo)  
- [Intro to Webhooks - Real Time App Automation (Discord Bot, Slack, GitHub)](https://youtu.be/c6d7lfvziRY?si=jgClodcd5T3ZjLhI)  
- [Building an API with Node.js, Express.js, and OctoKit Tutorial that talks to GitHub](https://youtu.be/1S4CbFlOVF4?si=Gf0WGR37PcV9jz9l) (low quality)  
- [Building a Discord Bot to Interact with the GitHub API - A Step-by-Step Guide!](https://youtu.be/1CuXR7NoynI?si=kIiYq5mCn4TjTGwI) (low quality)  


# Dev Installation
1) **Install these dependencies:** (If having issues, follow the **_Setup Tutorial_** video) [^1]
```
# discord.js - Discord API for JavaScript
npm install discord.js

# nodemon - For auto-updating the bot instead of needing to re-start it all the time
npm install -g nodemon

# dotenv - For making environment variables, added security
npm install dotenv
```
2) After installing those dependencies, copy the SCIPE GitHub repository to your computer. Once done, add a new file called '.env' to use for storing IDs [^2]. Create three values as so:
```
TOKEN = <Bot Token>         
GUILD_ID = <Server ID>      
BOT_ID = <Bot ID>           
```
3) Once finished, open the VS code terminal (command prompt) and run `npm init -y`. This will build the package.json file, open it and make sure it looks just like this: 
```
   {
     "name": "scipe",
     "version": "1.0.0",
     "description": "S.C.I.P.E.  Smart Computer Interface for Protocol Execution",
     "main": "src/index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
       "discord.js": "^14.16.2",
       "dotenv": "^16.4.5"
     }
   }
```
4) Assuming everything is correct, the bot should startup when you run `nodemon` or `node src/index.js` in the terminal. [^3] [^4] 

[^1]: [**Setup Tutorial**](https://www.youtube.com/watch?v=KZ3tIGHU314)  
[^2]: NOTE: Getting the `TOKEN` and `BOT_ID` values require you to have admin access to a constructed bot via [Discord Dev](https://discord.com/developers/applications)  
The `TOKEN` value is taken from [Discord Dev](https://discord.com/developers/applications). You can find it located under the `Bot` tab.   
The `Guild_ID` can be found by right-clicking the Discord server's name and clicking `Copy Server ID`  
The `Bot_ID` can be found by right clicking the bot in discord and clicking `Copy User ID`. Alternatively it can also be found in the URL of the bot on [Discord Dev](https://discord.com/developers/applications)   
[^3]: If `nodemon` is returning an error, it means there is an error in the code, not that the setup is incorrect.  
[^4]: S.C.I.P.E. will output: `SCIPE (Skippy)#7016 is online.` to the terminal when the bot is running correctly.  
