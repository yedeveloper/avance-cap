$(document).ready(function(){
    $("#botonEnviar").html("Boton de enviar");
    
    $( "#botonEnviar" ).click(function() {
        validarCampos();
    });

    //Guardo el nombre
    localStorage.setItem('nombre', 'Yerson Morales');

    //sessionStorage.setItem('nombre', 'Yerson Morales')


});

/**
 * Función para validar campos del login
 */
function validarCampos(){
    let usuario = $("#usuario").val();
    let pass = $("#pass").val();

    if(usuario !== ""){  
        if(pass !== ""){
            llamarServicioPost(usuario, pass);
        }else{
            alert('Debe ingresar la contraseña');
        }
    }else{
        alert('Debe ingresar el usuario para continuar');
    }
}

/**
 * Funcion para llamar servicio del clima
 */
function llamarServicioGet(){
    $.ajax({
        url: "https://reactnative.dev/movies.json",
        data: {},
        success: function( result ) {
          console.log(result.movies);
        }
    });
}

/**
 * Funcion para metodo post
 */
function llamarServicioPost(usuario, pass){
    $.ajax({
        method: 'POST',
        url: "https://prueis.coomc/iusdiw/udfis",
        data: {
          usuario,
          pass: pass,
        },
        success: function( result ) {
          console.log(result.movies);
        }
    });
}