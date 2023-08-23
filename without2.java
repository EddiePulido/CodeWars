public String without2(String str) {
  if(str.length() < 2){
    return str;
  }
  
  String front = str.substring(0,2);
  String back = str.substring(str.length() - 2);
  
  if(front.equals(back)){
    return str.substring(2);
  }
  
  return str;
}
