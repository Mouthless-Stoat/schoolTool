const { Command } = require("../deps/command.js")
const prompt = require("prompt-sync")({ sigint: true })
const chalk = require("chalk")
new Command("surfaceCube", "Calculate the surface of a cube", () => {
	const w = prompt("Width: ")
	const l = prompt("Length: ")
	const h = prompt("Height: ")

	console.log(
		chalk.green(`Cube Surface Area: ${2 * (w * h + w * l + h * l)}`)
	)
})
