(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},151:(e,t,a)=>{e.exports=a.p+"images/apple-touch-icon.png"},886:(e,t,a)=>{e.exports=a.p+"images/favicon-16x16.png"},245:(e,t,a)=>{e.exports=a.p+"images/favicon-32x32.png"},112:(e,t,a)=>{e.exports=a.p+"images/site.webmanifest"},25:(e,t,a)=>{e.exports=a.p+"images/book-card1.png"},450:(e,t,a)=>{e.exports=a.p+"images/book-card2.png"},353:(e,t,a)=>{e.exports=a.p+"images/book-card3.png"},46:(e,t,a)=>{e.exports=a.p+"images/book-card4.png"},39:(e,t,a)=>{e.exports=a.p+"images/image1.png"},657:(e,t,a)=>{e.exports=a.p+"images/image2.png"},985:(e,t,a)=>{e.exports=a.p+"images/image3.png"},687:(e,t,a)=>{e.exports=a.p+"images/image4.png"},348:(e,t,a)=>{e.exports=a.p+"images/image5.png"},922:(e,t,a)=>{e.exports=a.p+"icons/icon_profile.3a03f9c1e4bd72e88200.svg"},98:(e,t,a)=>{e.exports=a.p+"icons/u_facebook-f.75d08d235d4a145d753b.svg"},269:(e,t,a)=>{e.exports=a.p+"icons/u_instagram.672e82713c3b34eef150.svg"},97:(e,t,a)=>{e.exports=a.p+"icons/u_twitter-alt.725fce4b452e81205e2a.svg"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),a.b=document.baseURI||self.location.href,(()=>{var e=a(91),t=a.n(e),o=new URL(a(151),a.b),n=new URL(a(245),a.b),i=new URL(a(886),a.b),r=new URL(a(112),a.b),s=new URL(a(922),a.b),c=new URL(a(39),a.b),l=new URL(a(657),a.b),d=new URL(a(985),a.b),u=new URL(a(687),a.b),h=new URL(a(348),a.b),g=new URL(a(25),a.b),m=new URL(a(450),a.b),p=new URL(a(353),a.b),f=new URL(a(46),a.b),v=new URL(a(97),a.b),y=new URL(a(269),a.b),b=new URL(a(98),a.b);t()(o),t()(n),t()(i),t()(r),t()(s),t()(c),t()(l),t()(d),t()(u),t()(h),t()(g),t()(m),t()(p),t()(f),t()(v),t()(y),t()(b);const L=document.body,w=document.querySelector(".header__burger-menu-icon"),_=document.querySelector(".header__nav"),x=document.querySelector(".body__cover"),k=document.querySelector(".header__profile-icon"),S=document.querySelector(".nav__items"),A=document.querySelectorAll(".nav__item"),E=document.querySelector(".slider__images"),T=document.querySelectorAll(".slider__img"),R=document.querySelectorAll(".pagination__button"),B=document.querySelector(".arrows-btn_left"),q=document.querySelector(".arrows-btn_right");console.log("sliderImagesAll.length=",T.length);let U=0,M=475,C=!1,P=0;R[P].classList.add("_active");const D=()=>{C||(C=!0,U+=M,console.log(U),U>=0&&(q.addEventListener("click",H),q.classList.remove("_not-active"),E.style.transform=`translateX(-${U}px)`,R[P].classList.remove("_active"),P++,R[P].classList.add("_active")),U>=(T.length-1)*M&&(B.removeEventListener("click",D),B.classList.add("_not-active"))),setTimeout((()=>{C=!1}),1e3)},H=()=>{C||(C=!0,(U>=0||U<(T.length-1)*M)&&(B.addEventListener("click",D),B.classList.remove("_not-active")),R[P].classList.remove("_active"),P--,R[P].classList.add("_active"),U-=M,E.style.transform=`translateX(-${U}px)`,U<=0&&(q.removeEventListener("click",H),q.classList.add("_not-active")),console.log(U)),setTimeout((()=>{C=!1}),1e3)};function $(e){if(!C){C=!0;const t=Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);if(R[t].classList.contains("_active"))return;R[P].classList.remove("_active"),console.log("activePageIndex ==",P),console.log("button-index==",t),P=t,R[P].classList.add("_active"),U=P*M,E.style.transform=`translateX(-${U}px)`,console.log(U),0===U?(B.removeEventListener("click",D),q.addEventListener("click",H)):U===(T.length-1)*M?(q.removeEventListener("click",H),B.addEventListener("click",D)):(B.addEventListener("click",D),q.addEventListener("click",H))}setTimeout((()=>{C=!1}),1e3)}R.forEach((e=>{e.addEventListener("click",$)})),window.addEventListener("resize",(()=>{window.innerWidth<1431?R[1].classList.remove("_active"):(R[1].classList.remove("_active"),R[3].classList.remove("_active"))}));const N={title:["The Book Eaters","Cackle","Dante: Poet of the Secular World","The Last Queen"],author:["By Sunyi Dean","By Rachel Harrison","By Erich Auerbach","By Clive Irving"],text:["An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.","Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.","Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.","A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them."]},W={title:["The Body","Carry: A Memoir of Survival on Stolen Land","Days of Distraction","Dominicana"],author:["By Stephen King","By Toni Jenson","By Alexandra Chang","By Angie Cruz"],text:["Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.","This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.","A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.","A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez."]},I={title:["Crude: A Memoir","Let My People Go Surfing","The Octopus Museum: Poems","Shark Dialogues: A Novel"],author:["By Pablo Fajardo & ​​Sophie Tardy-Joubert","By Yvon Chouinard","By Brenda Shaughnessy","By Kiana Davenport"],text:["Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people","Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.","This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.","An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers."]},j={title:["Casual Conversation","The Great Fire","Rickey: The Life and Legend","Slug: And Other Stories"],author:["By Renia White","By Lou Ureneck","By Howard Bryant","By Megan Milks"],text:["White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.","The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide","With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the games all-time greatest performers, the Man of Steal, Rickey Henderson?","Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds."]},O=(document.querySelectorAll(".label-for-radio"),document.querySelectorAll(".radio-button")),z=(document.querySelectorAll(".book-cards__card"),document.querySelectorAll(".card__h4__span1")),F=document.querySelectorAll(".card__h4__span2"),G=document.querySelectorAll(".card__text"),J=document.querySelectorAll(".book-card__img");O.forEach((e=>{e.addEventListener("click",(()=>{(e=>{for(let t=0;t<z.length;t++)setTimeout((()=>{z[t].classList.add("fade-out"),F[t].classList.add("fade-out"),G[t].classList.add("fade-out"),J[t].classList.add("fade-out")}),50*t),setTimeout((()=>{let a;"Winter"===e?(a=N,J[t].src=`images/book-card${t+1}.png`):"Spring"===e?(a=W,J[t].src=`images/book-card${t+5}.png`):"Summer"===e?(a=I,J[t].src=`images/book-card${t+9}.png`):"Autumn"===e&&(a=j,J[t].src=`images/book-card${t+13}.png`),z[t].innerHTML=a.title[t],F[t].innerHTML=a.author[t],G[t].innerHTML=a.text[t],z[t].classList.add("fade-in"),F[t].classList.add("fade-in"),G[t].classList.add("fade-in"),J[t].classList.add("fade-in"),z[t].classList.remove("fade-out"),F[t].classList.remove("fade-out"),G[t].classList.remove("fade-out"),J[t].classList.remove("fade-out")}),50*t+500)})(e.nextElementSibling.textContent)}))})),function(){const e=()=>{w.classList.toggle("_active"),_.classList.toggle("_active"),S.classList.toggle("_active"),L.classList.toggle("_locked"),k.classList.toggle("_active"),x.classList.toggle("_active")};w.addEventListener("click",e),A.forEach((t=>t.addEventListener("click",(()=>{S.classList.contains("_active")&&e()})))),window.addEventListener("click",(t=>{const a=t.target;(a.classList.contains("body__cover")||a.classList.contains("header__profile-icon"))&&e()}))}(),B.addEventListener("click",D),q.addEventListener("click",H),window.addEventListener("load",(()=>{q.removeEventListener("click",H),q.classList.add("_not-active")}))})()})();