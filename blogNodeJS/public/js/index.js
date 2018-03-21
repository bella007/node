$(function(){
	$(".dellpost").click(function(){
		$.post('/addpost', $(this).parent().data(), function(data){});
		location.pathname = '/addpost';
	})
})