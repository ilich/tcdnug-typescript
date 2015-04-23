/// <reference path="textwriter.ts" />

module OverloadingOnString {
    interface Fish {
        canSwim: boolean;
    }

    interface Bird {
        canFly: boolean;
    }

    interface OtherAnimal {
        canRun: boolean;
    }

    function createAnimal(animal: string): any;
    function createAnimal(animal: "fish"): Fish;
    function createAnimal(animal: "bird"): Bird;
    function createAnimal(animal: any): any {
        animal = animal.toLowerCase();
        if (animal === "fish") {
            return {
                canSwim: true
            }
        } else if (animal === "bird") {
            return {
                canFly: true
            }
        } else {
            return {
                canRun: true
            }
        }
    }

    export class Program {
        static run(elementId: string) {
            var writer = new TextWriter(elementId);

            var animal = createAnimal("fish");
            writer.write(animal.canSwim);

            var animal = createAnimal("bird");
            writer.write(animal.canFly);

            var animal = createAnimal("tiger");
            writer.write(animal.canRun);
        }
    }
} 