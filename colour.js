function colourAssociation(array){
  return array.map(a => {
    const obj = {}
    obj[a[0]] = a[1]
    return obj
  })
}