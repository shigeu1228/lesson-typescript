module Greeting{
    export class Indir{
        constructor(private text : string){
        }
        say() : void{
            console.log(this.text);
        }
    }
}
var indir : Greeting.Indir = new Greeting.Indir("Hello, World!ss");
indir.say();