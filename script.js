$('button').on('click', (event) => {
let egyNap = document.createElement('div');
egyNap.classList.add('posts');

let date =  $('input').val(); 
let text =  $('textarea').val(); 
$(egyNap).append('<b>' + date + '</b>');
$(egyNap).append('<p>' + text + '</p>');
$('article').append( egyNap );


});






