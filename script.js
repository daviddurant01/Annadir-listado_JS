
window.onload = function(){

    var miselect = document.getElementById("seleccion");

    for (i = 18; i < 90; i++) {
        miselect.innerHTML += '<option value="'+i+'">' + i + '</option>';
    }
  }

function recogerDatos() {

  
  // campo texto
  var mitext = document.getElementById('texto1').value;
  // console.log('mitext',mitext);
  
  
  // select
  var miselect = document.getElementById  ("seleccion").value;
  // console.log("seleccion",miselect);

  // checkbox // ¿Como seleccionar la opcion?
  var micheck = document.getElementById('check1').checked;
  var micheck1 = document.getElementById('check2').checked;
  var micheck2 = document.getElementById('check3').checked;
  //  console.log('micheck',micheck);
  //  console.log('micheck1',micheck1);
  //  console.log('micheck2',micheck2);
  var nwmicheck=(micheck== true) ? "Si": "No";
  var nwmicheck1=(micheck1== true) ? "Si": "No";
  var nwmicheck2=(micheck2== true) ? "Si": "No";




  //radiobutton, solo se puede marcar 1.
  var miradio = document.querySelector('input[name="radio1"]:checked').value;
  // console.log("miradio",miradio);


  //Crear tabla  //volcar datos
  var mitabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
  
    
  //Salida tabla
  var contenido = '<td class="ccn">' + mitext + '</td><td class="ccb">' + nwmicheck + '</td><td class="ccb">' + nwmicheck1 + '</td><td class="ccb">' + nwmicheck2 + '</td><td class="ccb">' + miselect + '</td><td class="ccb">' + miradio + '</td>';

  
  // var contenido = '<td>' + numero1 + ' + ' + numero2 + '</td><td>' + resultado + '</td>';


  var newRow = mitabla.insertRow(mitabla.rows.length);
  newRow.innerHTML = contenido;

  
}
  














