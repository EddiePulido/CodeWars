public String withoutX(String str) {
  if(str.length() == 0){
    return str;
  }
  
  boolean front = str.charAt(0) == 'x';
  boolean back = str.charAt(str.length() - 1) == 'x';
  
  if(front && back){
    return str.length() == 1 ? "" : str.substring(1,str.length()-1);
  }
  
  if(front){
    return str.substring(1);
  }
  
  if(back){
    return str.substring(0,str.length() - 1);
  }
  
  return str;
}