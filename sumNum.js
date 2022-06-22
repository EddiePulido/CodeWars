function f(n){
  //insert your code here.... and go crazy!
    if(typeof n != 'number' || n < 1 || n % 1 != 0) return false
    return n * (n + 1) / 2
  };