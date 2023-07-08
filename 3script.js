function checkCode(event) {
  event.preventDefault();
  var input = document.getElementById('codeInput').value;
  var result = document.getElementById('result');
  var output = result.querySelector('h1');

  if (input === '9101112') {
    result.textContent = '5678이다...';
  } else {
    result.textContent = '틀렸다...';
  }
}
