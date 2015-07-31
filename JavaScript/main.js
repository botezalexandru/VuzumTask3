$(function () {



    function fade( group ) {
        $('.portofolio_pictures li')
            .fadeOut()
            .promise()
            .done( function() {
                console.log( group );
                $('.portofolio_pictures ' + group).fadeIn();
            });
    }

    $('input[name$="group1"]').click(function () {
        fade( $(this).val() );
    });

});