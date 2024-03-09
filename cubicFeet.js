var [l,w,h]=readline().split(' ')
print([l,w,h].some(e=>+e<=0)?'Invalid dimension':`The quantity of water in the room is ${l*w*h} cubic feet.`)