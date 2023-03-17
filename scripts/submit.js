$(document).ready(function () {
    $("#submit-form").on('submit', function (event) {
        event.preventDefault();
        
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