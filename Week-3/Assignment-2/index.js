// Explaining call, bind and apply method

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

let person2 = {
    firstName: 'Bob',
    lastName: 'Clinton'
}

let getFullName =  function(occupation, country){
    console.log(this.firstName + " " + this.lastName + " is a " + occupation + " from " + country)
}


// Call method :- Directly invokes the method and avoids repeat usage of same method with other objects by passing argument list
getFullName.call(person,"Doctor", "Spain");
getFullName.call(person2, "Teacher", "Italy");



// Apply method :- Similar to call method only differnce arguments are passed as an array
getFullName.apply(person,["Doctor", "Spain"]);
getFullName.apply(person2, ["Teacher", "Italy"]);



// Bind method :- Create a copy of function call and can be used invoked later
let firstPerson = getFullName.bind(person,"Doctor", "Spain");
let secondPerson = getFullName.bind(person2, "Teacher", "Italy");

firstPerson();
secondPerson();