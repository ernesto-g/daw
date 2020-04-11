class Main implements EventListenerObject
{ 
    myf:MyFramework;

    
    handleEvent(evt: Event): void
    {
      console.log("handleEvent");
      console.log("this en handleEvent:");
      console.log(this);
    }

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");
      console.log(b);
      b.textContent = "Haceme click!";

      b.addEventListener("click", this );

      console.log("this en main:");
      console.log(this);

    } 
} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

