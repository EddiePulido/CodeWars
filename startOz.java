public String startOz(String str) {
  if(str.length() == 0){
    return str;
  }
  
  String result = "";
  char first = str.charAt(0);
  
  if(first == 'o'){
    result += first;
  }
  
  if(str.length() < 2){
    return result;
  }
  
  char second = str.charAt(1);
  
  if(second == 'z'){
    result += second;
  }
  
  return result;
}