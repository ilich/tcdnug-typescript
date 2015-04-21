define(["require", "exports", './Module1'], function (require, exports, Module1) {
    var Class2 = (function () {
        function Class2() {
        }
        Class2.prototype.test = function () {
            var class1 = new Module1.Class1();
            class1.test();
            alert("Module2.Class2");
        };
        return Class2;
    })();
    exports.Class2 = Class2;
});
