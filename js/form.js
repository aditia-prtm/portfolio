document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('(Demo) Message sent!');
  document.getElementById('name-input').value = "";
  document.getElementById('email-input').value = "";
  document.getElementById('msg-input').value = "";
});