var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        console.log("Hola mundo");
    };
    return Main;
}());
window.onload = function () {
    var m = new Main();
    m.main();
};
