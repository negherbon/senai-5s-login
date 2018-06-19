$('.form-login').submit(function( event ){
    event.preventDefault();

    var email = $('.email').val();
    var cbFirstAccess = document.getElementById("cbFirstAccess").checked
    
    if( cbFirstAccess == false)
    {
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
        });
    }else{
        var user = {
            email: email,
            cbFirstAccess: true
        }

        $.ajax({
            method: 'post',
            data: user,
            url: 'http://localhost:4000/validateFirstAccess',
            success(data){
                if(data.isFirstAccess)
                    //redirecionar para componente que seta o token no localstorage
                    window.location.href = 'http://localhost:8080/firstAccess';// + data.token;
            },
            error(data){
                alert(data.responseText);
            }
        });
    }


});

function firstAccess(cb) {
    if (cb.checked){
        document.getElementById('password').disabled = true;
        document.getElementById('password').innerText = '';
        
    }else {
        document.getElementById('password').disabled = false;        
    }
}