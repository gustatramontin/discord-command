# Discord-Commands

## How to install

## How to use it

### First Import Discord-Commands
```
const Discord = require("discord.js");
const client = new Discord.Client();

const DiscordCommands = require('discord-commands')
```

### Instance the class
The first parameter is the prefix and the second is the instace of Discord.Client
```
const bot = new DiscordCommands.bot('!', client)
```

### Create Your First Command
the first parameter is command name and the second is a callback function with message as parameter
```
bot.command('ping', async msg => {
    await msg.channel.send('pong 🏓')
})
```
![Screenshot 1](/screenshot-1.png)


### You Can Use Parameters

```
bot.command('say-my-name', async (msg, name, lastName) => {
    await msg.channel.send(`Hello ${name} ${lastName}`)
})
```
![Screenshot 1](/screenshot-2.png)

### Empty Commnad Will Be Executed On Each Message
This is an example of an capslock spam filter

```
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
```