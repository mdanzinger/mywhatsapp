if ($(".izimodal").length) {
    $("#report-modal").iziModal();


    // add class on file upload
    $('input[type="file"]').on("change", function () {
        $(".upload-btn-wrapper .btn").addClass("btn--fill")
        $(".upload-btn-wrapper .btn").text($(this).val().split('\\').pop())

    })
}