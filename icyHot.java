public boolean icyHot(int temp1, int temp2) {
  int max = Math.max(temp1, temp2);
  int min = Math.min(temp1, temp2);
  
  return max > 100 && min < 0;
}
