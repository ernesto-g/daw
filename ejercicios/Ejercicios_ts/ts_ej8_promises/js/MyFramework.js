class HttpResponse {
}
class MyFramework {
    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementById(id) {
        let el;
        el = document.getElementById(id);
        return el;
    }
    getElementByEvent(evt) {
        return evt.target;
    }
    requestGET(url, listener) {
        let xhr;
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    listener.handleGETResponse(xhr.status, xhr.responseText);
                }
                else {
                    listener.handleGETResponse(xhr.status, null);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    }
    requestGETProm(url) {
        return new Promise((resolve, reject) => {
            // Hago la tarea
            let xhr;
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    let r = new HttpResponse();
                    if (xhr.status == 200) {
                        r.state = xhr.status;
                        r.data = xhr.responseText;
                        resolve(r);
                    }
                    else {
                        r.state = xhr.status;
                        r.data = null;
                        reject(r);
                    }
                }
            };
            xhr.open('GET', url, true);
            xhr.send(null);
            //______________
        });
    }
}
