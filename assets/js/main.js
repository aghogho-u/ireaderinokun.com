"use strict";function handleSitePageActivation(e){function t(e){return n>e.start-window.innerHeight/2&&n<e.end-window.innerHeight/5}var n=e.target.body.scrollTop;sitePageSections.forEach(function(e){t(e)?(e.element.classList.add("site-page--active"),e.element.classList.remove("site-page--inactive")):(e.element.classList.remove("site-page--active"),e.element.classList.add("site-page--inactive"))})}var EPPZScrollTo={documentVerticalScrollPosition:function(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0},viewportHeight:function(){return"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight},documentHeight:function(){return void 0!==document.height?document.height:document.body.offsetHeight},documentMaximumScrollPosition:function(){return this.documentHeight()-this.viewportHeight()},elementVerticalClientPositionById:function(e){var t=document.getElementById(e),n=t.getBoundingClientRect();return n.top},scrollVerticalTickToPosition:function(e,t){var n=.2,o=60,i=parseFloat(t)-parseFloat(e),r=Math.abs(i)<=.5;return r?void scrollTo(0,t):(e=parseFloat(e)*(1-n)+parseFloat(t)*n,scrollTo(0,Math.round(e)),void setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+e+", "+t+")",1e3/o))},scrollVerticalToElementById:function(e,t){var n=document.getElementById(e);if(null==n)return void console.warn("Cannot find element with id '"+e+"'.");var o=this.documentVerticalScrollPosition()+this.elementVerticalClientPositionById(e)-t,i=this.documentVerticalScrollPosition(),r=this.documentMaximumScrollPosition();o>r&&(o=r),this.scrollVerticalTickToPosition(i,o)}},sitePageEls=document.querySelectorAll(".site-page"),sitePageSections=[];sitePageEls.forEach(function(e){sitePageSections.push({element:e,start:e.offsetTop,end:e.offsetTop+e.clientHeight})});var lastScrollTop=0;window.addEventListener("scroll",function(e){handleSitePageActivation(e)});var navButton=document.querySelector(".nav-icon");navButton.addEventListener("click",function(e){EPPZScrollTo.scrollVerticalToElementById("writing",20)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(e){console.log("Service Worker Registered :)")}).catch(function(e){console.log("Service Worker Failed to Register :(")}),!function(){var e=function(e){var t=e.dataset.subject;r.innerHTML=n[t]},t=function(){function e(){var e=document.querySelector(".emailme-preheader .left").style.width;return e=parseInt(e.split("%")[0]),100!==e&&(e+=1,void(document.querySelector(".emailme-preheader .left").style.width=e+"%"))}function t(){setInterval(function(){e()},100)}return!!o.checkValidity()&&(o.classList.add("sending"),void setTimeout(function(){document.querySelector(".emailme-preheader .left").style.width="70%",t()},3e3))},n={work:'\nI work at <input type="text" aria-label="Your Company" name="company" placeholder="Your Company Name">, and we would like you to work on our project as a \n<select name="role" id="role" aria-label="My Role" required>\n    <option value="" disabled selected hidden>Choose a role</option>\n    <option value="Front-End Developer">Front-End Developer</option>\n    <option value="UI/UX Designer">UI/UX Designer</option>\n    <option value="Project Manager">Project Manager</option>\n    <option value="Consultant">Consultant</option>\n</select>. \nOur project aims to launch in \n<select name="timeline" id="timeline" aria-label="Your Timeline" required>\n    <option value="" disabled selected hidden>Choose a timeline</option>\n    <option value="Less than 4 weeks">Less than 4 weeks</option>\n    <option value="4 - 8 weeks">4 - 8 weeks</option>\n    <option value="More than 8 weeks">More than 8 weeks</option>\n</select>\nand we have a budget of \n<select name="budget" id="budget" aria-label="Your Budget" required>\n    <option value="" disabled selected hidden>Choose a budget</option>\n    <option value="$500 - $1000">$500 - $1000</option>\n    <option value="$1000 - $5000">$1000 - $5000</option>\n    <option value="More than $5000">More than $5000</option>\n</select>.\n',advice:'\nI\'m currently a <input type="text" name="your_role" id="advice_your_role" aria-label="Your Role" placeholder="Comp Science Student" required> and I need some advice with <input type="text" aria-label="name" name="advice_your_topic" placeholder="Learning JavaScript" required>.\n',other:'\n<textarea name="other_message" rows="2" aria-label="message" placeholder="Just saying hi :)" required></textarea>\n'},o=document.querySelector(".emailme-form"),i=document.querySelector(".emailme-submit"),r=document.querySelector(".emailme-message"),a=document.getElementById("subject");document.querySelector(".emailme-preheader .right");r.innerHTML="<small>(Choose a subject to start drafting your message)</small>",a.addEventListener("change",function(t){var n=t.target.selectedOptions[0];e(n)}),i.addEventListener("click",function(e){t()})}(),!function(){var e=function(){},t=function(){a<r.length-1?(a++,n(a)):setTimeout(function(){e()},300)},n=function(){return" "===r[a]&&" "===r[a-1]?t():(o.innerHTML+=r[a],void setTimeout(function(){t()},50))},o=document.querySelector(".typed"),i=(o.innerHTML,o.textContent);o.innerHTML="";var r=i.split(""),a=0;n()}(),!function(){var e=function(){n.forEach(function(e){e.addEventListener("mouseenter",function(e){t(e.target)})})},t=function(e){var t=e.dataset.slide;o.style.backgroundImage="url("+t+")"},n=Array.from(document.querySelectorAll("[data-slide]")),o=document.querySelector(".slideshow-background");e()}(),!function(){var e=function(e,t){var n=e.style.transform?e.style.transform:"translateY(0%)";switch(n=n.split("(")[1],n=n.split("%")[0],t){case"down":n=parseFloat(n)-.2;break;case"up":n=parseFloat(n)+.2}n<.2&&n>-100&&(e.style.transform="translateY("+n+"%)")},t=function(e){e.style.transition="transform 0.5s",e.style.transform="translateY(0%)",setTimeout(function(){e.style.transition="none"},1e3)},n=document.querySelector(".site-page--work"),o=[],i=document.querySelectorAll(".work");i.forEach(function(e){o.push({element:e,start:e.offsetTop+n.offsetTop-window.innerHeight/3,end:e.offsetTop+n.offsetTop+e.clientHeight})});var r=0;window.addEventListener("scroll",function(n){function i(){return r>=l?"up":"down"}function a(e){return l>e.start&&l<e.end}var l=n.target.body.scrollTop;o.forEach(function(n){var o=n.element.querySelector(".work-screenshot");return a(n)?void e(o,i()):t(o)}),r=l})}();var articleElements=Array.from(document.querySelectorAll(".excerpts-highlightEffect .excerpt"));articleElements&&!function(){var e=function(e){articleElements.forEach(function(e){e.classList.add("inactive"),e.classList.remove("active")}),e.classList.remove("inactive"),e.classList.add("active")},t=function(){articleElements.forEach(function(e){e.classList.remove("inactive"),e.classList.remove("active")})};articleElements.forEach(function(n){n.addEventListener("mouseenter",function(t){e(t.target)}),n.addEventListener("mouseleave",function(e){t()})})}();