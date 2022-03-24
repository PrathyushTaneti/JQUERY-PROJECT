$(document).ready(function () {
    $("#chooseFile").click(function () {
        $("#real-file").click();
    });

    $("#real-file").click(function () {
        let fileValue = $("#real-file").val();
        if (fileValue) {
            $("#file-name").val( fileValue.match( /[\/\\]([\w\d\s\.\-\(\)]+)$/ )[1]);
        }
        else {
            $("#file-name").html("");
        }
    });

})