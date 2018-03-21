$(function () {
    $('#btn').on('click', function () {
        $.post('/', {name: 100}, function (data) {
            alert(data)
        })
    })
    $('#btn2').on('click', function () {
        $.post('/as', {name: 100}, function (data) {
            alert(data)
        })
    })
})