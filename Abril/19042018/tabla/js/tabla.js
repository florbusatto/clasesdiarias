var datos= [[],
            [],
            []];

console.log(datos);

$(document).ready(function(){
   for (var i=0; i<datos.length; i++) {
        var tr= '<tr id="registro_'+i+'"><td> <input id="nombre'+i+'" class="registro'+i+'" value="'+datos[i][0] +'"type="text" disabled></input></td>'+
        '<td><input id="nombre'+i+'" class="registro'+i+'" value="'+datos[i][1] +'"type="text" disabled></input></td>'+
        '<td><input id="nombre'+i+'" class="registro'+i+'" value="'+datos[i][2] +'"type="text" disabled></input></td>'+
        '<td>'+'<button data-rg="#registro_'+i+'"class="eliminar" name="boton">'+ '&#128686'+'</button>'+'</td>'+'<td>'+
        '<button id="_'+i+'" data-rg=".registro'+i+'" class="btnEditor">'+' &#9998'+'</button>'+'</td>'+'</tr>';

        $('#tabla').append(tr);
    }
    
     $(".eliminar").on('click',function(){
       var trId= $(this).data('rg');
       console.log(trId);
       
       console.log("padre:"+$(this).parent());
       $(trId).hide(100, function(){
        alert('su registro se elimino correctamente');
       });
      });

    $(".btnEditor").on('click', function(){
      $('input').prop('disabled',true);
      var fila=$(this).data('rg');
      $(fila).prop('disabled',false);
    });

    $('#add').on('click',function(){
     
      var nuevo=[];
      var n=$('#nn').val();
      nuevo.push(n);
      nuevo.push($('#an').val());
      nuevo.push($('#en').val());
      datos.push(nuevo);
      console.log("elemento nuevo:",nuevo);
      console.log("array actualizado",datos);


    });


});






