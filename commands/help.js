const { Command, commandList } = require("../deps/command.js")
new Command("help", "Show a list of command and description", () => {
	for (const command of commandList) {
		console.log(`${command.name}: ${command.description}`)
	}
})
