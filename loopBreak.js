function grabDoll(dolls){
  const bag=[];
  
  for(let i = 0; i < dolls.length; i++){
    const d = dolls[i]
    if(bag.length === 3) break
    if(d === 'Hello Kitty' || d === 'Barbie doll') bag.push(d)
    else continue
  }
  
  return bag;
}