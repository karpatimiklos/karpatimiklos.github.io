$('button').on('click', (event) => {
let egyNap = document.createElement('div');
egyNap.classList.add('posts');
let date =  $('input').val(); 
let text =  $('textarea').val(); 
$(egyNap).append('<b>' + date + '</b>');
$(egyNap).append('<p>' + text + '</p>');
$('article').append( egyNap );
let samePath = "posts/1";
let updatedData = {
  title: date,
  text: text
};
fb.ref(samePath).set(updatedData);
});




let path = "posts/1";
let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};
fb.ref(path).set(dataToSave);
let samePath = "posts/1";
let updatedData = {
  title: date,
  text: text
};
fb.ref(samePath).set(updatedData);



