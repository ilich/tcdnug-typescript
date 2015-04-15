/// <reference path="textwriter.ts" />

module Zoo {
    var writer: TextWriter;

    enum Region {
        Africa,
        America,
        Asia,
        Australia,
        Europe
    }
    
    interface Animal {
        name: string;

        // It is not possible to define read-only property in the interface.
        // It is only possible in the class.
        getRegion(): Region;

        eat(): void;
        sleep(): void;
    }
    
    class BaseAnimal implements Animal {
        // Read-only property
        private _region: Region;
        get region(): Region {
            return this._region;
        }

        getRegion(): Region {
            return this.region;
        }

        constructor(public name: string, region: Region) {
            this._region = region;
        }

        eat() {
            this.do("Eat");
        }

        sleep() {
            this.do("Sleep");
        }

        protected do(msg: string) {
            var regionName = Region[this.region];

            // ES6 template string
            var text = `${regionName} / ${this.name}: ${msg}`;
            writer.write(text);
        }
    } 

    class Fish extends BaseAnimal {
        constructor(name: string, region: Region) {
            super(name, region);
        }

        swim() {
            this.do("Swim");
        }
    }

    class Bird extends BaseAnimal {
        static totalBirds: number = 0;

        // Read-write property
        private _weight: number;
        get weight(): number {
            return this._weight;
        }

        set weight(value: number) {
            this._weight = value;
        }

        constructor(name: string, region: Region, weight: number = 0) {
            super(name, region);
            this.weight = weight;
            Bird.totalBirds++;
        }

        fly() {
            this.do("Fly");
            writer.write(`Bird's Weight: ${this.weight}`);
        }
    }

    class Zoo {
        private _animals: Animal[] = [];

        add(...animals: Animal[]) {
            for (var i = 0; i < animals.length; i++) {
                this._animals.push(animals[i]);
            }
        }

        //
        // You cannot implement custom indexers in TypeScript, but it is possible
        // to define indexer interface, e.g.
        //
        // interface StringArray {
        //     [index: number]: string;
        // }
        //
        getById(id: number): Animal {
            if (id < 0 || id >= this._animals.length) {
                throw new Error("id");
            }

            return this._animals[id];
        }
    }

    export class Program {
        static run(elementId: string) {
            writer = new TextWriter(elementId);

            var bass = new Fish("Bass", Region.America);
            var trout = new Fish("Trout", Region.America);
            var albatross = new Bird("Albatross", Region.Asia, 14.0);
            var ostrich = new Bird("Ostrich", Region.Africa, 140.0);
            var emu = new Bird("Emu", Region.Australia, 40.0);

            var zoo = new Zoo();
            zoo.add(bass, trout, albatross, ostrich, emu);

            for (var i = 0; i < 5; i++) {
                var animal = zoo.getById(i);

                // https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript
                // only for ES6 (TypeScript 1.4) and ES3/ES5 (TypeScript 1.5)
                // TypeScript 1.5: const keyword support

                // let animal = zoo.getById(i);    

                if (i % 2 == 0) {
                    animal.eat();
                }
                else {
                    animal.sleep();
                }
            }

            writer.write(`The last animal in the loop: ${animal.name}`);

            bass.swim();
            ostrich.fly();

            writer.write(`Total Birds: ${Bird.totalBirds}`); 
        }
    }
}