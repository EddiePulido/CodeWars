public String comboString(String a, String b) {
  String longest = "";
  String shortest = "";
  
  if(a.length() > b.length()){
    longest = a;
    shortest = b;
  }else{
    shortest = a;
    longest = b;
  }
  
  return shortest + longest + shortest;
}