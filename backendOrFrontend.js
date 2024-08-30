const course = readline()

const f =
	'HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Vue.js, Angular'.split(
		', '
	)
const b = 'Node.JS, Express.js, MySQL, MongoDB'.split(', ')

console.log(
	f.includes(course) ? 'frontend' : b.includes(course) ? 'backend' : false
)
