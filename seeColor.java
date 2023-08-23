public String seeColor(String str) {
  if(str.length() < 3){
    return "";
  }
  
  if(str.length() == 3){
    return str.equals("red") ? "red" : "";
  }
  
  if(str.substring(0,3).equals("red")){
    return "red";
  }
  
  
  return str.substring(0,4).equals("blue") ? "blue" : "";
}
