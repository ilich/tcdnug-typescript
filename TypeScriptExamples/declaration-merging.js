/// <reference path="textwriter.ts" />
var DeclarationMerging;
(function (DeclarationMerging) {
    var TestClass = (function () {
        function TestClass() {
        }
        TestClass.prototype.op1 = function () {
            return "op1";
        };
        TestClass.prototype.op2 = function () {
            return "op2";
        };
        return TestClass;
    })();
    DeclarationMerging.TestClass = TestClass;
})(DeclarationMerging || (DeclarationMerging = {}));
var DeclarationMerging;
(function (DeclarationMerging) {
    var TestClass2 = (function () {
        function TestClass2() {
        }
        TestClass2.prototype.op3 = function () {
            return "op3";
        };
        return TestClass2;
    })();
    DeclarationMerging.TestClass2 = TestClass2;
})(DeclarationMerging || (DeclarationMerging = {}));
var DeclarationMergingTest;
(function (DeclarationMergingTest) {
    var Program = (function () {
        function Program() {
        }
        Program.run = function (elementId) {
            var writer = new TextWriter(elementId);
            var testClass = new DeclarationMerging.TestClass();
            writer.write(testClass.op1());
            writer.write(testClass.op2());
            var testClass2 = new DeclarationMerging.TestClass2();
            writer.write(testClass2.op3());
        };
        return Program;
    })();
    DeclarationMergingTest.Program = Program;
})(DeclarationMergingTest || (DeclarationMergingTest = {}));
//# sourceMappingURL=declaration-merging.js.map