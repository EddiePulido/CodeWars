const number = parseInt(readline());

const arr = ['hi','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

if(number < 20){
    print(arr[number])
}else{
    let str = number.toString()
    const arr2 = ['hi', 'bye', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if(number % 10 === 0){
        print(arr2[+str[0]])
    }else{
        let a1 = ['hi', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        print(arr2[+str[0]] + '-' + a1[+str[1]])
    }
}
