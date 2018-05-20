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
        url: 'https://api-senai5s.herokuapp.com/authenticate',
        success(data){
            if(data.isAuth)
                //redirecionar para componente que seta o token no localstorage
                window.location.href = 'https://web-senai5s.herokuapp.com/auth?token=' + data.token;
        },
        error(data){
            alert(data.responseText);
        }
    })
});
