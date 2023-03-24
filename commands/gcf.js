const { Command } = require("../deps/command.js")
const prompt = require("prompt-sync")({ sigint: true })
const chalk = require("chalk")

new Command("gcf", "Find Greatest Common Factor", () => {
	const num = parseInt(prompt("Enter how many number you want to find GCF: "))
	let arr = []
	for (let i = 0; i < num; i++) {
		arr.push(parseInt(prompt("Enter number: ")))
	}
	// Use spread syntax to get minimum of array
	const lowest = Math.min(...arr)

	for (let factor = lowest; factor > 1; factor--) {
		let isCommonDivisor = true

		for (let j = 0; j < num; j++) {
			if (arr[j] % factor !== 0) {
				isCommonDivisor = false
				break
			}
		}

		if (isCommonDivisor) {
			console.log(chalk.green(`Solution: ${factor}`))
			break
		}
	}
})
