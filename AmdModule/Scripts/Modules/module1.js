define(["require", "exports"], function (require, exports) {
    var Class1 = (function () {
        function Class1() {
        }
        Class1.prototype.test = function () {
            alert("Module1.Class1");
        };
        return Class1;
    })();
    exports.Class1 = Class1;
});
