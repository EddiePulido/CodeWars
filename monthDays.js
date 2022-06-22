function howManydays(month){
  var days;
  switch (month){
    case 2:
      return 28
    case 9:
    case 4:
    case 6:
    case 11:
      return 30
    default:
      return 31
  }
  return days;
}