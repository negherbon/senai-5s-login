function verifyEmail(event) {
    event.preventDefault();
    let email = $(".form-login--text").val();

    if(email){
        $.ajax({
            method: 'get',
            data: {email: email},
            url: 'http://localhost:4000/verifyEmail',
            success(data){
                if(data)
                swal("", data.msg, "success");
            },
            error(data){
                if(data.status === 404)
                    swal("", data.responseJSON.msg, "error");
            }
        })
    }
}