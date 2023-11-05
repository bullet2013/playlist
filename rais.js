$(function(){
    // abas
    // oculta todas as abas
    $("div.contaba").hide();
    // mostra somente  a primeira aba
    $("div.contaba:first").show();
    // seta a primeira aba como selecionada (na lista de abas)
    $(".abas a:first").addClass("selected");
     
    // quando clicar no link de uma aba
    $(".abas a").click(function(){    	
	    // oculta todas as abas
	    $("div.contaba").hide();
	    // tira a seleção da aba atual
	    $(".abas a").removeClass("selected");
	     
	    // adiciona a classe selected na selecionada atualmente
	    $(this).addClass("selected");
	    // mostra a aba clicada
	    $($(this).attr("href")).show();
	    // pra nao ir para o link	    
	    return false;
	 });
    
    $(".menu").click(function() {
		$(".submenu").show();
	});

    $(".conteudo_duvida").hide();
    $(".duvida").click(function(){    	
	    $(".conteudo_duvida").hide();
	    $(this).addClass("active");
	    $($(this).attr("href")).show();
	    

	 });    
    
    $(".seta_duvida_expandir").click(function(){
    	$( this ).next(".resposta").slideToggle( "slow" );
    	$( this ).toggleClass( "seta_duvida_recolher" );
    	$( this ).closest('li').toggleClass( "tira-padding" );
	});
});

function Imprimir() {
    window.print();
}    

function Fechar() {
	$(".submenu").hide();
}    
