!function(){var t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]"),body:document.querySelector("body")},o=null;t.buttonStart.addEventListener("click",(function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.36cff562.js.map
