$(function () {
    $('#add-btn').click(function () {
        event.preventDefault();
        var newSushi = {
            sushiName: $('#new-sushi').val().trim()
        }
        $.post('/add', newSushi, function (){
            console.log('data added');
        })
    })
})