interface GETResponseListener{
    handleGETResponse(status:number,response:string):void;
}

class MyFramework{

    /**
     * getElementById: Busca un elemento del DOM por su ID
     * @param id : String con el id a buscar
     * @returns : Objeto HTMLElement encontrado
     */
    getElementById(id:string):HTMLElement
    {
        let el:HTMLElement;
        el = document.getElementById(id);
        return el;
    }


    getElementByEvent(evt:Event):HTMLElement
    {
        return <HTMLElement>evt.target;
    }
 

    requestGET(url:string,listener:GETResponseListener):void
    {
        let xhr: XMLHttpRequest;
        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4)
            {
                if(xhr.status == 200)
                {
                    listener.handleGETResponse(xhr.status,xhr.responseText);
                }
                else
                {
                    listener.handleGETResponse(xhr.status,null);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send(null);
    }
}
