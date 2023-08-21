public boolean isTeen(int i){
  return i <= 19 && i >= 13;
}

public boolean hasTeen(int a, int b, int c) {
  return isTeen(a) || isTeen(b) || isTeen(c);
}
