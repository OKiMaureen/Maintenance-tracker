/*  global document:true, fetch:true, window:true */
/*  eslint no-undef: "error"  */

const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/signup/';

const signUp = (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),

  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((signupData) => {
      if (signupData.status !== 'success') {
        const { token } = signupData.data;
        localStorage.setItem('token', JSON.stringify(token));
        document.getElementById('namemsg').innerHTML = signupData.data.errors.name || '';
        document.getElementById('emailmsg').innerHTML = signupData.data.errors.email || '';
        document.getElementById('passwordmsg').innerHTML = signupData.data.errors.password || '';
      } else if (signupData.message === 'email already exists') {
        document.getElementById('existingmsg').innerHTML = signupData.message;
      } else {
        window.location.href = './allrequests.html';
      }
    });
};
document.getElementById('signupBtn').addEventListener('click', signUp);
