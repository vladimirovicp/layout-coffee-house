(()=>{var e={295:()=>{const e=document.querySelector(".header").querySelector(".menu"),a=e.querySelector(".menu__mobile");function r(){e.classList.remove("open"),document.body.classList.remove("_lock")}a&&a.addEventListener("click",(function(a){e.classList.contains("open")?r():(e.classList.add("open"),document.body.classList.add("_lock"))})),e.querySelector(".menu__wrapper").querySelectorAll(".menu__link").forEach((e=>{e.addEventListener("click",(()=>{r()}))}))},690:()=>{!function(){let e,a=document.querySelectorAll(".tabs-nav__item"),r=document.querySelectorAll(".tab");function i(){a.forEach((e=>{e.classList.remove("is-active")})),this.classList.add("is-active"),e=this.getAttribute("data-tab-name"),function(e){r.forEach((a=>{a.classList.contains(e)?a.classList.add("is-active"):a.classList.remove("is-active")}))}(e)}a.forEach((e=>{e.addEventListener("click",i)}))}();const e=document.querySelector(".tabs__content");e&&e.querySelectorAll(".menu__cards").forEach((e=>{e.querySelectorAll(".menu__card").length>4&&e.querySelector(".show-more").addEventListener("click",(()=>{e.classList.add("is-active-cards")}))}))},663:()=>{const e=document.querySelector(".slider");if(e){const i=e.querySelector(".slider__button-prev"),t=e.querySelector(".slider__button-next"),d=(e.querySelectorAll(".slider__arrow"),e.querySelector(".slider__wrapper")),c=d.querySelectorAll(".slider__slide")[0],s=d.querySelectorAll(".slide__info");let n=1;const l=e.querySelector(".slider__pagination").querySelectorAll(".slider__bullet");let o=c.clientWidth,m=0,p=0,u=49;function a(e,a=49){clearInterval(f),p=0,f=setInterval(r,49),0===e&&(n=4,e=3),e>3&&(n=0,e=1),m=(n-1)*o,e>n&&(d.scrollLeft=m+o),e<n&&(d.scrollLeft=m-o),l.forEach((a=>{Number(a.dataset.bullet)!==n&&0!==n&&4!==n||a.classList.remove("active"),Number(a.dataset.bullet)===e&&a.classList.add("active")})),n=e,u=49,clearInterval(v)}t.addEventListener("click",(()=>{clearInterval(f),p=0,a(n+1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3)})),i.addEventListener("click",(()=>{clearInterval(f),p=0,a(n-1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3)})),document.addEventListener("keydown",(function(e){"ArrowLeft"==e.code&&(clearInterval(f),p=0,a(n-1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3)),"ArrowRight"==e.code&&(clearInterval(f),p=0,a(n+1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3))}));let v=setInterval((()=>{a(n+1)}),5e3),f=setInterval(r,49);function r(){100===p?(p=0,clearInterval(f)):(p++,l.forEach((e=>{e.classList.contains("active")?e.querySelector(".slider__bullet-bar").style.width=.04*p+"rem":e.querySelector(".slider__bullet-bar").style.width=0})))}s.forEach((e=>{e.addEventListener("mouseover",(()=>{clearInterval(v),clearInterval(f)})),e.addEventListener("mouseleave",(()=>{f=setInterval(r,49),v=setInterval((()=>{a(n+1,Math.floor(49-.49*p))}),Math.floor(5e3-50*p))}))})),i.addEventListener("mouseover",(()=>{clearInterval(v),clearInterval(f)})),t.addEventListener("mouseover",(()=>{clearInterval(v),clearInterval(f)})),i.addEventListener("mouseleave",(()=>{f=setInterval(r,49),v=setInterval((()=>{a(n+1,Math.floor(49-.49*p))}),5e3-50*p)})),t.addEventListener("mouseleave",(()=>{f=setInterval(r,49),v=setInterval((()=>{a(n+1,Math.floor(49-.49*p))}),Math.floor(5e3-50*p))}));let h=null;d.addEventListener("mousedown",(e=>{h=e.clientX,console.log("click"),clearInterval(v),clearInterval(f)})),d.addEventListener("mouseup",(e=>{let i=e.clientX-h;h=null,i<400&&i>-400&&(clearInterval(f),p=0,f=setInterval(r,49),v=setInterval((()=>{a(n+1,Math.floor(49-.49*p))}),Math.floor(5e3-50*p))),i>400&&(clearInterval(f),p=0,a(n-1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3)),i<-400&&(clearInterval(f),p=0,a(n+1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3))})),d.addEventListener("touchstart",(e=>{h=e.changedTouches[0].clientX,console.log("click"),clearInterval(v),clearInterval(f)})),d.addEventListener("touchend",(e=>{let i=e.changedTouches[0].clientX-h;console.log(i),h=null,i<200&&i>-200&&(clearInterval(f),p=0,f=setInterval(r,49),v=setInterval((()=>{a(n+1,Math.floor(49-.49*p))}),Math.floor(5e3-50*p))),i>200&&(clearInterval(f),p=0,a(n-1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3)),i<-200&&(clearInterval(f),p=0,a(n+1),clearInterval(v),v=setInterval((()=>{a(n+1)}),5e3))})),window.addEventListener("resize",(function(e){d.scrollLeft=0,n=1,o=c.clientWidth}),!0)}}},a={};function r(i){var t=a[i];if(void 0!==t)return t.exports;var d=a[i]={exports:{}};return e[i](d,d.exports,r),d.exports}(()=>{"use strict";r(295),r(663),r(690);const e=[{id:"coffee-1",name:"Irish coffee",description:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"7.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-2",name:"Kahlua coffee",description:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"7.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-3",name:"Honey raf",description:"Espresso with frothed milk, cream and aromatic honey",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-4",name:"Ice cappuccino",description:"Cappuccino with soft thick foam in summer version with ice",price:"5.00",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-5",name:"Espresso",description:"Classic black coffee",price:"4.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-6",name:"Latte",description:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-7",name:"Latte macchiato",description:"Espresso with frothed milk and chocolate",price:"5.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"coffee-8",name:"Coffee with cognac",description:"Fragrant black coffee with cognac and whipped cream",price:"6.50",category:"coffee",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"tea-1",name:"Moroccan",description:"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",price:"4.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"tea-2",name:"Ginger",description:"Original black tea with fresh ginger, lemon and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"tea-3",name:"Cranberry",description:"Invigorating black tea with cranberry and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"tea-4",name:"Sea buckthorn",description:"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",price:"5.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{id:"dessert-1",name:"Marble cheesecake",description:"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",price:"3.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-2",name:"Red velvet",description:"Layer cake with cream cheese frosting",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-3",name:"Cheesecakes",description:"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-4",name:"Creme brulee",description:"Delicate creamy dessert in a caramel basket with wild berries",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-5",name:"Pancakes",description:"Tender pancakes with strawberry jam and fresh strawberries",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-6",name:"Honey cake",description:"Classic honey cake with delicate custard",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-7",name:"Chocolate cake",description:"Cake with hot chocolate filling and nuts with dried apricots",price:"5.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{id:"dessert-8",name:"Black forest",description:"A combination of thin sponge cake with cherry jam and light chocolate mousse",price:"6.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]}],a=document.querySelectorAll(".modal_btn");if(a.length>0){const i=document.querySelector(".modal");function t(){i.classList.remove("active"),document.body.classList.remove("_lock-modal")}i&&(a.forEach((a=>{a.addEventListener("click",(r=>{!function(a,r){const i=e.find((e=>e.name===r));console.log(i);const t=document.querySelector(".modal"),d=t.querySelector(".modal__photo").querySelector("figure").querySelector("img"),c=t.querySelector(".modal__title"),s=t.querySelector(".modal__description"),n=t.querySelector(".modal__form"),l=n.querySelector(".modal__info-size").querySelectorAll(".modal__form-group"),o=n.querySelector(".modal__info-additives").querySelectorAll(".modal__form-group"),m=t.querySelector(".modal__total").querySelector(".modal__total-price"),p=i.price;d.src=`./assets/img/menu/${i.id}.jpg`,c.textContent=r,s.textContent=i.description,m.textContent=`$${p}`,l.forEach((e=>{const a=e.querySelector(".size"),r=e.querySelector(".btn__menu-ico");a.textContent=i.sizes[r.textContent].size;const t=e.querySelector("input");t.checked="s"===t.value,e.addEventListener("click",(e=>{const a=i.sizes[r.textContent]["add-price"];let t=0;o.forEach(((e,a)=>{e.querySelector("input").checked&&(t+=Number(i.additives[a]["add-price"]))})),m.textContent=`$${(Number(p)+Number(a)+t).toFixed(2)}`}))})),o.forEach(((e,a)=>{e.querySelector("input").checked=!1,e.querySelector(".additives-name").textContent=i.additives[a].name,e.addEventListener("click",(e=>{let a=0;o.forEach(((e,r)=>{e.querySelector("input").checked&&(a+=Number(i.additives[r]["add-price"]))}));let r=0;l.forEach((e=>{const a=e.querySelector(".btn__menu-ico");e.querySelector("input").checked&&(r=i.sizes[a.textContent]["add-price"])})),m.textContent=`$${(Number(p)+Number(r)+a).toFixed(2)}`}))}))}(a.dataset.category,a.dataset.name),i.classList.add("active"),document.body.classList.add("_lock-modal"),document.onclick=function(e){"_lock-modal"==e.target.className&&t()}}))})),i.querySelector(".modal__close").addEventListener("click",(()=>{t()})))}})()})();