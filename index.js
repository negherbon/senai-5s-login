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
        url: 'http://localhost:4000/api/authenticate'
    })
});