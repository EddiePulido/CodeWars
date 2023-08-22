public boolean range(int n){
  return n >= 10 && n <= 20;
}

public int max1020(int a, int b) {
  if(range(a) && range(b)){
    return Math.max(a, b);
  }
  
  if(range(a)){
    return a;
  }
  
  if(range(b)){
    return b;
  }
  
  return 0;
}
