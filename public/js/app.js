$(document).ready(function(){
    $("#devourit").on("click", function(event){
        var id = $(this).data("id");
        var dataDevoured = $(this).data("isdevoured");


        var newDevouredState = {
            Devoured : true
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function(){
            
            console.log("New burger devoured");
            location.reload();

        })
    });
    $("#addburger").on("click", function(e){
        alert("clicked");
        event.preventDefault();
        var newName = {
            burger_name : $(".input").val().trim()
        }

        $.ajax({
            type: "POST",
            data: newName,
            url: "/api/burger"
        }).then(function(data){
            location.reload();
        })
    });

});
