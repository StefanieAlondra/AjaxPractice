var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
    //alert("si  funciona");
    //***** CREAR NUESTRO XMLHTTPREQUEST*******
    var xhr = new XMLHttpRequest();
    //abrimos conexion
    xhr.open("GET", "texto_prueba.txt", true);
    xhr.onreadystatechange = function() {
        //*impresion de los valores
        //console.log(xhr.readyState);
        //revisa que sea correcta y que tengamos una respuesta
        if (xhr.readyState == 4 && xhr.status == 200) {
            //console.log("se cargo");
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = xhr.responseText;
        }

    }


    xhr.send();
}
btnCargar.addEventListener('click', cargarContenidoAjax);