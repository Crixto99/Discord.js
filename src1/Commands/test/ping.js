module.exports = {
    name: "ping",
    aliases: [],
    description: "Comando de Prueba",
    run:async(client, interaction,args) => {
        interaction.reply({ 
            content: "🏓 Pong!",
            ephemeral: true
        })
    }
}