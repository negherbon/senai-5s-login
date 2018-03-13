$('.form-login').submit(function( event ){
    event.preventDefault();

    var email = $('.email').val();
    var password = $('.password').val();

    var user = {
        email: email,
        password: password
    }

    $.ajax({
        method: 'post',
        data: user,
        url: 'http://localhost:4000/authenticate',
        success(data){
            if(data.isAuth)
                //redirecionar para componente que seta o token no localstorage
                window.location.href = 'http://localhost:4200/auth?token=' + data.token;
        },
        error(data){
            alert(data.responseText);
        }
    })
});