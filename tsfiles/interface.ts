interface PersonInterface {
      firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements PersonInterface {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return  this.firstName + this.lastName;
    }

}
 let aPerson:PersonInterface = new Foo();
  aPerson = "test";
 

let someObj ={
    firstName: 'text',
    lastName: "text",
    middleName: "text",
    getFullName: () => "test"
};
aPerson = someObj;
