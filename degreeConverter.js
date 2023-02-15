const d = parseInt(readline());

function fToC(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }

  function cToF(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }

if(d % 2){
    print(Math.round(fToC(d)))
}else{
    print(Math.round(cToF(d)))
}