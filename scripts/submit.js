$(document).ready(function () {
    $("#submit-form").on('submit', function (event) {
        event.preventDefault();
        
        var form = $('#submit-form')[0];
        var data = new FormData(form);

        $('#submit-button').prop('disabled', true);

        $.ajax({
            type: "POST",
            url: "https://api.laptev.co/v1",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {
                $('#submit-form')[0].reset();
            }
        }).always(function (data) {
            $("#feedback").show();
            $('#submit-button').prop('disabled', false);
        });
    });

    $("#name").on("change", function () {
        $("#feedback").hide();
    });
});