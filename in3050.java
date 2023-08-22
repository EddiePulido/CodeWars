public boolean thirtyForty(int n){
  return n >= 30 && n <= 40;
}

public boolean fortyFifty(int n){
  return n >= 40 && n <= 50;
}

public boolean in3050(int a, int b) {
  return (thirtyForty(a) && thirtyForty(b)) || (fortyFifty(a) && fortyFifty(b));
}
