public String front22(String str) {
  String first = str.length() >= 2 ? str.substring(0,2) : str;
  
  return first + str + first;
}
