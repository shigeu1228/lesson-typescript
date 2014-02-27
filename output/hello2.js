var Greeting;
(function (Greeting) {
    var Hello2 = (function () {
        function Hello2(text) {
            this.text = text;
        }
        Hello2.prototype.say = function () {
            console.log(this.text);
        };
        return Hello2;
    })();
    Greeting.Hello2 = Hello2;
})(Greeting || (Greeting = {}));
var hello2 = new Greeting.Hello2("Hello, World!aa");
hello2.say();
