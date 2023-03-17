$(document).ready(function () {
    $("#submit-form").on('submit', function (event) {
        event.preventDefault();

        $("#feedback").hide();
        $("#error-big-file").hide();
        
        var form = $('#submit-form')[0];
        var data = new FormData(form);

        if (!$("#attached-details").val()) {
            data.delete('attached-details');
        }

        $('#submit-button').prop('disabled', true);

        $.ajax({
            type: "POST",
            url: "https://api.laptev.io/v1",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 60000,
            success: function (data) {
                $('#submit-form')[0].reset();
                $("#feedback").show();
            },
            error: function (data) {
                $("#error-big-file").show();
            }
        }).always(function (data) {
            $('#submit-button').prop('disabled', false);
        });
    });

    $("#name").on("change", function () {
        $("#feedback").hide();
    });
});