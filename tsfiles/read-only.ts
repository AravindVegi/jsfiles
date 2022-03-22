class personReadDemo{
  readonly name ;
  middleName = ' vegi';

  constructor(readonly name :string){

  }

}
var obj = new personReadDemo();
 obj.name = ' man';
console.log(obj.name);
console.log(obj.name = ' aravind')
obj.middleName = 'middleName';
console.log(obj.middleName);

