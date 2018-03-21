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
})