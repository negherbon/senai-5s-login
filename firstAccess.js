$('.form-firstAccess').submit(function( event ){
    event.preventDefault();

    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get('id');

    var password = $('.password').val();

    var user = {
        id: id,
        password: password,
    }
    $.ajax({
        method: 'post',
        data: user,
        url: 'http://localhost:4000/firstAccess',
        success(data){
            if(data)
                window.location.href = 'http://localhost:8080';
        },
        error(data){
            alert(data.responseText);
        }
    });
});
