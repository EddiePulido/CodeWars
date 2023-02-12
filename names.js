01 Test 1
Input
Expected output
Lisa, Frank, Lucy, Ann, Helen, Fran
3
Team 1: Lisa, Ann
Team 2: Frank, Helen
Team 3: Lucy, Fran
02 Test 2
Input
Expected output
Wendell, Kandace, Rubin, Ezra, Candace, Lupe, Shurlocke, Carley, Cy, Valery, Lari, Isobel, Rhianon, Terrianne, Chriss, Si, Bonni, Israel, Giavani, Kip, Maurise, Aprilette, Sile, Billy, Raynard, Dierdre, Abdullah, Chane
2
Team 1: Wendell, Rubin, Candace, Shurlocke, Cy, Lari, Rhianon, Chriss, Bonni, Giavani, Maurise, Sile, Raynard, Abdullah
Team 2: Kandace, Ezra, Lupe, Carley, Valery, Isobel, Terrianne, Si, Israel, Kip, Aprilette, Billy, Dierdre, Chane

const allKids = readline().split(', ')
const numOfTeams = parseInt(readline());
const kidsPerTeam = Math.ceil(allKids.length / numOfTeams)
const teams = []
for(let i = 0;i < numOfTeams;i ++){
    teams.push(allKids.slice(i * kidsPerTeam, (i + 1) * kidsPerTeam))
}
for(let i = 0;i < teams.length;i ++){
    print(`Team ${i + 1}: ${teams[i].join(', ')}`)
}

