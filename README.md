# SCIPE
S.C.I.P.E.  Smart Computer Interface for Protocol Execution 

Goals:
Automated Student Assignments: Develop a fully automated system that, once students are assigned teams in the Teambuilder app, immediately adds them to the appropriate GitHub repositories and Discord channels without manual intervention. 
 

Detect Teams Changes: Ensure that any changes to teams made in the TeamBuilder app automatically update in both GitHub and Discord. Keep both platforms in sync with the current team structure. 
 

Error Detection and Notification System: Create a system that detects and handles errors in the assignment process (e.g., failed API calls) and sends notifications to administrators to resolve issues. 
 

Detect Student Error: If invitation to GitHub or Discord was send to all students, but the number of people in the GitHub or Discord doesn’t match to number of people in the team, send email to administrators and team members that some of them didn’t accept the invites.  
 

Long-Term Data Storage and Analytics: Implement a system to store team and student data long-term, allowing for historical analysis of project team structures, participation, and outcomes for improving future course management. 

# Documentation
Setup Tutorial: https://www.youtube.com/watch?v=KZ3tIGHU314
Discord.js documentation: https://discord.js.org/

Discord Bot <---> Github API documentation:
GitHUb REST API Documentation: https://docs.github.com/en/rest?apiVersion=2022-11-28  

Youtube Vids Thay mihgt(?) be helpful:
https://www.youtube.com/watch?v=-kFyPaHNgXo 
https://youtu.be/c6d7lfvziRY?si=jgClodcd5T3ZjLhI 
https://youtu.be/1S4CbFlOVF4?si=Gf0WGR37PcV9jz9l (low quality)
    https://youtu.be/1CuXR7NoynI?si=kIiYq5mCn4TjTGwI (part 2)

For documentation purposes, replace "client" with "SCIPE" in tutorials


# Dev Installation
1) Install/Build these npm modules

- discord.js
    - -> npm install discord.js

- package.json 
    - -> npm init -y

- nodemon (For auto-updating the bot instead of needing to re-start it all the time) 
    - -> npm install -g nodemon

- dotenv (For making environment variables, added security)
    - -> npm install dotenv

2) Once those are installed, copy the GitHub repository to your computer. After that, add a new file called '.env' to use for storing IDs. Create three values as so:

    TOKEN = <Bot Token>         //Copied from the Discord Developer Portal
    GUILD_ID = <Server ID>      //Copied directly from Discord
    BOT_ID = <Bot ID>           //Copied directly from Discord


3) Assuming everything is correct, the bot should startup when you run 'nodemon' or 'node src/index.js' in the terminal. S.C.I.P.E. will output: "SCIPE (Skippy)#7016 is online." to the terminal when the bot is running correctly. 
