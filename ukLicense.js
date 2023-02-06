function driver(data) {
  const [first,mid,last,birth,sex] = [...data]
  const [day, month, year] = [...birth.split('-')]
  const map = {Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'}
  let numMonth = map[month.slice(0,3)]
  if(sex === 'F') numMonth = (+numMonth[0] + 5) + numMonth[1]
  const initials = first[0] + (mid[0] || '9')
  const lastFive = last.length < 5 ? last + '9'.repeat(5-last.length) : last.slice(0,5)
  
  return lastFive.toUpperCase() + year[2] + numMonth + day + year[3] + initials + '9' + 'AA'
}