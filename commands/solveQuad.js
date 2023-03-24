const { Command } = require("../deps/command.js")
const prompt = require("prompt-sync")({ sigint: true })
const chalk = require("chalk")

new Command("solveQuad", "Solve Quadratic Expression", () => {
	let root1, root2

	let a = prompt("Enter the first number: ")
	let b = prompt("Enter the second number: ")
	let c = prompt("Enter the third number: ")

	let discriminant = b * b - 4 * a * c
	if (discriminant > 0) {
		root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
		root2 = (-b - Math.sqrt(discriminant)) / (2 * a)

		// result
		console.log(
			chalk.green(
				`The roots of quadratic equation are ${root1} and ${root2}`
			)
		)
	} else if (discriminant == 0) {
		root1 = root2 = -b / (2 * a)

		// result
		console.log(
			chalk.green(
				`The roots of quadratic equation are ${root1} and ${root2}`
			)
		)
	} else {
		let realPart = (-b / (2 * a)).toFixed(2)
		let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2)

		// result
		console.log(
			chalk.green(
				`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
			)
		)
	}
})
