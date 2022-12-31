function scrollingText(text, t = text.toUpperCase()){
  return t.split('').map((e,i) => t.slice(i) + t.slice(0,i))
}