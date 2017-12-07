$(function () {
    $('#add-btn').click(function (event) {
        event.preventDefault();
        var newSushi = {
            sushiName: $('#new-sushi').val().trim()
        }
        $.post('/add', newSushi, function () {
            // console.log('data added');
            location.reload();
        });
    });
    $('.update-btn').click(function (event) {
        event.preventDefault();
        var updateSushi = {
            sushiId: $(this).attr('sushi-id'),
            devoured: $(this).attr('devoured')
        }
       // console.log(updateSushi);
        $.ajax({
            url: '/update',
            type: 'PUT',
            data: updateSushi,
            success: function (data) {
                // console.log('devoured');
                location.reload(true);
            }
        });
    });
    $('.delete-btn').click(function (event) {
        event.preventDefault();
        var deleteSushi = {
            sushiId: $(this).attr('sushi-id')
        }
        $.ajax({
            url: '/delete',
            type: 'DELETE',
            data: deleteSushi,
            success: function (data) {
                location.reload(true);
            }
        });
    });
});