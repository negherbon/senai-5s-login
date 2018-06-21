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
                    console.log(data);
            },
            error(data){
                console.log(data);
            }
        })
    }
}