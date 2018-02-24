function matchAttach() {
  let messageText = document.getElementById('message').value;
  let alertField = document.getElementById('alert');
  if ((messageText.match(/attach/i)) && (!document.getElementById('attach').value)) {
      alertField.style.display = 'block';
      let closebtn = document.getElementById('closebtn');
      closebtn.addEventListener('click', function() {
        console.log('Testing');
        closebtn.parentElement.style.display = 'none';
        });
    };
}

window.addEventListener( 'load', function() {
  let button1 = document.getElementById('send-1');
  let button2 = document.getElementById('send-2');
  button1.addEventListener('click', function() {
    matchAttach();
  });
  button2.addEventListener('click', function() {
    matchAttach();
  });
});
