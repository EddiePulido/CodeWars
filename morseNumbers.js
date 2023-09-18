const morse = readline().split(' ')

const MORSE_CODE = {
    ".----": 1,
    "..---": 2,
    "...--": 3,
    "....-": 4,
    ".....": 5,
    "-....": 6,
    "--...": 7,
    "---..": 8,
    "----.": 9,
    "-----": 0,
  }

  console.log(+morse.map(e => MORSE_CODE[e]).join(''))