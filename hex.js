// A web color is represented by a number sign #, followed by three bytes, each of them represented by two hexadecimal digits, which are the rate of each Red, Green and Blue color (between 0 and 255).
// You are given a hexadecimal triplet, and you have to return the value of each RGB color rate.

const HEX = readline();
const HEX2 = HEX.slice(1)
const HEX3 = HEX2.match(/.{1,2}/g)
const HEX4 = HEX3.map(x => parseInt(x, 16))
print(HEX4.join(' '))
