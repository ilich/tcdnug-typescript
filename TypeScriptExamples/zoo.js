/// <reference path="textwriter.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Zoo;
(function (_Zoo) {
    var writer;
    var Region;
    (function (Region) {
        Region[Region["Africa"] = 0] = "Africa";
        Region[Region["America"] = 1] = "America";
        Region[Region["Asia"] = 2] = "Asia";
        Region[Region["Australia"] = 3] = "Australia";
        Region[Region["Europe"] = 4] = "Europe";
    })(Region || (Region = {}));
    var BaseAnimal = (function () {
        function BaseAnimal(name, region) {
            this.name = name;
            this._region = region;
        }
        Object.defineProperty(BaseAnimal.prototype, "region", {
            get: function () {
                return this._region;
            },
            enumerable: true,
            configurable: true
        });
        BaseAnimal.prototype.getRegion = function () {
            return this.region;
        };
        BaseAnimal.prototype.eat = function () {
            this.do("Eat");
        };
        BaseAnimal.prototype.sleep = function () {
            this.do("Sleep");
        };
        BaseAnimal.prototype.do = function (msg) {
            var regionName = Region[this.region];
            // ES6 template string
            var text = "" + regionName + " / " + this.name + ": " + msg;
            writer.write(text);
        };
        return BaseAnimal;
    })();
    var Fish = (function (_super) {
        __extends(Fish, _super);
        function Fish(name, region) {
            _super.call(this, name, region);
        }
        Fish.prototype.swim = function () {
            this.do("Swim");
        };
        return Fish;
    })(BaseAnimal);
    var Bird = (function (_super) {
        __extends(Bird, _super);
        function Bird(name, region, weight) {
            if (weight === void 0) { weight = 0; }
            _super.call(this, name, region);
            this.weight = weight;
            Bird.totalBirds++;
        }
        Object.defineProperty(Bird.prototype, "weight", {
            get: function () {
                return this._weight;
            },
            set: function (value) {
                this._weight = value;
            },
            enumerable: true,
            configurable: true
        });
        Bird.prototype.fly = function () {
            this.do("Fly");
            writer.write("Bird's Weight: " + this.weight);
        };
        Bird.totalBirds = 0;
        return Bird;
    })(BaseAnimal);
    var Zoo = (function () {
        function Zoo() {
            this._animals = [];
        }
        Zoo.prototype.add = function () {
            var animals = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                animals[_i - 0] = arguments[_i];
            }
            for (var i = 0; i < animals.length; i++) {
                this._animals.push(animals[i]);
            }
        };
        //
        // You cannot implement custom indexers in TypeScript, but it is possible
        // to define indexer interface, e.g.
        //
        // interface StringArray {
        //     [index: number]: string;
        // }
        //
        Zoo.prototype.getById = function (id) {
            if (id < 0 || id >= this._animals.length) {
                throw new Error("id");
            }
            return this._animals[id];
        };
        return Zoo;
    })();
    var Program = (function () {
        function Program() {
        }
        Program.run = function (elementId) {
            writer = new TextWriter(elementId);
            var bass = new Fish("Bass", 1 /* America */);
            var trout = new Fish("Trout", 1 /* America */);
            var albatross = new Bird("Albatross", 2 /* Asia */, 14.0);
            var ostrich = new Bird("Ostrich", 0 /* Africa */, 140.0);
            var emu = new Bird("Emu", 3 /* Australia */, 40.0);
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
            writer.write("The last animal in the loop: " + animal.name);
            bass.swim();
            ostrich.fly();
            writer.write("Total Birds: " + Bird.totalBirds);
        };
        return Program;
    })();
    _Zoo.Program = Program;
})(Zoo || (Zoo = {}));
//# sourceMappingURL=zoo.js.map