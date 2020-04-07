$(document).ready(function () {


    $(function () {
        $('body').removeClass('fade-out');
    });

    $(".things").click(function () {
        $("#thingsText").toggleClass('diNone');
    })

    $('.sub').click(function (event) {

        let email = $('.email').val()
        let name = $('.name').val()
        let message = $('.message').val()
        let statusElm = $('.status')
        statusElm.empty()
        console.log(message)

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log('ok')
        } else {
            statusElm.append('<br>Email non valide')
        }

        if (name.length > 2) {
            console.log('ok')
        } else {
            statusElm.append('<br>Nom non invalide')
        }

        if (message.length > 2) {
            console.log('ok')
        } else {
            statusElm.append('<br>Message invalide')
        }

    })
})
