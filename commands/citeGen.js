const { Command } = require("../deps/command.js")
const prompt = require("prompt-sync")({ sigint: true })

new Command("citeGen", "Generate Citation", () => {
	const author = prompt("Author Name (Last, First): ")
	const title = prompt("Title: ")
	const container = prompt("Title Container: ")
	const contributor = prompt("Contributor: ")
	const version = prompt("Version: ")
	const number = prompt("Number: ")
	const publisher = prompt("Publisher: ")
	const date = prompt("Date: ")
	const location = prompt("Location (url or page number)[starting page]: ")
	const location2 = prompt("End Page: ")
	console.log(
		`${author ? `${author}. ` : ""}${title ? `"${title}". ` : ""}${
			container ? `${container}, ` : ""
		}${contributor ? `${contributor}, ` : ""}${
			version ? `${version}, ` : ""
		}${number ? `${number}, ` : ""}${publisher ? `${publisher}, ` : ""}${
			date ? `${date}, ` : ""
		}${
			location
				? location2
					? `pp. ${location}-${location2}. `
					: `p. ${location}`
				: ""
		}`
	)
})
