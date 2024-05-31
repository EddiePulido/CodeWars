const T = readline().split(',').map(Number)

function convertToBinary(num) {
    return num.toString(2).padStart(4, '0');
}

function displayBinaryTable(numbers) {
    const binaryTable = numbers.map(convertToBinary);
    for (let i = 0; i < 4; i++) {
        console.log(binaryTable.map(bin => bin[i]).join(''));
    }
}
displayBinaryTable(T);