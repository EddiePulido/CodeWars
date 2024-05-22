/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age) {
	const obj = {}
  
  obj.name = name
  obj.age = age
  
  return obj
}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24


/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
	greet: () => console.log('hello'),
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'


/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
	const obj = Object.create(personStore)
	obj.name = name
  obj.age = age
  
  return obj
}

const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/

// add code here
sandra.introduce = function (){
  console.log(`Hi, my name is ${this.name}`)
}
// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
	this.greet = () => console.log('hello')
}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
	const obj = new PersonConstructor
  obj.name = name
  obj.age = age
  
  return obj
}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 7 ***/
// add code here

PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`)
}

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
	constructor(name) {
    this.name = name


	}

	// add code here
	greet(){
    console.log('hello')
  }
}


// /********* Uncomment this line to test your work! *********/
// const george = new PersonClass;
// george.greet(); // -> Logs 'hello'
