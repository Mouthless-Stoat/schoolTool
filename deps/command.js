var commandList = []
var commandNameList = []

class Command {
	constructor(name = "", description = "", callback = () => {}) {
		this.name = name
		this.description = description
		this.callback = callback

		commandList.push(this)
		commandNameList.push(this.name)
	}

	run() {
		this.callback()
	}
}

module.exports = {
	Command,
	commandList,
	commandNameList,
}
