var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.handleEvent = function (evt) {
        console.log("handleEvent");
        console.log("this en handleEvent:");
        console.log(this);
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
        console.log("this en main:");
        console.log(this);
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
