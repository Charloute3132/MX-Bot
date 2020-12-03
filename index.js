const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commansds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('Prêt', () => {
    console.log('MX_Bot est en ligne!');
});
// COMMANDS BOT @user '/ prefix'

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping');
    } else if  (command == 'youtube) {
s
    }
});

client.login('NzgzNjAwOTI5MzcwOTMxMjIx.X8dHPA.wib_fWo8OQXVRWIiLOiVrSh3OiU');
