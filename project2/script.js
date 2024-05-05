$(document).ready(function(){

    function showModal() {
        $("#myModal").css("display", "block");
    }

    $(".close").click(function() {
        $("#myModal").css("display", "none");
    });

    $("#submitBtn").click(function(){
        var fullName = $("#fullName").val();
        var date = $("#date").val();
        var phoneNumber = $("#phoneNumber").val();
        var numberOfPeople = $("#numberOfPeople").val();

        if (fullName !== "" && date !== "" && phoneNumber !== "" && numberOfPeople !== "") {

            $(this).addClass("loading").html("Reserving...");

            setTimeout(function(){
                showModal();
                $("#submitBtn").removeClass("loading").html("Reserve Table");
            }, 5000);
        } else {
            alert("All fields must be filled.");
        }
    });
});
