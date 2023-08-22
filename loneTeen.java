public boolean isTeen(int a) {
  return a >= 13 && a <= 19;
}

public boolean loneTeen(int a, int b) {
  return isTeen(a) ^ isTeen(b);
}