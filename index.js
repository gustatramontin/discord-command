
class DiscordCommands {
    
    constructor(prefix, client) {
        this.prefix = prefix
        this.client = client

        this.commands = {

            customFunction: msg => {

            }
            
        }

        this.client.on('message', async msg => this.execCommands(msg))
    }

    execCommands(msg) {

        this.commands.customFunction(msg) // this is to do something on each message, like automatically delete some kind of message

        const args = msg.content.slice(this.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (!msg.content.startsWith(this.prefix) || msg.author.bot) return;


        if (command in this.commands) {
            this.commands[command](msg, ...args)
            return
        }


    }

    command(name, func) {
        if (name === '') {
            this.commands['customFunction'] = func
            return
        }
            

        this.commands[name] = func

    }


}

module.exports =  {
    bot: DiscordCommands
}