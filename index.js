const prompt = require("prompt-sync")({ sigint: true })
const fs = require("fs")
const chalk = require("chalk")

const { commandList, commandNameList } = require("./deps/command.js")

const stringSimilarity = require("string-similarity")

for (const commandFile of fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"))) {
	require(`./commands/${commandFile}`)
}

while (true) {
	const c = prompt(chalk.blue("SchoolTool> "))

	const command = commandList.find((i) => i.name === c)
	//command not found
	if (!command) {
		const closeMatches = stringSimilarity.findBestMatch(c, commandNameList)

		if (closeMatches.bestMatch.rating >= 0.4) {
			console.log(
				chalk.yellow(
					`No command with exact name found but found ${
						closeMatches.bestMatch.target
					} with ${Math.round(
						closeMatches.bestMatch.rating * 100
					)}% match.\nExecuting ${
						closeMatches.bestMatch.target
					} instead.`
				)
			)
			commandList[closeMatches.bestMatchIndex].run()
		} else {
			console.log(chalk.red("No command found."))
		}
		continue
	}

	command.run()
}
