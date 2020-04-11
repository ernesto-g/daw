class Main {
    constructor() {
        this.counter = 0;
    }
    handleEvent(evt) {
        this.counter++;
        let btn = this.myf.getElementByEvent(evt);
        btn.textContent = "click:" + this.counter;
    }
    handleGETResponse(status, response) {
        console.log("Llego status:" + status + " response:" + response);
    }
    main() {
        this.myf = new MyFramework();
        let b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
        //this.myf.requestGET("devices.txt",this);
        this.myf.requestGETProm("devices.txt").then((r) => {
            console.log("Llego status:" + r.state + " response:" + r.data);
            console.log("this vale:");
            console.log(this);
        }).catch((reason) => {
            console.error("Error:" + reason.state);
        });
    }
}
window.onload = () => {
    let obj = new Main();
    obj.main();
};
