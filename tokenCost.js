const model = readline();
const msg = readline().split(' ')

const models = {'GPT-4' : .03, 'GPT-3.5 Turbo': .0015, 'davinci-002': .002}

if(!(model in models)){
    print('Invalid Model')
}else{
    print('$'+((msg.length * 1.5) * models[model] / 1000).toFixed(4))
}