var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
