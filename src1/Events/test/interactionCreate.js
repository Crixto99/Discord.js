module.exports = {
    name: "interactionCreate",
    run: async(client,interaction) => {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command)return;

            const args = [];

            try {
                command.run(client, interaction, args)
            } catch(e) {
                console.log("Ha ocurridó algún error:", e)
                interaction.reply({
                    content: `❌ Se ha producido un error\nError: ${e}`
                })
            }
        }
    }
}