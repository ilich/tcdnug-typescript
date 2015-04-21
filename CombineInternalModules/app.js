var Module1;
(function (Module1) {
    var Class1 = (function () {
        function Class1() {
        }
        Class1.prototype.test = function () {
            alert("Module1.Class1");
        };
        return Class1;
    })();
    Module1.Class1 = Class1;
})(Module1 || (Module1 = {}));
/// <reference path="module1.ts" />
var Module2;
(function (Module2) {
    var MyClasses;
    (function (MyClasses) {
        var Class2 = (function () {
            function Class2() {
            }
            Class2.prototype.test = function () {
                alert("Module2.Class2");
            };
            return Class2;
        })();
        MyClasses.Class2 = Class2;
    })(MyClasses = Module2.MyClasses || (Module2.MyClasses = {}));
})(Module2 || (Module2 = {}));
//# sourceMappingURL=app.js.map