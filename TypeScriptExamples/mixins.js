/// <reference path="textwriter.ts" />
var Mixins;
(function (Mixins) {
    var writer;
    function applyMixins(derivedClass, baseClasses) {
        baseClasses.forEach(function (baseClass) {
            Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
                derivedClass.prototype[name] = baseClass.prototype[name];
            });
        });
    }
    var Fish = (function () {
        function Fish() {
        }
        Fish.prototype.swim = function () {
            writer.write("Swim");
        };
        return Fish;
    })();
    var Bird = (function () {
        function Bird() {
        }
        Bird.prototype.fly = function () {
            writer.write("Fly");
        };
        return Bird;
    })();
    var Dragon = (function () {
        function Dragon() {
        }
        Dragon.prototype.attack = function () {
            writer.write("Attack!");
        };
        return Dragon;
    })();
    var Program = (function () {
        function Program() {
        }
        Program.run = function (elementId) {
            writer = new TextWriter(elementId);
            applyMixins(Dragon, [Fish, Bird]);
            var dragon = new Dragon();
            dragon.swim();
            dragon.fly();
            dragon.attack();
        };
        return Program;
    })();
    Mixins.Program = Program;
})(Mixins || (Mixins = {}));
//# sourceMappingURL=mixins.js.map