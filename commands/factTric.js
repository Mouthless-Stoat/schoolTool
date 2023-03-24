const chalk = require("chalk")
const { Command } = require("../deps/command.js")
const prompt = require("prompt-sync")({ sigint: true })

new Command("factTri", "Factor Trinomial", () => {
	console.log("Trinomial Form: x^2 + bx + c")
	const b = parseInt(prompt("Enter value for b: "))
	const c = parseInt(prompt("Enter value for c: "))

	const so1 = (-b + Math.sqrt(b ** 2 - 4 * c)) / 2
	const so2 = (-b - Math.sqrt(b ** 2 - 4 * c)) / 2

	console.log(
		chalk.green(
			`Solution: (x${so1 < 0 ? " + " : " - "}${Math.abs(so1)})(x${
				so2 < 0 ? " + " : " - "
			}${Math.abs(so2)})`
		)
	)
})
