(window.webpackJsonpquiz=window.webpackJsonpquiz||[]).push([[0],{15:function(e,t,r){e.exports=r(28)},21:function(e,t,r){},27:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(10),i=(r(20),r(14)),s=(r(21),function(e){return a.a.createElement("div",{className:"container"},a.a.createElement("main",null,e.children))}),o=r(6),u=r.n(o),l=r(11),f=r(12),m=r(7),C=r(4),d=r(5),p=r(13),w=r.n(p),h=(r(27),function(e){var t=e.question,r=e.correctHashedAnswer,c=e.hint,i=void 0===c?void 0:c,s=e.renderNextQuestion,o=e.timeLine,d=function(e){return new Promise(function(t){return setTimeout(t,e)})},p=Object(n.useRef)(null),h=Object(n.useRef)(null),v=Object(n.useRef)(null),g=Object(n.useRef)(null),O=function(){var e=Object(f.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.play(),w()(t.answer.trim().toLowerCase())===r.trim().toLowerCase()){e.next=11;break}return e.next=5,d(3e3);case 5:return o.restart(),o.pause(),E(h,v,g),e.abrupt("return",Object(l.a)({},C.a,"Forkert svar!"));case 11:return e.next=13,d(3e3);case 13:o.restart(),o.pause(),b(h,v,g),s();case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){!function(e,t,r,n){e.to(t.current,1,{rotation:360,transformOrigin:"50% 50%"}),e.to(r.current,1,{rotation:360,transformOrigin:"50% 50%"}),e.to(n.current,1,{rotation:360,transformOrigin:"50% 50%"})}(o,h,v,g)}),a.a.createElement(m.b,{onSubmit:O,render:function(e){var r=e.submitError,n=e.handleSubmit,c=e.submitting,s=e.pristine;return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:n},a.a.createElement("svg",{className:"logo",xmlns:"http://www.w3.org/2000/svg",width:"100pt",height:"70pt",version:"1.1",viewBox:"0 0 1000 709"},a.a.createElement("path",{ref:h,id:"u",fill:"#ffffff",d:" M 0.00 0.00 L 96.06 0.00 C 100.40 18.33 103.70 37.12 111.48 54.41 C 115.31 63.06 120.47 71.11 126.78 78.16 C 152.36 109.49 192.58 128.40 233.06 127.65 C 277.32 124.98 318.66 97.59 340.01 58.98 C 349.59 40.66 352.50 19.95 356.86 0.00 L 454.74 0.00 C 451.20 20.65 448.38 41.49 442.84 61.74 C 435.47 89.55 421.78 115.49 404.13 138.12 C 380.11 168.84 348.08 193.45 311.71 207.70 C 252.81 231.18 183.98 229.07 127.07 200.84 C 116.35 195.64 106.34 189.15 96.41 182.59 C 78.17 170.21 62.19 154.63 48.91 137.05 C 23.06 102.79 7.23 61.66 0.00 19.54 L 0.00 0.00 Z",opacity:"1.00"}),a.a.createElement("path",{ref:v,id:"c",fill:"#ffffff",d:" M 500.43 243.52 C 524.46 234.57 550.49 230.36 576.08 233.17 C 577.12 233.50 579.57 232.87 579.14 234.82 C 580.06 264.34 580.41 293.91 578.73 323.41 C 558.65 331.52 536.42 333.17 516.95 342.96 C 505.75 348.93 495.13 356.19 486.28 365.34 C 462.17 389.85 449.34 424.77 451.22 459.03 C 450.76 474.19 453.80 489.39 459.82 503.30 C 471.35 529.96 492.26 552.01 516.99 566.94 C 535.75 577.93 557.86 579.77 578.79 583.70 C 580.41 615.54 579.95 647.44 578.99 679.29 C 537.21 680.13 495.62 667.72 460.20 645.79 C 426.32 624.95 397.57 595.53 378.45 560.58 C 363.46 533.21 354.61 502.31 354.09 471.05 C 354.14 464.37 353.36 457.72 353.36 451.04 C 352.62 390.81 378.80 330.83 423.42 290.38 C 446.19 270.59 472.08 254.07 500.43 243.52 Z",opacity:"1.00"}),a.a.createElement("path",{ref:g,id:"l",fill:"#ffffff",d:" M 703.94 233.20 C 736.36 231.52 768.87 231.57 801.29 233.17 C 803.34 310.10 801.03 387.07 802.17 464.01 C 802.67 482.86 809.43 501.00 818.79 517.18 C 826.08 529.45 834.17 541.61 845.40 550.67 C 867.33 568.98 895.34 577.51 922.74 583.70 C 925.56 615.54 924.77 647.58 922.91 679.46 C 867.31 675.99 812.16 654.11 771.90 615.14 C 758.97 602.83 748.38 588.37 738.49 573.59 C 716.03 539.05 704.07 498.09 702.88 457.00 C 702.60 449.33 702.98 441.65 703.03 433.98 C 703.95 367.06 701.81 300.11 703.94 233.20 Z",opacity:"1.00"})),a.a.createElement("span",{className:"question"},t),a.a.createElement(m.a,{name:"answer"},function(e){var t=e.input;return a.a.createElement("input",Object.assign({},t,{ref:p,type:"text",placeholder:"Dit svar",autoComplete:"off"}))}),a.a.createElement("button",{type:"submit",disabled:c||s},"Svar"),a.a.createElement("div",{className:"error"},r&&a.a.createElement("span",{className:"errorMessage"},r),r&&i&&a.a.createElement("span",{className:"hint"},i))))}})});function b(e,t,r){d.b.fromTo([e.current,t.current,r.current],.5,{fill:"white"},{fill:"green",repeat:1,yoyo:!0})}function E(e,t,r){d.b.fromTo([e.current,t.current,r.current],.5,{fill:"white"},{fill:"red",repeat:1,yoyo:!0})}var v=[{question:"Sp\xf8rgsm\xe5l a ",correctHashedAnswer:"0CC175B9C0F1B6A831C399E269772661",hint:"Hint: svaret er a"},{question:"2",correctHashedAnswer:"b"},{question:"3",correctHashedAnswer:"c"},{question:"4",correctHashedAnswer:"d"},{question:"5",correctHashedAnswer:"e"},{question:"6",correctHashedAnswer:"f"},{question:"7",correctHashedAnswer:"g"},{question:"8",correctHashedAnswer:"h"},{question:"9",correctHashedAnswer:"i"},{question:"10",correctHashedAnswer:"j"}],g=new d.a({paused:!0});Object(c.render)(a.a.createElement(function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),r=t[0],c=t[1];return a.a.createElement(s,null,a.a.createElement(h,Object.assign({},v[r],{timeLine:g,renderNextQuestion:function(){c(r+1)}})))},null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.85d0d12f.chunk.js.map