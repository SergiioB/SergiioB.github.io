(()=>{"use strict";var e={607:(e,t,n)=>{n.d(t,{v:()=>o});const o=e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};tippy(document.querySelectorAll(".yasr-copy-shortcode"),{content:"Copied! Insert into your post!",theme:"yasr",arrow:"true",arrowType:"round",trigger:"click"})}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t=n(607),o=new Uint8Array(16);function a(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const s=function(e){return"string"==typeof e&&i.test(e)};for(var r=[],l=0;l<256;++l)r.push((l+256).toString(16).substr(1));const d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};const y=function(e,t,n){var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=o[i];return t}return d(o)},c=(e,t,n,o)=>{null!==e&&(null!==t&&t.addEventListener("change",(t=>{t.currentTarget.checked||(e.checked=!1)})),e.addEventListener("change",(e=>{!0===e.currentTarget.checked?(null!==t?t.checked=!0:document.getElementById("yasr-comment-reviews-disabled-switch").checked=!0,null!==n&&(n.value=o)):null!==n&&(n.value="")})))},m=(e,t=!1,n=null,o=null)=>{e>1&&jQuery("#yasr_select_set").on("change",(function(){let a=jQuery("#yasr_select_set").val();return jQuery("#yasr-loader-select-multi-set").show(),!1!==t&&u(a,t,e),document.getElementById("yasr-multiset-id").value=a,null!==n&&""!==n&&null!==o&&(n.value===a?o.checked=!0:o.checked=!1),!1}))},u=(e,t,n)=>{const o={action:"yasr_send_id_nameset",set_id:e,post_id:t};return jQuery.post(ajaxurl,o,(function(t){n>1&&(document.getElementById("yasr-loader-select-multi-set").style.display="none");let o=JSON.parse(t),a=document.getElementById("yasr-table-multi-set-admin"),i=document.getElementById("yasr-table-multi-set-admin-visitor");p(o,a),p(o,i,!1),g(),g(!1);let s=document.getElementsByClassName("yasr-editor-multiset-id");for(let t=0;t<s.length;t++)s[t].innerText=e})),!1},p=(e,t,n=!0)=>{let o="",a="yasr-multiset-admin";for(let t=0;t<e.length;t++){let i=e[t].name,s=0,r=!0;!1!==n&&(s=e[t].average_rating,r=!1,a="yasr-multiset-admin-author");let l=e[t].id;o+="<tr>",o+="<td>"+i+"</td>",o+="<td><div class="+a+' id="yasr-multiset-admin-'+y()+'" data-rating="'+s+'" data-multi-idfield="'+l+'" data-readonly="'+r+'"></div>',o+="</td>",o+="</tr>"}if(!1===n){o+='<tr><td colspan="2"><input type="submit" class="button button-primary" value="Submit!" disabled></td></tr>'}t.innerHTML=o},g=(e=!0)=>{let t;t=!1!==e?"yasr-multiset-admin-author":"yasr-multiset-admin";const n=document.getElementsByClassName(t);let o=[],a=!1;for(let e=0;e<n.length;e++)!function(e){let t=n.item(e).id,i=document.getElementById(t),s=parseInt(i.getAttribute("data-multi-idfield")),r=parseInt(i.getAttribute("data-rating")),l="true"===i.getAttribute("data-readonly"),d={field:s,rating:r};o.push(d);yasrSetRaterValue(32,t,!1,.5,l,!1,(function(e,t){e=e.toFixed(1),e=parseFloat(e),this.setRating(e);for(let t=0;t<o.length;t++)o[t].field===s&&(o[t].rating=e);a=JSON.stringify(o),document.getElementById("yasr-multiset-author-votes").value=a,t()}))}(e)};function b(e){"Product"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"LocalBusiness"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"Recipe"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"SoftwareApplication"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"Book"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"Movie"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none"):document.getElementById("yasr-metabox-info-snippet-container").style.display="none"}document.addEventListener("DOMContentLoaded",(function(e){if(null!==document.getElementById("yasr_metabox_below_editor")&&function(){document.getElementById("yasr-metabox-below-editor-select-schema").addEventListener("change",(function(){b(this.value)})),jQuery("#yasr-metabox-below-editor-structured-data-tab").on("click",(function(e){e.preventDefault(),jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-metabox-below-editor-structured-data-tab").addClass("nav-tab-active"),jQuery(".yasr-metabox-below-editor-content").hide(),jQuery("#yasr-metabox-below-editor-structured-data").show()})),jQuery("#yasr-metabox-below-editor-multiset-tab").on("click",(function(e){e.preventDefault(),jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-metabox-below-editor-multiset-tab").addClass("nav-tab-active"),jQuery(".yasr-metabox-below-editor-content").hide(),jQuery("#yasr-metabox-below-editor-multiset").show()}));let e=document.getElementById("yasr-metabox-below-editor-select-schema").value;null!==document.getElementById("yasr-editor-multiset-container")&&(()=>{let e=document.getElementById("yasr-editor-multiset-container"),n=parseInt(e.getAttribute("data-nmultiset")),o=parseInt(e.getAttribute("data-setid")),a=parseInt(e.getAttribute("data-postid"));const i=document.getElementById("yasr-pro-review-setid"),s=document.getElementById("yasr-editor-copy-readonly-multiset"),r=document.getElementById("yasr-editor-copy-visitor-multiset"),l=document.getElementById("yasr-editor-copy-average-multiset"),d=document.getElementById("yasr-editor-copy-average-vvmultiset"),y=document.getElementById("yasr-editor-copy-comments-multiset"),p=document.getElementById("yasr-pro-comments-enabled-yes"),g=document.getElementById("yasr-pro-multiset-review-switcher");u(o,a,n),s.onclick=function(e){let n=document.getElementById(e.target.id);(0,t.v)(n.textContent.trim())},r.onclick=function(e){let n=document.getElementById(e.target.id);(0,t.v)(n.textContent.trim())},l.onclick=function(e){let n=document.getElementById(e.target.id);(0,t.v)(n.textContent.trim())},d.onclick=function(e){let n=document.getElementById(e.target.id);(0,t.v)(n.textContent.trim())},y.onclick=function(e){let n=document.getElementById(e.target.id);(0,t.v)(n.textContent.trim())},c(g,p,i,o),m(n,a,i,g)})();b(e)}(),!0!==document.body.classList.contains("block-editor-page")){null!==document.getElementById("yasr_metabox_overall_rating")&&function(){let e=parseFloat(document.getElementById("yasr-overall-rating-value").value);const n=document.getElementById("yasr-editor-copy-overall");null!==n&&(n.onclick=function(e){let n=document.getElementById(e.target.id);(0,t.v)(n.textContent.trim())});raterJs({starSize:32,step:.1,showToolTip:!1,rating:e,readOnly:!1,element:document.getElementById("yasr-rater-overall"),rateCallback:function(e,t){e=e.toFixed(1),e=parseFloat(e),document.getElementById("yasr-overall-rating-value").value=e,this.setRating(e);let n="You've rated";document.getElementById("yasr_overall_text").textContent=n+" "+e,t()}})}(),function(){jQuery("#yasr-shortcode-creator").on("click",(function(){tb_show("Ranking Creator","#TB_inline?width=770&height=700&inlineId=yasr-tinypopup-form"),jQuery("#TB_window").css({width:"800px"})})),jQuery("#yasr-builder-copy-shortcode").on("click",(function(){tb_remove()}));let e=!1;null!==document.getElementById("yasr-editor-multiset-container")&&(e=!0);const t=document.getElementById("yasr-tinypopup-link-doc");jQuery("#yasr-link-tab-main").on("click",(function(){jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-link-tab-main").addClass("nav-tab-active"),jQuery(".yasr-content-tab-tinymce").hide(),jQuery("#yasr-content-tab-main").show(),t.setAttribute("href","https://yetanotherstarsrating.com/yasr-shortcodes?utm_source=wp-plugin&utm_medium=tinymce-popup&utm_campaign=yasr_editor_screen")})),jQuery("#yasr-link-tab-charts").on("click",(function(){jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-link-tab-charts").addClass("nav-tab-active"),jQuery(".yasr-content-tab-tinymce").hide(),jQuery("#yasr-content-tab-charts").show(),t.setAttribute("href","https://yetanotherstarsrating.com/yasr-shortcodes/?utm_source=wp-plugin&utm_medium=tinymce-popup&utm_campaign=yasr_editor_screen#yasr-rankings-shortcodes")})),jQuery("#yasr-overall").on("click",(function(){jQuery("#yasr-overall-choose-size").toggle("slow")})),jQuery("#yasr-visitor-votes").on("click",(function(){jQuery("#yasr-visitor-choose-size").toggle("slow")})),jQuery(".yasr-tinymce-shortcode-buttons").on("click",(function(){let e=this.getAttribute("data-shortcode");null==tinyMCE.activeEditor?jQuery("#content").append(e):tinyMCE.activeEditor.execCommand("mceInsertContent",0,e),tb_remove()})),!0===e&&jQuery("#yasr-insert-multiset-select").on("click",(function(){let e,t=jQuery("input:radio[name=yasr_tinymce_pick_set]:checked").val();e=jQuery("#yasr-allow-vote-multiset").is(":checked")?"[yasr_multiset setid=":"[yasr_visitor_multiset setid=",e+=t,jQuery("#yasr-hide-average-multiset").is(":checked")&&(e+=" show_average='no'"),e+="]",null==tinyMCE.activeEditor?jQuery("#content").append(e):tinyMCE.activeEditor.execCommand("mceInsertContent",0,e),tb_remove()}))}()}}))})()})();