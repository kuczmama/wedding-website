$('#rsvp-form').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();

    $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));
    $.post('https://script.google.com/macros/s/AKfycbz3VSRHY4GSBXWUr0DDprKfVwVutVtySlvoDI-s/exec', data)
        .done(function (data) {
            console.log(data);
            $('#alert-wrapper').html('');
            $('#rsvp-modal').modal('show');
        })
        .fail(function (data) {
            console.log(data);
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
        });
});