/// <reference path="textwriter.ts" />
var Generics;
(function (Generics) {
    var writer;
    // Non type safe function
    function nonSafe(foo) {
        return foo;
    }
    // Generic function (type safe)
    function safe(foo) {
        return foo;
    }
    var RandomNumberDataProvider = (function () {
        function RandomNumberDataProvider() {
        }
        RandomNumberDataProvider.prototype.data = function () {
            return Math.random();
        };
        return RandomNumberDataProvider;
    })();
    function calculate(a, b) {
        return a.data() + b.data();
    }
    function createAndCalculate(provider) {
        var a = new provider();
        var b = new provider();
        return calculate(a, b);
    }
    var Program = (function () {
        function Program() {
        }
        Program.run = function (elementId) {
            writer = new TextWriter(elementId);
            var i = safe(123);
            var j = safe(123); // type interference
            var value = createAndCalculate(RandomNumberDataProvider);
            writer.write(value);
        };
        return Program;
    })();
    Generics.Program = Program;
})(Generics || (Generics = {}));
//# sourceMappingURL=generics.js.map