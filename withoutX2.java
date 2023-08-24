public String withoutX2(String str) {
  if(str.length() >= 2){
    char first = str.charAt(0);
    char second = str.charAt(1);
    
    if(first == 'x' && second == 'x'){
      return str.substring(2);
    }
    
    if(first == 'x'){
      return str.substring(1);
    }
    
    if(second == 'x'){
      return str.charAt(0) + str.substring(2);
    }
  }
  
  if(str.length() == 1 && str.equals("x")){
    return "";
  }
  
  return str;
}