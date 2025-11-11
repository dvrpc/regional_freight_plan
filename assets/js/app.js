$('#aboutModal').modal('show');
$(document).ready(function(){
    $("#iframe_map").addClass("alternate-style"); // Initial style
    $("#footer").addClass("footer-alt"); // Initial style
    $("#hide").addClass("fa fa-chevron-up fa-lg"); // Initial style
    $("#footer_panel_og").addClass("footer_panel_og"); // Initial style

    $("#hide").click(function(){
      // $(".footer_panel").toggle();
      $("#iframe_map").toggleClass("alternate-style original-style");
      $("#footer").toggleClass("footer-alt footer-og");
      $("#footer_panel_og").toggleClass("footer_panel_og footer_panel_alt");
      $("#hide").toggleClass("fa fa-chevron-up fa-lg fa fa-chevron-down fa-lg"); // Initial style
    });
  });