const person = {

    firstName: "Muhammad",
    lastName: "Fahim",
    
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value){
        var parts = value.split(' ');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);

person.fullName = 'Fahim Islam';

console.log(person.fullName);