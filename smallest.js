class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0]
    
    args.forEach(n => min = Math.min(min, n))
    
    return min
  }
}