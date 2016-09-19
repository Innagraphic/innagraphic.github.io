$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Please supply your name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            subject: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Please write a subject'
                    }
                }
            },
            message: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message: 'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please write a message'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow"); // Do something ...
        $('#contact_form').slideUp({ opacity: "hide" }, "fast");

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function () {
              // clear form and show a success message
            },
            error: function () {
              // show an error message
            }
          });
    });
});