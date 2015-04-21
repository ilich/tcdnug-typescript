/// <reference path="module1.ts" />

module Module2 {
    export module MyClasses {
        export class Class2 implements Module1.Test {
            test() {
                alert("Module2.Class2");
            }
        }
    }
} 