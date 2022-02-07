var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
    //alert("si  funciona");
    //***** CREAR NUESTRO XMLHTTPREQUEST*******
    var xhr = new XMLHttpRequest();
    //abrimos conexion
    xhr.open("GET", "servidor.php", true);
    xhr.onreadystatechange = function() {
        //*impresion de los valores
        //console.log(xhr.readyState);
        //revisa que sea correcta y que tengamos una respuesta
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);//json a obj de java script
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = json.backend;
        }

    }


    xhr.send();
}
btnCargar.addEventListener('click', cargarContenidoAjax);