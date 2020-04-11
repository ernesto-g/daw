class Main
{ 
    myf:MyFramework;

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");
      console.log(b);
      b.textContent = "Haceme click!";

      b.addEventListener("click", this.evento );

      console.log("this en main:");
      console.log(this);

    } 

    evento(ev:Event):void {
      console.log("se hizo click!");
      console.log("this en evento:");
      console.log(this);
    }   

} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

