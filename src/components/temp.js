let obj = {
    name:'naman',

        fun(){
            console.log(this.name);
        }    ,
        obj3:this
    
}
// let obj2 = {
//     name:'phenom'
// }
//obj.fun.call(obj2);     // Call method calls a function of other object this concept is called function borrowing.
// let obj3=obj.fun.bind(this);        //The bind() method creates a new function where “this” refers to the parameter in the parenthesis

class Book{
    constructor(){
        this.name="Deadman";
        this.obj3=obj.fun.bind(this);   
    }
    callIt(){
        this.obj3();
    }
};
let someObj = new Book();
someObj.callIt();


/*Use of classes in ES%*/
// var apple = new (function() {
//     this.type = "macintosh";
//     this.color = "red";
//     this.getInfo = function () {
//         return this.color + ' ' + this.type + ' apple';
//     };
// })();
// console.log(apple.type);