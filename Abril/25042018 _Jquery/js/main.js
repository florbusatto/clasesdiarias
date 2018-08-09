var myFlowers = [{
  name: 'Aleli',
  src: "img/aleli.jpg"
},{
  name: 'Jazmin',
  src: "img/jazmin.jpg"
},{
  name: 'Magnolia',
  src: "img/magnolia.jpg"
},{
  name: 'Peonía',
  src: "img/peonia.jpg"
}];

function selectFlowers() {
  $.each(myFlowers, function(index, item) {
    option = `<option>${item.name}</option>`;
    $('#flower').append(option);
  });
};

function showImage() {
  $.each(myFlowers, function(index, item) {
    if ($('#flower option:selected').text() == item.name) {
      $('#selectImg').attr('src', item.src )
    }
  });
};

$('#select').on('click',showImage)

selectFlowers();
showImage()