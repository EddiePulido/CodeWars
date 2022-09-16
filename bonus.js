function bonusTime(salary, bonus, s='£' + salary) {
  return bonus ? s + '0' : s
}