function killer(sus, dead) {
  for(k in sus){
    if(dead.every(e => sus[k].includes(e))){
      return k
    }
  }
}