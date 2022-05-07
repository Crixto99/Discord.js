const { Collection, Client } = require('discord.js'); 
const mongoose = require('mongoose');
require('dotenv').config();


const client = new Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: "32767",
    allowedMentions: {
        parse: [],
        repliedUser: false
    },
})

module.exports = client;


client.commands = new Collection();


mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(e => {
    console.log("Ocurrió algún error al conectarme a MongoDB:", e)
})



process.on('unhandledRejection', (e) => {
    console.error(e);
}); 


