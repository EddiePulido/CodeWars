function enough(cap, on, wait) {
  return cap - (on + wait) > 0 ? 0 : (on + wait) - cap
}