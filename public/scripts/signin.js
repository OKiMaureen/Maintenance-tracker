/*  global document:true, fetch:true, window:true */
/*  eslint no-undef: "error"  */

const baseUrl = 'https://maintenance-tracker-app.herokuapp.com/api/v1/auth/login/';

const signIn = (event) => {
  event.preventDefault();
  const email = document.getElementById('emailL').value;
  const password = document.getElementById('passwordL').value;


  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),

  })
    .then(res => res.json())
    .then((signinData) => {
      if (signinData.status !== 'success') {
        const { token } = signinData.data;
        localStorage.setItem('token', JSON.stringify(token));
        document.getElementById('emailmsgL').innerHTML = signinData.data.errors.email || '';
        document.getElementById('passwordmsgL').innerHTML = signinData.data.errors.password || '';
      } else if (signinData.message === 'email already exists') {
        document.getElementById('existingmsgL').innerHTML = signinData.message;
      } else {
        window.location.href = './allrequests.html';
      }
    });
};
document.getElementById('signinBtn').addEventListener('click', signIn);
