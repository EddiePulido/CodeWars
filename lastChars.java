public String lastChars(String a, String b) {
  String front = a.length() > 0 ? a.substring(0,1) : "@";
  String back = b.length() > 0 ? b.substring(b.length() -1) : "@";
  
  return front + back;
}