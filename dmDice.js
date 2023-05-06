const nbRoll = parseInt(readline());
for (let i = 0; i < nbRoll; i++) {
    var inputs = readline().split(' ');
    const roll = parseInt(inputs[0]);
    const expected = parseInt(inputs[1]);

    if(roll === 20) print('Critical Success')
    else if(roll === 1) print('Critical Failure')
    else if(roll >= expected) print('Success')
    else print('Failure')
}