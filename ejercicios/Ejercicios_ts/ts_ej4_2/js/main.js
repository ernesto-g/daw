var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.main = function () {
        this.myf = new MyFramework();
        var b = this.myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        var users = [];
        users.push(new User(1, "juan@gmail.com", "Juan"));
        users.push(new User(2, "pedro@gmail.com", "Pedro"));
        users.push(new User(3, "carlos@gmail.com", "Carlos"));
        this.mostrarUsers(users);
    };
    Main.prototype.mostrarUsers = function (users) {
        /*
        let items:string="";
        for(let i in users){
          users[i].printInfo();
          items+="<li>"+users[i].name+" "+users[i].email+"</li>";
        }
        */
        var strTemplate = "" + users.map(function (item) { return "<li>" + item.name + " " + item.email + "</li>"; }).join('');
        var ul = this.myf.getElementById("listaUsuarios");
        ul.innerHTML = strTemplate;
    };
    return Main;
}());
window.onload = function () {
    var obj = new Main();
    obj.main();
};
