$(function(){
    $('#lol').on('click',function(){
        $.post('/lol',{name:'pic.img'},function(data){
            $("#lol2").attr('src',data);
            alert(data)
        })
    })
    $('#b').on('click',function(){
        let a=$('#a').val();
        $.post('/',{name:a},function(data){
            alert(data);
        })
    })

    $('#lol').on('click',function(){
        $.post('/',{name:100},function(data){
            alert(data);
        })
    })

    $('#button_form').on('click',function(e){
        e.preventDefault()
        let form_val = $('#admin_form')
        $.post('/admin',{val:form_val},function(data){
            alert(data);
        })
        console.log('hello')
    })

})