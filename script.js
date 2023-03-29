function clearNumber() {
  if (document.getElementById('phoneField').value == 'example: 212-123-1234') {

    document.getElementById('phoneField').value = ''
  }
}

function clearName() {
  if (document.getElementById('nameField').value == 'First and Last Name') {

    document.getElementById('nameField').value = '';
  }
}

function resetName() {
  if (document.getElementById('nameField').value == '') {

    document.getElementById('nameField').value = 'First and Last Name'
  }
}

function resetPhone() {
  if (document.getElementById('phoneField').value == '') {

    document.getElementById('phoneField').value = 'example: 212-123-1234'
  }
}	        