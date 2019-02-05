$(function () {


    $('.fa-spin').hide()
    $('.AjaxForm').submit(function (event) {
            var form = $(this);
            event.preventDefault();

            $.ajax({
                url: Routing.generate('message_new', {id : $('.deplacer').val()} ),
                method: form.attr('method'),
                data: form.serialize(),
                dataType: 'json',
                async: true,
                success: function (data) {
                    if (data = "OK") {
                        form.trigger('reset');
                        // form.closest('.modal').modal('close');
                    }
                },
                error: function (data) {
                    console.log(msg)
                }

            })
        }
    )
    window.setInterval(function(){
        $.ajax({
            url: Routing.generate('message_all', {id : $('.deplacer').val()} ),
            async: true,
            success: function (data) {
                    $('.text-block').html(data)
                    // form.closest('.modal').modal('close');
            },
            error: function (data) {
                console.log(msg)
            }

        })
    }, 5000);
})