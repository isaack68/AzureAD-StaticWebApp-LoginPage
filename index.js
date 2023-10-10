const signUpBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    window.location.replace("/.auth/login/aad?post_login_redirect_uri=https://calm-bush-04d27fd10.3.azurestaticapps.net/authenticated/");
});
