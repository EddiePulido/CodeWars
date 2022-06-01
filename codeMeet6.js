function isSameLanguage(list) {
  return list.filter(p => p.language === list[0].language).length === list.length
}