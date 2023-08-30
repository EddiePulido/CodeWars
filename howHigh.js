const howHigh = (node, height = 0) => {
  if(!node) return height - 1
  
  return Math.max(howHigh(node.left, height + 1), howHigh(node.right, height + 1)) 
};

module.exports = {
  howHigh,
}; 
