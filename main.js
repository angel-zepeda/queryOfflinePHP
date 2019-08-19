var buffer = [];
var query = '';

$('#btn-submit').click(function (e) {
  e.preventDefault();
  var name = $('#name').val();
  console.log(navigator.onLine);
  query = `INSERT INTO Task SET nombre="${name}"`;
  if (navigator.onLine) {
    if (buffer.length > 0) { // SI HAY ALGO EN EL BUFFER
      buffer.forEach(function (query, index) {
        console.log("BUffer acumulado: ", buffer);
        $.ajax({
          url: 'form.php',
          type: 'POST',
          data: {
            query: query
          },
          success: function (response) {
            var res = response;
            console.log(JSON.parse(res));
          }
        })
      })
    } else { // SI NO HAY NADA EN EL BUFFER Y HAY INTERNET
      $.ajax({
        url: 'form.php',
        type: 'POST',
        data: {
          query: query
        },
        success: function (response) {
          var res = response;
          console.log(JSON.parse(res));
        }
      })
    }

  } else { // SI NO HAY INTERNET ACUMULAR QUERYS
    buffer.push(query);
    console.log("BUffer: ", buffer);
  }
})
