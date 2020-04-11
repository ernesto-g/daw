class Main implements EventListenerObject,GETResponseListener
{ 
    myf:MyFramework;
    counter:number=0;
    
    handleEvent(evt: Event): void
    {
      this.counter++;
      let btn:HTMLElement = this.myf.getElementByEvent(evt);
      btn.textContent = "click:"+this.counter;
      
    }

    handleGETResponse(status:number,response:string){
      console.log("Llego status:"+status+" response:"+response);
    }

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");
      console.log(b);
      b.textContent = "Haceme click!";

      b.addEventListener("click", this );

      this.myf.requestGET("devices.txt",this);

    } 
} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

