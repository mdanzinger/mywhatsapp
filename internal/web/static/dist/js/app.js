if($(".izimodal").length&&($("#report-modal").iziModal(),$('input[type="file"]').on("change",function(e){var t=$(this).val(),a=t.split("."),o=a[a.length-1].toUpperCase();return console.log(o),"txt"==o.toLowerCase()?($(".upload-btn-wrapper .btn").addClass("btn--fill"),$(".upload-btn-wrapper .btn").text(t.split("\\").pop()),!0):(alert("Chats must be a .txt file!"),!1)}),$("#report-modal .btn--submit").on("click",function(e){var t=!0;if(e.preventDefault(),$(":input[required]:visible").each(function(){if(""==$(this).val())return alert("Please ensure you've selected a chat and inputted your email."),t=!1}),t){var a=new FormData($("#report-modal form")[0]);$("form").hide(),$(".btn--submit").hide(),$(".loading").addClass("show"),$.ajax({type:"post",url:"/report",processData:!1,contentType:!1,data:a,success:function(e,t){console.log(e),$(".circle-loader").addClass("load-complete"),$(".checkmark").show()},error:function(e,t){console.log(e,t)}})}})),$(".report").length){var options={useEasing:!0,useGrouping:!0,separator:",",decimal:"."},statistics=$(".report__overview span.count");statistics.each(function(e){var t=$(statistics[e]).html();new CountUp(statistics[e],0,t,0,2,options).start()}),particlesJS("report_background",{particles:{number:{value:380,density:{enable:!0,value_area:5e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}