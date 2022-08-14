function fireFight(s){
  return s.split(' ').map(w => w === 'Fire' ? '~~' : w).join(' ')
}