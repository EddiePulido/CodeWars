public String frontBack(String str) {
  if(str.length() < 2) return str;
  int lastIndex = str.length() - 1;
  return str.charAt(lastIndex) + str.substring(1,lastIndex) + str.charAt(0);
}
