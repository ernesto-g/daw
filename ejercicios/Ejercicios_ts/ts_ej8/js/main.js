var Main = /** @class */ (function () {
    function Main() {
        this.counter = 0;
    }
    Main.prototype.handleEvent = function (evt) {
        this.counter++;
        var btn = this.myf.getElementByEvent(evt);
        btn.textContent = "click:" + this.counter;
    };
    Main.prototype.handleGETResponse = function (status, response) {
        console.log("Llego status:" + status + " response:" + response);
    };
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
        this.myf.requestGET("devices.txt", this);
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
