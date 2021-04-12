const Discord = require("discord.js");
const client = new Discord.Client();

const DiscordCommands = require('discord-commands')

const bot = new DiscordCommands.bot('!', client)

const {
    token
} = require('./config.json')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


bot.command('ping', async msg => {
    await msg.channel.send('pong 🏓')
})

bot.command('', async msg => {
    const message = msg.content

    const numberOfUppercases = message.split('').reduce((total, current) => {

        if (current === current.toUpperCase()) {
            return total + 1
        }
        return total
    }, 0)


    const maxPercentageOfUppercase = 0.8 // 80%

    if (numberOfUppercases / message.length >= maxPercentageOfUppercase) {
        await msg.delete({
            timeout: 500    
        })
        await msg.channel.send(`${msg.author.toString()} this is spam!`)
    }
})



client.login(token)