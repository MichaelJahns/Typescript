var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 99;
var pt = { x: 0, y: 0 };
var isTrue = false;
console.log(pt.x);
var myTest = function (number) {
    console.log("farts " + number);
    console.log('Big farts');
};
myTest(x);
var Character = /** @class */ (function () {
    function Character(name) {
        this.name = name;
        this.lvl = 1;
        this.hp = 10;
    }
    Character.prototype.levelUP = function () {
        this.lvl++;
        this.hp += 10;
    };
    return Character;
}());
var Rogue = /** @class */ (function (_super) {
    __extends(Rogue, _super);
    function Rogue(name) {
        var _this = _super.call(this, name) || this;
        _this.speed = 10;
        return _this;
    }
    Rogue.prototype.levelUP = function () {
        _super.prototype.levelUP.call(this);
        this.speed++;
    };
    return Rogue;
}(Character));
