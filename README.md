# SCIPE
S.C.I.P.E.  Smart Computer Interface for Protocol Execution 

Setup Tutorial: https://www.youtube.com/watch?v=KZ3tIGHU314
Discord.js documentation: https://discord.js.org/

Discord Bot <---> Github API documentation:
GitHUb REST API Documentation: https://docs.github.com/en/rest?apiVersion=2022-11-28  

Youtube Vids Thay mihgt(?) be helpful:
https://youtu.be/c6d7lfvziRY?si=jgClodcd5T3ZjLhI 
https://youtu.be/1S4CbFlOVF4?si=Gf0WGR37PcV9jz9l (low quality)
    https://youtu.be/1CuXR7NoynI?si=kIiYq5mCn4TjTGwI (part 2)

For documentation purposes, replace "client" with "SCIPE" in tutorials


# Dev Installation
- package.json 
-> npm init -y
- nodemon (For auto-updating the bot instead of needing to re-start it all the time) 
-> cmd: npm install -g nodemon
- dotenv (For making environment variables, added security)
-> npm install dotenv

# How To Start
To start the bot WITH auto-reboots after code is updated, type 'nodemon' in the terminal. If nodemon does not work then you can also use 'node .' or 'node src/index.js' to start the bot via the cmd line.

S.C.I.P.E. will output: "SCIPE (Skippy)#7016 is online." when the bot is running correctly 
