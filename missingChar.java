public String missingChar(String str, int n) {
  String result = "";
  
  for(int i = 0; i < str.length(); i++){
    if(i != n) result += str.charAt(i);
  }
  
  return result;
}
