!function(){function t(t,e){function o(){F=document.createElementNS(I,"svg"),F.addEventListener("mousemove",y),t.appendChild(F),x.bgDraw&&(z=document.createElementNS(I,"rect"),z.setAttribute("x",0),z.setAttribute("y",0),z.setAttribute("fill",x.bgColor),F.appendChild(z)),s(),i(),h(),window.addEventListener("resize",b)}function i(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=e,r=o;x.width.toString().indexOf("%")>0||x.height.toString().indexOf("%")>0?(i=Math.round(t.offsetWidth/100*parseInt(x.width)),r=Math.round(i/100*parseInt(x.height))):(i=parseInt(x.width),r=parseInt(x.height)),i>=e&&(i=e),r>=o&&(r=o),P={x:i/2,y:r/2},E.x=x.speed/P.x,E.y=x.speed/P.y,C=i>=r?r/100*parseInt(x.radius):i/100*parseInt(x.radius),1>C&&(C=1),S=C/2,S<x.radiusMin&&(S=x.radiusMin,C=2*S),F.setAttribute("width",i),F.setAttribute("height",r),x.bgDraw&&(z.setAttribute("width",i),z.setAttribute("height",r)),n(S)}function n(t){for(var e=0,o=D.length;o>e;e++)r(D[e],t)}function r(t,e){var o=t.vectorPosition.x-O.x,i=t.vectorPosition.y-O.y,n=t.vectorPosition.z-O.z,r=Math.sqrt(o*o+i*i+n*n);t.vectorPosition.x/=r,t.vectorPosition.y/=r,t.vectorPosition.z/=r,t.vectorPosition.x*=e,t.vectorPosition.y*=e,t.vectorPosition.z*=e}function l(t,e,o,i,n){var r={};return void 0!==e.label?(r.element=document.createElementNS(I,"text"),r.element.setAttribute("x",0),r.element.setAttribute("y",0),r.element.setAttribute("fill",null==e.fontColor?x.fontColor:e.fontColor),r.element.setAttribute("font-family",null==e.fontFamily?x.fontFamily:e.fontFamily),r.element.setAttribute("font-size",null==e.fontSize?x.fontSize:e.fontSize),r.element.setAttribute("font-weight",null==e.fontWeight?x.fontWeight:e.fontWeight),r.element.setAttribute("font-style",null==e.fontStyle?x.fontStyle:e.fontStyle),r.element.setAttribute("font-stretch",null==e.fontStretch?x.fontStretch:e.fontStretch),r.element.setAttribute("text-anchor","middle"),r.element.textContent=x.fontToUpperCase?e.label.toUpperCase():e.label):void 0!==e.image&&(r.element=document.createElementNS(I,"image"),r.element.setAttribute("x",0),r.element.setAttribute("y",0),r.element.setAttribute("width",e.width),r.element.setAttribute("height",e.height),r.element.setAttribute("id","image_"+t),r.element.setAttributeNS("http://www.w3.org/1999/xlink","href",e.image),r.diffX=e.width/2,r.diffY=e.height/2),r.link=document.createElementNS(I,"a"),r.link.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e.url),r.link.setAttribute("target",e.target),r.link.addEventListener("mouseover",m,!0),r.link.addEventListener("mouseout",v,!0),r.link.appendChild(r.element),void 0!==e.tooltip?(r.tooltip=!0,r.tooltipLabel=x.tooltipFontToUpperCase?e.tooltip.toUpperCase():e.tooltip):r.tooltip=!1,r.index=t,r.mouseOver=!1,r.vectorPosition={x:o,y:i,z:n},r.vector2D={x:0,y:0},F.appendChild(r.link),r}function s(){for(var t=!1,e=1,o=x.entries.length+1;o>e;e++){var i=Math.acos(2*e/o-1),n=Math.sqrt(o*Math.PI)*i,r=Math.cos(n)*Math.sin(i),s=Math.sin(n)*Math.sin(i),u=Math.cos(i),c=l(e-1,x.entries[e-1],r,s,u);D.push(c),void 0!==x.entries[e-1].tooltip&&(t=!0)}t&&a()}function a(){w=document.createElementNS(I,"text"),w.setAttribute("x",0),w.setAttribute("y",0),w.setAttribute("fill",x.tooltipFontColor),w.setAttribute("font-family",x.tooltipFontFamily),w.setAttribute("font-size",x.tooltipFontSize),w.setAttribute("font-weight",x.tooltipFontWeight),w.setAttribute("font-style",x.tooltipFontStyle),w.setAttribute("font-stretch",x.tooltipFontStretch),w.setAttribute("text-anchor",x.tooltipTextAnchor),w.textContent="",F.appendChild(w)}function u(t){for(var e=0,o=D.length;o>e;e++){var i=D[e];if(i.element.getAttribute("x")===t.getAttribute("x")&&i.element.getAttribute("y")===t.getAttribute("y"))return i}}function c(t){for(var e=0,o=D.length;o>e;e++){var i=D[e];i.index===t.index?i.mouseOver=!0:i.mouseOver=!1}}function f(t){t.tooltip&&(w.setAttribute("x",t.vector2D.x-x.tooltipDiffX),w.setAttribute("y",t.vector2D.y-x.tooltipDiffY),w.textContent=x.tooltipFontToUpperCase?t.tooltipLabel.toUpperCase():t.tooltipLabel,w.setAttribute("opacity",1))}function d(t){w.setAttribute("opacity",0)}function p(){var t=E.x*T.x-x.speed,e=x.speed-E.y*T.y,o=t*W,i=e*W;k.sx=Math.sin(o),k.cx=Math.cos(o),k.sy=Math.sin(i),k.cy=Math.cos(i);for(var n=0,r=D.length;r>n;n++){var l=D[n];if(M){var s=l.vectorPosition.x,a=l.vectorPosition.y*k.sy+l.vectorPosition.z*k.cy;l.vectorPosition.x=s*k.cx+a*k.sx,l.vectorPosition.y=l.vectorPosition.y*k.cy+l.vectorPosition.z*-k.sy,l.vectorPosition.z=s*-k.sx+a*k.cx}var u,c=x.fov/(x.fov+l.vectorPosition.z);l.vector2D.x=l.vectorPosition.x*c+P.x,l.vector2D.y=l.vectorPosition.y*c+P.y,l.diffX&&l.diffY&&(l.vector2D.x-=l.diffX,l.vector2D.y-=l.diffY),l.element.setAttribute("x",l.vector2D.x),l.element.setAttribute("y",l.vector2D.y),M?(u=(S-l.vectorPosition.z)/C,u<x.opacityOut&&(u=x.opacityOut)):(u=parseFloat(l.element.getAttribute("opacity")),u+=l.mouseOver?(x.opacityOver-u)/x.opacitySpeed:(x.opacityOut-u)/x.opacitySpeed),l.element.setAttribute("opacity",u)}D=D.sort(function(t,e){return e.vectorPosition.z-t.vectorPosition.z})}function h(){requestAnimFrame(h),p()}function m(t){M=!1;var e=u(t.target);c(e),e.tooltip&&f(e)}function v(t){M=!0;var e=u(t.target);e.tooltip&&d(e)}function y(t){T=g(F,t)}function g(t,e){var o=t.getBoundingClientRect();return{x:e.clientX-o.left,y:e.clientY-o.top}}function b(t){i()}var x={entries:[],width:480,height:480,radius:"70%",radiusMin:75,bgDraw:!0,bgColor:"#000",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:2,fontFamily:"Arial, sans-serif",fontSize:"15",fontColor:"#fff",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!1,tooltipFontFamily:"Arial, sans-serif",tooltipFontSize:"15",tooltipFontColor:"#fff",tooltipFontWeight:"normal",tooltipFontStyle:"normal",tooltipFontStretch:"normal",tooltipFontToUpperCase:!1,tooltipTextAnchor:"left",tooltipDiffX:0,tooltipDiffY:10};if(void 0!==e)for(var A in e)e.hasOwnProperty(A)&&x.hasOwnProperty(A)&&(x[A]=e[A]);if(!x.entries.length)return!1;var w,S,C,P,F,z,D=[],M=!0,T={x:0,y:0},O={x:0,y:0,z:0},E={x:0,y:0},k={sx:0,cx:0,sy:0,cy:0},W=Math.PI/180,I="http://www.w3.org/2000/svg";window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},o()}window.SVG3DTagCloud=t}(),"undefined"!=typeof jQuery&&function(t){t.fn.svg3DTagCloud=function(e){var o=arguments;return this.each(function(){if(t.data(this,"plugin_SVG3DTagCloud")){var i=t.data(this,"plugin_SVG3DTagCloud");i[e]?i[e].apply(this,Array.prototype.slice.call(o,1)):t.error("Method "+e+" does not exist on jQuery.svg3DTagCloud")}else t.data(this,"plugin_SVG3DTagCloud",new SVG3DTagCloud(this,e))})}}(jQuery);