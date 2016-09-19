function bancos(){
	$(".row-banks img:eq(1)").addClass("box");
	$(".row-banks img").each(function(i){
	
		$(this).css({"cursor":"pointer"});
		$(this).click(function(){
			$(this).fadeOut("fast").fadeIn("fast");
			$(this).clone().appendTo(".row-banks .cont-img");
			
			$(this).removeClass("bank");
			$(this).addClass("box");
			$(".bank").removeClass("box");
			setTimeout(function() {
				$(".row-banks img").addClass("bank");
			}, 10);

			if ($(".row-banks .cont-img img").length>1) {
				$(".row-banks .cont-img img:first").remove();
			};
			var text = $(".ctexto");
			var attr = $(this).attr("alt");

			switch(i){
				case 0:
				text.text(attr);
				break;
				case 1:
				text.text(attr);
				break;
				case 2:
				text.text(attr);
				break;
				case 3:
				text.text(attr);
				break;
				case 4:
				text.text(attr);
				break;
				case 5:
				text.text(attr);
				break;
			}
			
		})
	});
}
bancos();

$("#print").bind("click",function(){
	window.print();
});


$( document ).ready(function(){
	$(".bankSelect").click(function(){
		$(".bankSelect").children("img").animate({width:'42px',height:'42px',margin:'5px',opacity:'.5',border:'none','box-shadow':'none'},"fast");
		$(this).children("img").animate({width:'48px',height:'48px',margin:'2px',opacity:'1'},"fast",function(){
			$(this).css({'border':'1px white solid','box-shadow':'0px 0px 3px 2px #2c6bab'});
		});
		
	});

	$(".btnPagoInternet, .btnPagoEfectivo").click(function(){
		$(".bankSelect").children("img").animate({width:'42px',height:'42px',margin:'5px',opacity:'.5',border:'none','box-shadow':'none'},"fast",function(){
			$(".defBank").children("img").css({'width':'52px','height':'52px','margin':'0px','opacity':'1','border':'1px white solid','box-shadow':'0px 0px 3px 2px #2c6bab'});
		});
	});
});
