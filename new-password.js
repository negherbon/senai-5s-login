function saveNewPassword(event){

    event.preventDefault();
    let params = new URLSearchParams(document.location.search.substring(1));
    let userId = Number(params.get("user"));
    let token = params.get("token");

    localStorage.clear();
    localStorage.setItem('token', token);

    if($(".form-new-password").val() != $(".form-new-password-confirm").val()){
        alert("As senhas não conferem!");
        return false;
    }


    $.ajax({
        method: 'put',
        data: {
            password: $(".form-new-password").val(),
            id: userId
        },
        url: 'http://localhost:4000/users/' + userId,
        success: function(data, status) {
            alert("Senha alterada com sucesso!");
            window.location.href = 'http://localhost:4200/auth?token=' + token;
        },
        error: function(data, status) {
            if(data.status === 401)
                alert("O token expirou. Realize o procedimento de recuperar senha novamente!");
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader('Authorization','Bearer ' + token );
        }
    })
}

