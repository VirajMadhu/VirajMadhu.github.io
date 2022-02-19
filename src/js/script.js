// Open and close sidebar
function openNav() {
  document.getElementById('mySidebar').style.width = '60%';
  document.getElementById('mySidebar').style.display = 'block';
}

function closeNav() {
  document.getElementById('mySidebar').style.display = 'none';
}

function success() {
  swal({
    title: 'Done!',
    text: 'Message send successfully!',
    icon: 'success',
    button: 'OK',
  });
}

function error() {
  swal({
    title: 'Ooops!',
    text: 'Somthing went wrong! Message not delivered.',
    icon: 'error',
    button: 'OK',
  });
}

function emptyField() {
  swal({
    title: 'Ooops!',
    text: 'Please complete all fields!',
    icon: 'error',
    button: 'OK',
  });
}

function validate() {
  let name = document.getElementById('Name');
  let email = document.getElementById('Email');
  let subject = document.getElementById('Subject');
  let message = document.getElementById('Message');
  let submit = document.getElementById('Submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      name.value == '' ||
      email.value == '' ||
      subject.value == '' ||
      message.value == ''
    ) {
      emptyField();
    } else {
      sendMail(name.value, email.value, subject.value, message.value);
      clearAll();
      success();
      console.log('Email send sucess!');
    }
  });
}

function sendMail(name, email, subject, message) {
  emailjs.send('service_xoopldh', 'template_p7ryvwf', {
    Subject: subject,
    Name: name,
    Message: message,
    Email: email,
  });
}

function clearAll() {
  document.getElementById('Name').value = '';
  document.getElementById('Email').value = '';
  document.getElementById('Subject').value = '';
  document.getElementById('Message').value = '';
}
