/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = readline().split(' ').map(name => name === 'Professor' ? 'Prof': name == 'Dr.'? 'Dr' : name[0].toUpperCase() )
print(n.join('.')+'.')