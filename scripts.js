//load script on doc ready
$(document).ready(function() {

    //show modal on learn more button click
    $("#learn-more-btn").on("click",() => {
        //remove hide class from modal
        $(".modal-container").removeClass("hide");
    });

    //close modal on close button click
    $("#close-btn").on("click",() => {
        console.log("******cat");

        //add hide class from modal
        $(".modal-container").addClass("hide");
    });

    //close modal on close button click
    $(".modal-overlay").on("click",() => {
        console.log("******cat");

        //add hide class from modal
        $(".modal-container").addClass("hide");
    });

});