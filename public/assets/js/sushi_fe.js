$(function () {
    $('#add-btn').click(function (event) {
        event.preventDefault();
        var newSushi = {
            sushiName: $('#new-sushi').val().trim()
        }
        $.post('/add', newSushi, function (){
            console.log('data added');
            location.reload();
        })
    })
})