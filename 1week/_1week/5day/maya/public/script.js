$('#img').on('click', function () {
    $(this).css({
        'transform': 'rotate(360deg)',
        'transition': '2s',
        // 'transform': 'translateX(180px)'
    })
})
$(function () {
    $('#btn').on('click', function () {
        $.post('/', {name: 100}, function (data) {
            alert(data)
        })
    })

})
$(function () {
    $('#btn2').on('click', function () {
        $.post('/post2', {name: 100}, function (data) {
            alert(data)
        })
    })

})


$(function () {
    $('#select-fldr').on('click', function () {
        let folder = $('#folder').val()
        if(folder === ''){
            alert('emtpy')
        }else{
            $.post('/folder', {name: folder}, function (data) {
                $('.folder').html(data)
                // alert(data)
            })
        }

    })

})

// working with folders public and static
$(function () {
    $('#static').on('click', function () {
        $.post('/post1', {name: 100}, function (data) {
                $('.folder').html(data)
        })
    })

})
$(function () {
    $('#public').on('click', function () {
        $.post('/post2', {name: 100}, function (data) {
            $('.folder').html(data)
        })
    })

})


// folders
$(function () {
    $('#folders').on('click', function () {
        $.post('/listFolder', {name: 100}, function (data) {
            $('.folder').html(data)
        })
    })

})