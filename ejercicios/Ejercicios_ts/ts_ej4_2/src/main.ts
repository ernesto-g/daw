class Main 
{ 
    myf:MyFramework;

    main():void 
    { 
      this.myf = new MyFramework();

      let b:HTMLElement = this.myf.getElementById("boton");

      console.log(b);

      b.textContent = "Haceme click!";

      let users:Array<User> = [];
      users.push(new User(1,"juan@gmail.com","Juan"));
      users.push(new User(2,"pedro@gmail.com","Pedro"));
      users.push(new User(3,"carlos@gmail.com","Carlos"));

      this.mostrarUsers(users);
    } 

    mostrarUsers(users:Array<User>):void {
        /*
        let items:string="";
        for(let i in users){
          users[i].printInfo();
          items+="<li>"+users[i].name+" "+users[i].email+"</li>";
        }
        */
        
        let strTemplate:string=`${
            users.map((item) =>`<li>${item.name} ${item.email}</li>`).join('')
          }`;

        let ul:HTMLElement = this.myf.getElementById("listaUsuarios");
        ul.innerHTML = strTemplate;
    }
} 
 
window.onload = () => {
    let obj = new Main(); 
    obj.main();
};
 

