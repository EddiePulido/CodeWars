function isAgeDiverse(list) {

  let set = new Set()
  
   list.forEach(p => {
     if(p.age > 100){
       set.add('10')
     }else{
       set.add(p.age.toString()[0])
     }
   })
  
  return set.size === 10
}