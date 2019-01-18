<!-- jquery code -->

        $(".delete").click(function(e){
        alert("This item will be permanentl deleted.Click ok to proceed.");
            let heading = $(this).attr("data-heading");
            let note = $(this).attr("data-notes");
            let user = $(this).attr("data-user")
            // console.log(heading)
            // console.log(note)
            // console.log(user)
        $.ajax({
            type: "POST",
            url: '/ajax/',
            data: {
                'csrfmiddlewaretoken' :$('[name=csrfmiddlewaretoken]').val(),
                'heading' : heading,
                'note' : note,
                'user' : user
            },
            success: function (data) {
              if (data=="success") {
                  location.reload();
              }
              else{
                  alert("something went wrong");
              }
             }
          });

        });