function randpost(){$.ajax({type:'POST',url:'/ajax/randpostcov.php',dataType: 'html',data:{'ajax':'1'},beforeSend: function(){$('#randPost').text('Please Wait...');},success: function(data){if(data !==''){$('#randPost').html(data);var outerCont = $('.xrelated-box');outerCont.scrollLeft(outerCont.width()/4);}else{$('#randPost').text('');}}});}function scr(id){$('html, body').animate({scrollTop: $('#'+id).offset().top},300);return false;}function upbkm(id, bkm, portal){$.ajax({type: 'POST',url: '/'+portal+'/ajax/bkm.php',data:{ 'id': id, 'bkm': bkm}});}var portal=window.location.href.split('/')[3];$(document).ready(function(){var nvebtn=$("#navepbtn");var epstr = nvebtn.attr('content');var epsplit = epstr.split('–');if(epstr.indexOf('-') > -1){var epsplit = epstr.split('-');}if(typeof epsplit[1]!=="undefined"){var nveps=[];
var nvepstr = $(".othereps:not([id])");nvepstr.each(function(){nveps.push($(this).attr('href'));});$(".bottom-line").last().before('<div class="navepbtn"><a href="/'+portal+''+nveps[nveps.length-1]+'">Episode Awal<br /><strong>Episode '+epsplit[0]+'</strong></a> <a href="/'+portal+''+nveps[0]+'">Episode Terbaru<br /><strong>Episode '+epsplit[1]+'</strong></a></div>');}if(navigator.userAgent.toLowerCase().indexOf("opera mini")!==-1){$("#lbatch").replaceWith('<a class="othereps" href="#batch" data-wpel-link="external">'+$("#nojsttl").text()+' Subtitle Indonesia</a>');}$("#lbatch").click(function(){scr("batch");});randpost();var cbk = $("#cbk");var cbkm = getCookie("cbkm"+portal);var cbkmm = ' '+cbkm;var bkm = $("#bkm");if(cbkmm.indexOf(' '+cbk.attr("class")) > -1) {bkm.html('<i class="fa fa-bookmark fa-2x"></i> Bookmarked');bkm.attr("id", "unbkm");}$("body").on("click",".rerandom", function(){randpost();});$(".csr").click(function(){var url=window.location.href;var urlenc=encodeURI(url);var ttl=document.title;var ttlenc=encodeURI(ttl);var idsr=$(this).attr('id');var nwt=1;if(idsr=="fbs"){var gosr="https://www.facebook.com/sharer/sharer.php?u="+urlenc;}else if(idsr=="tws") {var gosr="https://twitter.com/intent/tweet?url="+urlenc+"&hashtags=Download%2CAnime%2CBatch&text=Download%20Anime%20"+ttlenc;}else if(idsr=="was"){var gosr="whatsapp://send?text=Download%20Anime%20"+ttlenc+"%20-%20Link%20"+urlenc;}else if(idsr=="bkm"){var nwt=0;bkm.html('<i class="fa fa-bookmark fa-2x"></i> Bookmarked');var ttlbkm = Number(cbk.text())+1;cbk.text(ttlbkm);bkm.attr("id", "unbkm");var cbkm = getCookie("cbkm"+portal);var pid = cbk.attr("class");if(cbkm == ""){var cbkm=pid;}else{var cbkms = cbkm.split(', ');if(cbkms.length > 29){var cbkm = cbkm.replace(', '+cbkms[cbkms.length-1], '');}var cbkm = pid+', '+cbkm;}setCookie("cbkm"+portal, cbkm, 365);upbkm(pid, ttlbkm,portal);}else if(idsr=="unbkm") {var nwt=0;var unbkm = $("#unbkm");unbkm.html('<i class="fa fa-bookmark-o fa-2x"></i> Bookmark');var ttlbkm = Number(cbk.text())-1;cbk.text(ttlbkm);unbkm.attr("id", "bkm");var pid = cbk.attr("class");var csbkm = pid+', ';var cbkm = getCookie("cbkm"+portal)+', ';var cbkm = cbkm.replace(csbkm, '').replace(/,\s*$/, "");setCookie("cbkm"+portal, cbkm, 365);upbkm(pid, ttlbkm,portal);}if(nwt){window.open(gosr, '_blank');}});});