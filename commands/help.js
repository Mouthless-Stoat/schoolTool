const { Command, commandList } = require("../deps/command.js")
const chalk = require("chalk")
new Command("help", "Show a list of command and description", () => {
	for (const command of commandList) {
		console.log(`${chalk.green(command.name)}: ${command.description}`)
	}
})
