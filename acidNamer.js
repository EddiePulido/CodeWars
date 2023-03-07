const acidName = readline();
const acidCount = parseInt(readline());
const waterCount = parseInt(readline());

let total = acidCount + waterCount

let acids = ["Hydrochloric", "Sulfuric", "Nitric", "Citric"]

let name = acids.includes(acidName) ? acidName : 'Unknown'

print((acidCount/total * 100).toFixed(1) + '% ' + name + ' Acid')