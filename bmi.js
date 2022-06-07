function bmi(weight, height) {
  const bmi = (weight / height ** 2) 
  
  if(bmi > 30){
    return 'Obese'
  }else if(bmi >25){
    return 'Overweight'
  }else if(bmi > 18.5){
    return 'Normal'
  }else{
    return 'Underweight'
  }
}