var Greeting;
(function (Greeting) {
    var Indir = (function () {
        function Indir(text) {
            this.text = text;
        }
        Indir.prototype.say = function () {
            console.log(this.text);
        };
        return Indir;
    })();
    Greeting.Indir = Indir;
})(Greeting || (Greeting = {}));
var indir = new Greeting.Indir("Hello, World!ss");
indir.say();
