// $(function() {
//   $.scrollify({
//     section: ".section",
//     scrollbars: true,
//     before:function(i,panels) {
//       var ref = panels[i].attr("data-section-name");
//       $(".pagination .active").removeClass("active");
//       $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
//     },
//     afterRender:function() {
//       var pagination = "<ul class=\"pagination\">";
//       var activeClass = "";
//       $(".section").each(function(i) {
//         activeClass = "";
//         if(i===0) {
//           activeClass = "active";
//         }
//         pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name") + "</span></a></li>";
//       });

//       pagination += "</ul>";
//       $(".splash").append(pagination);
//       $(".pagination a").on("click",$.scrollify.move);
//     }
//   });
// });