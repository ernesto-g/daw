class Main 
{ 
    myf:MyFramework;

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");

      console.log(b);

      b.textContent = "Haceme click!";

    } 
} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

