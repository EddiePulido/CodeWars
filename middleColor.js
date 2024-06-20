const colorA = readline()
const colorB = readline()

function getMiddleColor(color1, color2) {
	let r1 = (color1 >> 16) & 0xff
	let g1 = (color1 >> 8) & 0xff
	let b1 = color1 & 0xff

	let r2 = (color2 >> 16) & 0xff
	let g2 = (color2 >> 8) & 0xff
	let b2 = color2 & 0xff

	let rMid = ((r1 + r2) / 2) | 0
	let gMid = ((g1 + g2) / 2) | 0
	let bMid = ((b1 + b2) / 2) | 0

	return (rMid << 16) | (gMid << 8) | bMid
}

const s = getMiddleColor(colorA, colorB).toString(16).toUpperCase()

console.log('0x' + '0'.repeat(6 - s.length) + s)
