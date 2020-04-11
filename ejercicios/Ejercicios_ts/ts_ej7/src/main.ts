class Main implements EventListenerObject
{ 
    myf:MyFramework;
    counter:number=0;
    
    handleEvent(evt: Event): void
    {
      this.counter++;
      let btn:HTMLElement = this.myf.getElementByEvent(evt);
      btn.textContent = "click:"+this.counter;
    }

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");
      console.log(b);
      b.textContent = "Haceme click!";

      b.addEventListener("click", this );

    } 
} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

