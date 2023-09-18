const votes = readline()


const no = votes.split(' ').filter(e => e === 'No').length
const yes = votes.split(' ').length - no

if(!no){
    console.log("No!")
}else if(!yes){
    console.log('Yes!')
}else if(no > yes){
    console.log('No')
}else{
    console.log('Yes')
}