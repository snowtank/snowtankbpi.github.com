(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	
	 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );
  
   $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
  
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
      
	   $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
  
  $(document).ready(function(){
	  
      $('.slider').slider({
		  full_width: true,
		  
		  });
    });
	
$(document).ready(function(){
    $('.materialboxed').materialbox();
	var h = window.innerHeight;
	h = h - 200;
	$(".dynamicheight").css({"height": h +"px"});
	//$(".dynamicheight").css({"width": w + "px"});

	$(window).resize(function(){
	var h = window.innerHeight;
	h = h - 200;
	$(".dynamicheight").css({"height": h +"px"});
	//$(".dynamicheight").css({"width": w + "px"});
  });
  }); 
  
  
  $(document).ready(function(){
	var j = window.innerHeight;
	j = j;
	$(".dynamicheight2").css({"height": j +"px"});

	$(window).resize(function(){
	var j = window.innerHeight;
	j = j;
	$(".dynamicheight2").css({"height": j +"px"});
  });
  }); 


        
   $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
	
	
  });
  

  
  
  }); // end of document ready
})(jQuery); // end of jQuery name space