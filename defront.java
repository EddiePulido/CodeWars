public String deFront(String str) {    
  
  if(str.substring(0,2).equals("ab")){
    return str;
  }
  
  if(str.charAt(0) == 'a'){
    return 'a' + str.substring(2);
  }
  
  if(str.charAt(1) == 'b'){
    return str.substring(1);
  } 
  
  return str.substring(2);
}
