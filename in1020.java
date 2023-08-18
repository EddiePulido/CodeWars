public boolean inRange(int i){
  return i <= 20 && i >= 10;
}

public boolean in1020(int a, int b) {
  return inRange(a) || inRange(b);
}
