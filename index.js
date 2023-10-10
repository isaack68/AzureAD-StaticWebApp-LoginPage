const signUpBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    window.location.replace("/.auth/login/aad?post_login_redirect_uri=https://https://ambitious-pond-0c1d1fa10.3.azurestaticapps.net/authenticated/");
});
