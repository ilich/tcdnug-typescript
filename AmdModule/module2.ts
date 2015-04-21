import Module1 = require('./Module1');

export class Class2 implements Module1.Test {
    test() {
        var class1 = new Module1.Class1();
        class1.test();

        alert("Module2.Class2");
    }
}