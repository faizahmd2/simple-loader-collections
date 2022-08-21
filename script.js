const modal_container = document.getElementById('modal-container');
const loader_container = document.getElementById('loader-container');
const html_container = document.getElementById('html-text');
const css_container = document.getElementById('css-text');
const html_copy_btn = document.querySelector('.html-copy');
const css_copy_btn = document.querySelector('.css-copy');
let isOpen = false;

function openModal(i) {
    let html = `<div class="loader-element--${i}"></div>`;
    if(i == 43 || i == 44) {
        html = getHTML(i);
    }
    
    const css = getCSS(i);

    modal_container.style.display = 'block';
    html_container.innerText = html;
    css_container.innerText = css;
    isOpen = true;
    bodyScroll();
}

function closeModal() {
    modal_container.style.display = 'none';
    html_copy_btn.style.backgroundColor = '#5d0080bd'
    css_copy_btn.style.backgroundColor = '#5d0080bd'
    html_copy_btn.innerText = 'Copy'
    css_copy_btn.innerText = 'Copy'
    isOpen = false;
    bodyScroll();
}

function copyText(type) {
    let element = type == 'html' ? html_container : css_container;
    if (document.selection) { 
        const range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
        
    } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }

    const elem = document.createElement('textarea');
    elem.value = element.innerText;
    document.body.appendChild(elem);
    document.execCommand('copy');
    document.body.removeChild(elem);

    if(type=='html') {
        html_copy_btn.innerText = 'Copied'
        html_copy_btn.style.backgroundColor = '#00801ebd'

        css_copy_btn.innerText = 'Copy'
        css_copy_btn.style.backgroundColor = '#5d0080bd'
    } else {
        css_copy_btn.innerText = 'Copied'
        css_copy_btn.style.backgroundColor = '#00801ebd'
        
        html_copy_btn.innerText = 'Copy'
        html_copy_btn.style.backgroundColor = '#5d0080bd'
    }
}

function bodyScroll() {
    if(isOpen) {
        document.body.style.overflow = 'hidden';
        loader_container.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto';
        loader_container.style.overflow = 'auto'
    }
}

function getHTML(i) {
    switch(i) {
        case 43: return `<div class="loader-element--43"">
        <p>l</p>
        <p>o</p>
        <p>a</p>
        <p>d</p>
        <p>i</p>
        <p>n</p>
        <p>g</p>
    </div>`
    case 44: return `<div class="loader-element--44" onclick="copyCode(44)">
    <svg width="50" height="50" viewBox="0 0 100 100">
        <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="24" fill="none"></polyline>
        <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="24" fill="none"></polyline>
        <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="24" fill="none"></polyline>
        <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="24" fill="none"></polyline>
      </svg></div>`
    default: return ``
    }
}

function getCSS(i) {
    switch(i) {
        case 1: return `.loader-element---1::before {
                content:"Loading...";
            }
            .loader-element---1 {
                width: 6em;
                font-weight: bold;
                font-family: monospace;
                font-size: 2em;
                clip-path: inset(0 3ch 0 0);
                animation:c4 1s steps(4) infinite;
            }
            @keyframes c4 {to{clip-path: inset(0 -1ch 0 0)}}`
        case 2: return `.loader-element---2 {
                width:7em;
                height:14px;
                background: repeating-linear-gradient(90deg, currentColor 0 calc(25% - 5px),#0000 0 25%) left/calc(4*100%/3) 100%;
                animation:l2 0.5s infinite linear;
              }
            @keyframes l2 {
                100% {background-position: right}
            }`
        case 3: return `.loader-element---3 {
                width:7em;
                height:12px;
                background: 
                  linear-gradient( 90deg,currentColor 50%,#0000 0) 0 0%,
                  linear-gradient(-90deg,currentColor 50%,#0000 0) 0 0%;
                background-size: 20px 100%;
                background-repeat: repeat-x;
                animation:l3 1s infinite linear;
              }
              @keyframes l3 {
                  100% {background-position: -20px 0%,20px 0%}
              }`
        case 4: return `.loader-element---4 {
                width: 4em;
                aspect-ratio: 4;
                background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
                clip-path: inset(0 100% 0 0);
                animation: l4 1s steps(4) infinite;
              }
              @keyframes l4 {to{clip-path: inset(0 -34% 0 0)}}`
        case 5: return `.loader-element---5 {
            width: 4em;
            aspect-ratio: 2;
            --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
            background: 
              var(--_g) 0%   50%,
              var(--_g) 50%  50%,
              var(--_g) 100% 50%;
            background-size: calc(100%/3) 50%;
            animation: l5 1s infinite linear;
          }
          @keyframes l5 {
              20%{background-position:0%   0%, 50%  50%,100%  50%}
              40%{background-position:0% 100%, 50%   0%,100%  50%}
              60%{background-position:0%  50%, 50% 100%,100%   0%}
              80%{background-position:0%  50%, 50%  50%,100% 100%}
          }`
        case 6: return `  .loader-element---6 {
            width: 1em;
            aspect-ratio: 1;
            border-radius: 50%;
            animation: l6 1s infinite linear alternate;
            transform: translateX(20px);
          }
          @keyframes l6 {
              0%  {box-shadow: 20px 0 #000, -20px 0 #0002;background: #000 }
              33% {box-shadow: 20px 0 #000, -20px 0 #0002;background: #0002}
              66% {box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002}
              100%{box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 }
          }`
        case 7: return `.loader-element---7 {
            width: 60px;
            aspect-ratio: 4;
            --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
            background: 
              var(--_g) 0%   50%,
              var(--_g) 50%  50%,
              var(--_g) 100% 50%;
            background-size: calc(100%/3) 100%;
            animation: l7 1s infinite linear;
          }
          @keyframes l7 {
              33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
              50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
              66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
          }`
        case 8: return `.loader-element---8 {
            width: 15px;
            aspect-ratio: 1;
            background: #000;
            border-radius: 50%;
            animation: l6 1s infinite linear alternate;
          }
          @keyframes l6 {
              0%  {box-shadow: 15px 0,-25px 0}
              50% {box-shadow: 15px 0,-15px 0}
              100%{box-shadow: 25px 0,-15px 0}
          }`
        case 9: return `.loader-element---9 {
            width: 2em;
            aspect-ratio: .75;
            --c: no-repeat linear-gradient(#000 0 0);
            background: 
              var(--c) 0%   100%,
              var(--c) 50%  100%,
              var(--c) 100% 100%;
            background-size: 20% 65%;
            animation: b5 1s infinite linear;
          }
          @keyframes b5 {
            20% {background-position: 0% 50% ,50% 100%,100% 100%}
            40% {background-position: 0% 0%  ,50% 50% ,100% 100%}
            60% {background-position: 0% 100%,50% 0%  ,100% 50% }
            80% {background-position: 0% 100%,50% 100%,100% 0%  }
          }`
        case 10: return `.loader-element---10 {
            width: 2em;
            aspect-ratio: 1;
            --c: no-repeat linear-gradient(#000 0 0);
            background: 
              var(--c) 0%   50%,
              var(--c) 50%  50%,
              var(--c) 100% 50%;
            background-size: 20% 100%;
            animation: b1 1s infinite linear;
          }
          @keyframes b1 {
            0%  {background-size: 20% 100%,20% 100%,20% 100%}
            33% {background-size: 20% 10% ,20% 100%,20% 100%}
            50% {background-size: 20% 100%,20% 10% ,20% 100%}
            66% {background-size: 20% 100%,20% 100%,20% 10% }
            100%{background-size: 20% 100%,20% 100%,20% 100%}
          }`
        case 11: return `.loader-element---11 {
            width: 2em;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 8px solid lightblue;
            border-right-color: orange;
            animation: l11 1s infinite linear;
          }
          @keyframes l11 {to{transform: rotate(1turn)}}`
        case 12: return `.loader-element--12 {
            width: 2em;
            padding: 0.5em;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #25b09b;
            --_m: 
              conic-gradient(#0000 10%,#000),
              linear-gradient(#000 0 0) content-box;
            -webkit-mask: var(--_m);
                    mask: var(--_m);
            -webkit-mask-composite: source-out;
                    mask-composite: subtract;
            animation: s3 1s infinite linear;
          }
          @keyframes s3 {to{transform: rotate(1turn)}}`
        case 13: return `.loader-element--13 {
            width: 2em;
            --b: 0.5em; /* the border thickness */
            aspect-ratio: 1;
            border-radius: 50%;
            padding: 1px;
            background: conic-gradient(#0000 10%,#f03355) content-box;
            -webkit-mask:
              repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
              radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
            -webkit-mask-composite: destination-in;
            mask-composite: intersect;
            animation:s4 1s infinite steps(10);
          }
          @keyframes s4 {to{transform: rotate(1turn)}}`
        case 14: return `.loader-element--14 {
            width: 3em;
            aspect-ratio: 1;
            --_c: radial-gradient(farthest-side,#25b09b 92%,#0000);
            background: 
              var(--_c) top,
              var(--_c) left,
              var(--_c) right,
              var(--_c) bottom;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            animation: s7 1s infinite;
          }
          @keyframes s7 {to{transform: rotate(.5turn)}}`
        case 15: return `.loader-element--15 {
            width: 8em;
            height:20px;
            background: 
              linear-gradient(90deg,#0001 33%,#0005 50%,#0001 66%)
              #f2f2f2;
            background-size:300% 100%;
            animation: ct1 1s infinite linear;
          }
          
          @keyframes ct1 {
            0% {background-position: right}
          }`
        case 16: return `.loader-element--16 {
            width:8em;
            height:20px;
            -webkit-mask:linear-gradient(90deg,#000 70%,#0000 0) left/20% 100%;
            background:
             linear-gradient(#000 0 0) left -25% top 0 /20% 100% no-repeat
             #ddd;
            animation:ct7 1s infinite steps(6);
          }
          @keyframes ct7 {
              100% {background-position: right -25% top 0}
          }`
        case 17: return `.loader-element--17 {
            width:8em;
            height:20px;
            border-radius: 20px;
            background:
             linear-gradient(orange 0 0) 0/0% no-repeat
             lightblue;
            animation:p2 5s infinite steps(100);;
          }
          @keyframes p2 {
              100% {background-size:110%}
          }`
        case 18: return `.loader-element--18 {
            width:8em;
            height:20px;
            -webkit-mask:linear-gradient(90deg,#000 70%,#0000 0) 0/20%;
            background:
             linear-gradient(#000 0 0) 0/0% no-repeat
             #ddd;
            animation:le18 2s infinite steps(6);
          }
          @keyframes le18 {
              100% {background-size:120%}
          }`
        case 19: return `.loader-element--19 {
            width:8em;
            height:22px;
            border-radius: 20px;
            color:#514b82;
            border:2px solid;
            position: relative;
          }
          .loader-element--19::before {
            content:"";
            position: absolute;
            margin:2px;
            inset:0 100% 0 0;
            border-radius: inherit;
            background:currentColor;
            animation:le19 2s infinite;
          }
          @keyframes le19 {
              100% {inset:0}
          }`
        case 20: return `.loader-element--20 {    
            --r1: 154%;
            --r2: 68.5%;
            width:60px;
            height:60px;
            border-radius: 50%; 
            background:
              radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
              radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%),
              radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
              #ccc;
            background-size: 50.5% 220%;
            background-position: -100% 0%,0% 0%,100% 0%;
            background-repeat:no-repeat;
            animation:le20 2s infinite linear;
          }
          @keyframes le20 {
              33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
              66%  {background-position: -100%  66%,0%   66% ,100% 66% }
              100% {background-position:    0% 100%,100% 100%,200% 100%}
          }`
        case 21: return `.loader-element--21 {
            width:8em;
            height:20px;
            border-radius: 20px;
            background:
             radial-gradient(farthest-side,orange 94%,#0000 ) left/20px 20px no-repeat
             lightblue;
            animation:le21 1s infinite linear;
          }
          @keyframes le21 {
              50% {background-position:right }
          }`
        case 22: return `.loader-element--22 {
            width:8em;
            height:20px;
            background:
             linear-gradient(#000 0 0) left/20px 20px no-repeat
             #ddd;
            animation:le22 1s infinite linear;
          }
          @keyframes le22 {
              50% {background-position: right }
          }`
        case 23: return `.loader-element--23 {
            width:20px;
            height:20px;
            border-radius:50%;
            position: relative;
            transform-origin:50% -200%;
            background:radial-gradient(at 30% 30%,#0000,#000a) red;
            animation: le23 1s cubic-bezier(.5,-200,.5,200) infinite;
          }
          .loader-element--23:before {
            content: "";
            position: absolute;
            inset:-200% 8px 100%;
            background:#ddd; 
          }
          @keyframes le23 { 
              100% { transform:rotate(1deg)} 
          }`
        case 24: return `.loader-element--24 {
            width:20px;
            height:20px;
            border-radius: 50%;
            background:#000;
            box-shadow: 0 0 0 0 #0004;
            animation:pl2 1.5s infinite linear;
            position: relative;
          }
          .loader-element--24:before,
          .loader-element--24:after {
            content:"";
            position: absolute;
            inset:0;
            border-radius: inherit;
            box-shadow: 0 0 0 0 #0004;
            animation: inherit;
            animation-delay: -0.5s;
          }
          .loader-element--24:after {
            animation-delay: -1s;
          }
          @keyframes pl2 {
              100% {box-shadow: 0 0 0 40px #0000}
          }`
        case 25: return `.loader-element--25 {
            width:50px;
            height:50px;
            color:#dc1818;
            background:
             radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
             radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
             linear-gradient(to bottom left, currentColor 42%,#0000 43%) bottom left ,
             linear-gradient(to bottom right,currentColor 42%,#0000 43%) bottom right;
            background-size:50% 50%;
            background-repeat:no-repeat;
            position:relative;
          }
          .loader-element--25:after {
            content:"";
            position:absolute;
            inset:0;
            background:inherit;
            opacity:0.4;
            animation:pl3 1s infinite;
          }
          @keyframes pl3 {
            to {transform:scale(1.8);opacity:0}
          }`
        case 26: return `.loader-element--26 {
            width:80px;
            height:80px;
            position:relative;
          }
          .loader-element--26:before,
          .loader-element--26:after {
            content:"";
            position:absolute;
            inset:0;
            background:#ffb940;    
            box-shadow: 0 0 0 50px;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          }
          
          .loader-element--26:after {
            animation:le26 1s infinite;
            transform:perspective(300px) translateZ(0px)
          }
          
          @keyframes le26 {
            to {transform:perspective(300px) translateZ(150px);opacity:0}
          }`
        case 27: return `.loader-element--27 {
            width:40px;
            height:40px;
            position:relative;
            transform:rotate(45deg);
          }
          .loader-element--27:before,
          .loader-element--27:after {
            content:"";
            position:absolute;
            inset:0;
            border-radius: 50% 50% 0 50%;
            background:#514b82;
            -webkit-mask:radial-gradient(circle 10px at 50% 50%,#0000 94%,#000);
          }
          
          .loader-element--27:after {
            animation:le27 1s infinite;
            transform: perspective(300px) translateZ(0px)
          }
          
          @keyframes le27 {
            to {transform:perspective(300px) translateZ(150px);opacity:0}
          }`
        case 28: return `.loader-element--28 {
            width: 2.5em;
            aspect-ratio: 1;
            border-radius: 50%;
            padding: 6px;
            background:
              conic-gradient(from 135deg at top,currentColor 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
              radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) top right/50%  50% content-box content-box,
              radial-gradient(farthest-side at top        ,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) bottom   /100% 50% content-box content-box;
            background-repeat: no-repeat;
            animation: le28 1s infinite linear;
          }
          
          @keyframes le28{ 
            100%{transform: rotate(1turn)}
          }`
        case 29: return `.loader-element--29 {
            width: 3em;
            aspect-ratio: 1;
            border-radius: 50%;
            background: 
              radial-gradient(farthest-side,#ffa516 94%,#0000) top/8px 8px no-repeat,
              conic-gradient(#0000 30%,#ffa516);
            -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
            animation: le29 1s infinite linear;
          }
          
          @keyframes le29{ 
            100%{transform: rotate(1turn)}
          }`
        case 30: return `.loader-element--30 {
            width: 3em;
            aspect-ratio: 1;
            display: grid;
            border: 4px solid #0000;
            border-radius: 50%;
            border-color: #ccc #0000;
            animation: le30 1s infinite linear;
          }
          .loader-element--30::before,
          .loader-element--30::after {    
            content: "";
            grid-area: 1/1;
            margin: 2px;
            border: inherit;
            border-radius: 50%;
          }
          .loader-element--30::before {
            border-color: #f03355 #0000;
            animation: inherit; 
            animation-duration: .5s;
            animation-direction: reverse;
          }
          .loader-element--30::after {
            margin: 8px;
          }
          
          @keyframes le30 { 
            100%{transform: rotate(1turn)}
          }`
        case 31: return `.loader-element--31 {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            animation: le31 2s infinite;
        }
        @keyframes le31 {
          0%   {background: conic-gradient(#f03355 0     ,#0000 0)}
          12.5%{background: conic-gradient(#f03355 45deg ,#0000 46deg)}
          25%  {background: conic-gradient(#f03355 90deg ,#0000 91deg)}
          37.5%{background: conic-gradient(#f03355 135deg,#0000 136deg)}
          50%  {background: conic-gradient(#f03355 180deg,#0000 181deg)}
          62.5%{background: conic-gradient(#f03355 225deg,#0000 226deg)}
          75%  {background: conic-gradient(#f03355 270deg,#0000 271deg)}
          87.5%{background: conic-gradient(#f03355 315deg,#0000 316deg)}
          100% {background: conic-gradient(#f03355 360deg,#0000 360deg)}
        }`
        case 32: return `.loader-element--32 {
            width: 60px;
            height: 50px;
            -webkit-mask: 
              linear-gradient(90deg,#000 70%,#0000 0) calc(0*100%/4) 100%/calc(100%/5) calc(1*100%/5),
              linear-gradient(90deg,#000 70%,#0000 0) calc(1*100%/4) 100%/calc(100%/5) calc(2*100%/5),
              linear-gradient(90deg,#000 70%,#0000 0) calc(2*100%/4) 100%/calc(100%/5) calc(3*100%/5),
              linear-gradient(90deg,#000 70%,#0000 0) calc(3*100%/4) 100%/calc(100%/5) calc(4*100%/5),
              linear-gradient(90deg,#000 70%,#0000 0) calc(4*100%/4) 100%/calc(100%/5) calc(5*100%/5);
            -webkit-mask-repeat:no-repeat;
            background: linear-gradient(#514b82 0 0) left/0% 100% no-repeat #ddd;
            animation: le32 2s infinite steps(6);
        }
        @keyframes le32 {
          100% {background-size: 120% 100%}
        }`
        case 33: return `.loader-element--33 {
            width: 8em;
            height: 20px;
            -webkit-mask: radial-gradient(circle closest-side,#000 94%,#0000) left/20% 100%;
            background: linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd;
            animation: le33 2s infinite steps(6);
        }
        @keyframes le33 {
            100% {background-size:120% 100%}
        }`
        case 34: return `.loader-element--34 {
            width: 3em;
            height: 3em;
            border:15px solid #ddd;
            border-radius: 50%;
            position: relative;
            transform:rotate(45deg);
          }
          .loader-element--34::before {
            content: "";
            position: absolute;
            inset:-15px;
            border-radius: 50%;
            border:15px solid #514b82;
            animation: le34 2s infinite linear;
          }
          
          @keyframes le34 {
              0%   {clip-path:polygon(50% 50%,0 0,0    0,0    0   ,0    0   ,0    0   )}
              25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0   ,100% 0   ,100% 0   )}
              50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
              75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    100%)}
              100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0    100%,0    0   )}
          }`
        case 35: return `.loader-element--35 {
            width: 60px;
            height: 60px;
            background: linear-gradient(#dc1818 0 0) bottom/100% 0% no-repeat #ccc;
            -webkit-mask: 
              radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left, 
              radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right, 
              linear-gradient(to bottom left, #000 42%,#0000 43%) bottom left , 
              linear-gradient(to bottom right,#000 42%,#0000 43%) bottom right;
            -webkit-mask-size: 50% 50%;
            -webkit-mask-repeat: no-repeat;
            animation: le35 2s infinite linear;
          }
          
          @keyframes le35 {
              90%,100% {background-size:100% 100%}
          }`
        case 36: return `.loader-element--36 {
            --s: 2.3em;
            height: calc(var(--s)*0.9);
            width: calc(var(--s)*5);
           --v1:transparent,#000 0.5deg 108deg,#0000 109deg;
           --v2:transparent,#000 0.5deg  36deg,#0000  37deg;
           -webkit-mask:
             conic-gradient(from 54deg  at calc(var(--s)*0.68) calc(var(--s)*0.57),var(--v1)),
             conic-gradient(from 90deg  at calc(var(--s)*0.02) calc(var(--s)*0.35),var(--v2)),
             conic-gradient(from 126deg at calc(var(--s)*0.5)  calc(var(--s)*0.7) ,var(--v1)),
             conic-gradient(from 162deg at calc(var(--s)*0.5)  0                  ,var(--v2));
           -webkit-mask-size: var(--s) var(--s);
           -webkit-mask-composite: xor,destination-over;
           mask-composite: exclude,add;
           -webkit-mask-repeat:repeat-x;
           background:linear-gradient(#ffb940 0 0) left/0% 100% #ddd no-repeat;
           animation: le36 2s infinite linear;
         }
         @keyframes le36 {
             90%,100% {background-size:100% 100%}
         }`
        case 37: return `.loader-element--37 {
            width: 45px;
            aspect-ratio: 1;
            --c:no-repeat linear-gradient(#000 0 0);
            background: var(--c), var(--c), var(--c);
            animation: 
              le37-1 1s infinite,
              le37-2 1s infinite;
          }
          
          @keyframes le37-1 {
           0%,100% {background-size:20% 100%}
           33%,66% {background-size:20% 40%}
          }
          
          @keyframes le37-2 {
           0%,33%   {background-position: 0    0,50% 100%,100% 100%}
           66%,100% {background-position: 100% 0,0   100%,50%  100%}
          }`
        case 38: return `.loader-element--38 {
            width: 4em;
            aspect-ratio: 1;
            display: grid;
            border-radius: 50%;
            background:
              linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(0 0 0/100%) 0) 50%/8% 100%,
              linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(0 0 0/75% ) 0) 50%/100% 8%;
            background-repeat: no-repeat;
            animation: le38 1s infinite steps(12);
          }
          .loader-element--38::before,
          .loader-element--38::after {
             content: "";
             grid-area: 1/1;
             border-radius: 50%;
             background: inherit;
             opacity: 0.915;
             transform: rotate(30deg);
          }
          .loader-element--38::after {
             opacity: 0.83;
             transform: rotate(60deg);
          }
          
          @keyframes le38 {
            100% {transform: rotate(1turn)}
          }`
        case 39: return `.loader-element--39 {
            width: 60px;
            height: 60px;
            border:4px solid;
            border-radius: 50%;
            display: flex;
            background: 
              radial-gradient(circle 5px, currentColor 95%,#0000),
              linear-gradient(currentColor 50%,#0000 0) center/4px 60% no-repeat;
            animation: le39 2s infinite linear;
          }
          .loader-element--39:before {
            content: "";
            flex:1;
            background:linear-gradient(currentColor 50%,#0000 0) center/4px 80% no-repeat;
            animation: inherit;
          }
          
          @keyframes le39 {
            100% {transform: rotate(1turn)}
          }`
        case 40: return `.loader-element--40 {
            --c1:#673b14;
            --c2:#f8b13b;
            width:40px;
            height:80px;
            border-top:4px solid var(--c1);
            border-bottom:4px solid var(--c1);
            background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px,var(--c1) 0) center/7px 8px no-repeat;
            display: grid;
            overflow: hidden;
            animation:le40-0 2s infinite linear;
          }
          .loader-element--40::before,
          .loader-element--40::after {
            content: "";
            grid-area: 1/1;
            width: 75%;
            height: calc(50% - 4px);
            margin: 0 auto;
            border: 2px solid var(--c1);
            border-top: 0;
            border-radius: 0 0 40% 40%;
            -webkit-mask: 
              linear-gradient(#000 0 0) bottom/4px 2px no-repeat,
              linear-gradient(#000 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite:exclude;
            background: 
              linear-gradient(var(--d,0deg),var(--c2) 50%,#0000 0) bottom /100% 205%,
              linear-gradient(var(--c2) 0 0) center/0 100%;
            background-repeat: no-repeat;
            animation:inherit;
            animation-name: le40-1;
          }
          
          .loader-element--40::after {
            transform-origin: 50% calc(100% + 2px);
            transform: scaleY(-1);
            --s:3px;
            --d:180deg;
          }
          
          @keyframes le40-0 {
            80%  {transform: rotate(0)}
            100% {transform: rotate(0.5turn)}
          }
          
          @keyframes le40-1 {
            10%,70%  {background-size:100% 205%,var(--s,0) 100%}
            70%,100% {background-position: top,center}
          }`
        case 41: return `.loader-element--41 {
            width: 8vmax;
            height: 8vmax;
            border-right: 4px solid #2f23dc;
            border-radius: 100%;
            animation: spinRight 800ms linear infinite;
          }
    
          .loader-element--41::before, .loader-element--41::after {
            content: '';
            width: 6vmax;
            height: 6vmax;
            display: block;
            position: absolute;
            top: calc(50% - 3vmax);
            left: calc(50% - 3vmax);
            border-left: 3px solid #2f23dc;
            border-radius: 100%;
            animation: spinLeft 800ms linear infinite;
          }
    
          .loader-element--41::after {
            width: 4vmax;
              height: 4vmax;
              top: calc(50% - 2vmax);
              left: calc(50% - 2vmax);
              border: 0;
              border-right: 2px solid #2f23dc;
              animation: none;
          }
          
          @keyframes spinLeft {
            from {transform:rotate(0deg);}
            to {transform:rotate(720deg);}
          }
          
          @keyframes spinRight {
            from {transform:rotate(360deg);}
            to {transform:rotate(0deg);}
          }`
        case 42: return `.loader-element--42  {
            animation: le42 1s infinite;  
            height: 50px;
            width: 50px;
          }
          
          .loader-element--42:before,
          .loader-element--42:after {   
            border-radius: 50%;
            content: '';
            display: block;
            height: 20px;  
            width: 20px;
          }
          .loader-element--42:before {
            animation: ball1 1s infinite;  
            background-color: #cb2025;
            box-shadow: 30px 0 0 #f8b334;
            margin-bottom: 10px;
          }
          .loader-element--42:after {
            animation: ball2 1s infinite; 
            background-color: #00a096;
            box-shadow: 30px 0 0 #97bf0d;
          }
          
          @keyframes le42 {
            0% { 
              -webkit-transform: rotate(0deg) scale(0.8); 
              -moz-transform: rotate(0deg) scale(0.8);
            }
            50% { 
              -webkit-transform: rotate(360deg) scale(1.2); 
              -moz-transform: rotate(360deg) scale(1.2);
            }
            100% { 
              -webkit-transform: rotate(720deg) scale(0.8); 
              -moz-transform: rotate(720deg) scale(0.8);
            }
          }
          
          @keyframes ball1 {
            0% {
              box-shadow: 30px 0 0 #f8b334;
            }
            50% {
              box-shadow: 0 0 0 #f8b334;
              margin-bottom: 0;
              -webkit-transform: translate(15px,15px);
              -moz-transform: translate(15px, 15px);
            }
            100% {
              box-shadow: 30px 0 0 #f8b334;
              margin-bottom: 10px;
            }
          }
          
          @keyframes ball2 {
            0% {
              box-shadow: 30px 0 0 #97bf0d;
            }
            50% {
              box-shadow: 0 0 0 #97bf0d;
              margin-top: -20px;
              -webkit-transform: translate(15px,15px);
              -moz-transform: translate(15px, 15px);
            }
            100% {
              box-shadow: 30px 0 0 #97bf0d;
              margin-top: 0;
            }
          }`
        case 43: return `.loader-element--43 {
            width: max-content;
            text-align: center;
        }
        
        .loader-element--43 p {
            display: inline-block;
            text-transform: uppercase;
            text-align: center;
            font-size: 2em;
            font-family: arial;
            font-weight: 600;
            transform: scale(.5);
            color: #121212;
            -webkit-text-stroke: 2px gray;
        }
        
        .loader-element--43 p:nth-child(1) {
            animation: le43-hover 1s linear infinite;
        }
        
        .loader-element--43 p:nth-child(2) {
            animation: le43-hover 1s linear infinite .125s;
        }
        
        .loader-element--43 p:nth-child(3) {
            animation: le43-hover 1s linear infinite .25s;
        }
        
        .loader-element--43 p:nth-child(4) {
            animation: le43-hover 1s linear infinite .375s;
        }
        
        .loader-element--43 p:nth-child(5) {
            animation: le43-hover 1s linear infinite .5s;
        }
        
        .loader-element--43 p:nth-child(6) {
            animation: le43-hover 1s linear infinite .675s;
        }
        
        .loader-element--43 p:nth-child(7) {
            animation: le43-hover 1s linear infinite .75s;
        }
        
        @keyframes le43-hover {
            0% {
            transform: scale(.5);
            color: #121212;
            -webkit-text-stroke: 2px gray;
            }
        
            20% {
            transform: scale(1);
            color: pink;
            -webkit-text-stroke: 3px red;
            filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
            }
        
            50% {
            transform: scale(.5);
            color: #121212;
            -webkit-text-stroke: 2px gray;
            }
        
        
        }`
        case 44: return `.loader-element--44 svg {
            -webkit-transform: rotate(45deg) scale(1);
            transform: rotate(45deg) scale(1);
          }
          
          .loader-element--44 .stroke-still {
            stroke: #232323;
          }
          
          .loader-element--44 .stroke-animation {
            -webkit-animation: stroke-spacing 1.2s ease-in, stroke-color 4.8s linear;
                    animation: stroke-spacing 1.2s ease-in, stroke-color 4.8s linear;
            -webkit-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
            -webkit-animation-delay: 0;
                    animation-delay: 0;
            -webkit-animation-direction: normal;
                    animation-direction: normal;
            -webkit-animation-fill-mode: forwards;
                    animation-fill-mode: forwards;
            -webkit-animation-play-state: running;
                    animation-play-state: running;
            -webkit-transform-origin: center center;
                    transform-origin: center center;
          }
          
          @-webkit-keyframes stroke-spacing {
            0% {
              stroke-dasharray: 0 200;
            }
            45% {
              stroke-dashoffset: 0;
              stroke-dasharray: 200 200;
            }
            90% {
              stroke-dashoffset: -200;
              stroke-dasharray: 200 200;
            }
            100% {
              stroke-dashoffset: -200;
              stroke-dasharray: 200 200;
            }
          }
          
          @keyframes stroke-spacing {
            0% {
              stroke-dasharray: 0 200;
            }
            45% {
              stroke-dashoffset: 0;
              stroke-dasharray: 200 200;
            }
            90% {
              stroke-dashoffset: -200;
              stroke-dasharray: 200 200;
            }
            100% {
              stroke-dashoffset: -200;
              stroke-dasharray: 200 200;
            }
          }
          
          @-webkit-keyframes stroke-color {
            0%  { stroke: #3498DB; }
            24% { stroke: #643232; }
            25% { stroke: #327864; }
            49% { stroke: #327864; }
            50% { stroke: #32326e; }
            74% { stroke: #32326e; }
            75% { stroke: #78325a; }
            99% { stroke: #78325a; }
          }
          
          @keyframes stroke-color {
            0%  { stroke: #3498DB; }
            24% { stroke: #643232; }
            25% { stroke: #327864; }
            49% { stroke: #327864; }
            50% { stroke: #32326e; }
            74% { stroke: #32326e; }
            75% { stroke: #78325a; }
            99% { stroke: #78325a; }
          }`
        case 45: return ``
        case 46: return ``
        case 47: return ``
        case 48: return ``
        case 49: return ``
        case 50: return ``
        default: return ``
    }
}