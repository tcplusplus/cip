
function sendMail(message, email, name) {
    message = 'Van ' + name + '\n\n' + encodeURIComponent(message);
    email = encodeURIComponent(email)
    var params = 'message=' + message + '&emailaddress=' + email;
    $.ajax({
        dataType: 'json',
        url: 'https://script.google.com/macros/s/1gXcsSu-KJ5BS18VBwQWSJXTE5UehEYSEUluvsc3sXEtlaWu072XN9mXT/exec?' + params,
        success: function () {
            formSuccess();
        },
        error: function (error, textStatus, errorThrown) {

        }
    });
}