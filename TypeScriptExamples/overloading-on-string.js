/// <reference path="textwriter.ts" />
var OverloadingOnString;
(function (OverloadingOnString) {
    function createAnimal(animal) {
        animal = animal.toLowerCase();
        if (animal === "fish") {
            return {
                canSwim: true
            };
        }
        else if (animal === "bird") {
            return {
                canFly: true
            };
        }
        else {
            return {
                canRun: true
            };
        }
    }
    var Program = (function () {
        function Program() {
        }
        Program.run = function (elementId) {
            var writer = new TextWriter(elementId);
            var animal = createAnimal("fish");
            writer.write(animal.canSwim);
            var animal = createAnimal("bird");
            writer.write(animal.canFly);
            var animal = createAnimal("tiger");
            writer.write(animal.canRun);
        };
        return Program;
    })();
    OverloadingOnString.Program = Program;
})(OverloadingOnString || (OverloadingOnString = {}));
//# sourceMappingURL=overloading-on-string.js.map