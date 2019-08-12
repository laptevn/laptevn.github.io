$(document).ready(function () {
    $("#submit-form").on('submit', function (event) {
        event.preventDefault();
        var dataString = $(this).serialize();
        $('#submit-button').prop('disabled', true);

        $.ajax({
            type: "POST",
            url: "https://api.laptev.co/v1",
            data: dataString,
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