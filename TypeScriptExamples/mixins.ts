/// <reference path="textwriter.ts" />

module Mixins {
    var writer: TextWriter;

    function applyMixins(derivedClass: any, baseClasses: any[]) {
        baseClasses.forEach(baseClass => {
            Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
                derivedClass.prototype[name] = baseClass.prototype[name];
            });
        });
    }

    class Fish {
        swim() {
            writer.write("Swim");
        }
    }

    class Bird {
        fly() {
            writer.write("Fly");
        }
    }

    class Dragon implements Fish, Bird {
        swim: () => void;
        fly: () => void;
        attack() {
            writer.write("Attack!");
        }
    }

    export class Program {
        static run(elementId: string) {
            writer = new TextWriter(elementId);

            applyMixins(Dragon, [Fish, Bird]);

            var dragon = new Dragon();
            dragon.swim();
            dragon.fly();
            dragon.attack();
        }
    }
} 