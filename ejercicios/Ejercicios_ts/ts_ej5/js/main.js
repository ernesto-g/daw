var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this.evento);
        console.log("this en main:");
        console.log(this);
    };
    Main.prototype.evento = function (ev) {
        console.log("se hizo click!");
        console.log("this en evento:");
        console.log(this);
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
