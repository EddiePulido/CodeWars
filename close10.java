public int close10(int a, int b) {
  int closeA = Math.abs(a - 10);
  int closeB = Math.abs(b - 10);
  
  if(closeA < closeB){
    return a;
  }
  
  if(closeB < closeA){
    return b;
  }
  
  return 0;
}
