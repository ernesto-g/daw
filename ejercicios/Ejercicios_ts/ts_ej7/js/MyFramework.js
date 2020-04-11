var MyFramework = /** @class */ (function () {
    function MyFramework() {
    }
    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    MyFramework.prototype.getElementById = function (id) {
        var el;
        el = document.getElementById(id);
        return el;
    };
    MyFramework.prototype.getElementByEvent = function (evt) {
        return evt.target;
    };
    return MyFramework;
}());
