module Greeting{
    export class Hello2{
        constructor(private text : string){
        }
        say() : void{
            console.log(this.text);
        }
    }
}
var hello2 : Greeting.Hello2 = new Greeting.Hello2("Hello, World!");
hello2.say();