
function sendMail(message, email, name) {
    message = 'Van ' + name + '\n\n' + encodeURIComponent(message);
    email = encodeURIComponent(email)
    var params = 'message=' + message + '&emailaddress=' + email;
    $.ajax({
        dataType: 'json',
        url: 'https://script.google.com/macros/s/AKfycbzCXrbdhxOeCQrP7pUZg1FPd2vdnxSSG1bOcHdi9VnzH_f_DaEe/exec?' + params,
        success: function () {
            formSuccess();
        },
        error: function (error, textStatus, errorThrown) {

        }
    });
}