
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'images/splashscreen.jpg';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  NSB.addProperties(Image1);


  NSB.addProperties(Answer1);


  NSB.addProperties(Answer2);


  NSB.addProperties(Answer3);


  NSB.addProperties(Answer4);


  NSB.addProperties(Question);
  NSB.NavBar_jqm_init('NavBar1','About, Confirm');
  NSB.addProperties(NavBar1);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
function Main() {
  Image1.Left = 0;
  Image1.Top = 0;
  Image1.Width = 320;
  Image1.Height = 460;
}

Answer1.ontouchstart = function() { savethefunction_rvar="";
  ClearAll();
  Answer1.style.background = "white";
  Answer1.style.color = "black";
return savethefunction_rvar; }

Answer1.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer1.style.background = "white";
  Answer1.style.color = "black";
return savethefunction_rvar; }

Answer2.ontouchstart = function() { savethefunction_rvar="";
  ClearAll();
  Answer2.style.background = "white";
  Answer2.style.color = "black";
return savethefunction_rvar; }

Answer2.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer2.style.background = "white";
  Answer2.style.color = "black";
return savethefunction_rvar; }

Answer3.ontouchstart = function() { savethefunction_rvar="";
  ClearAll();
  Answer3.style.background = "white";
  Answer3.style.color = "black";
return savethefunction_rvar; }

Answer3.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer3.style.background = "white";
  Answer3.style.color = "black";
return savethefunction_rvar; }

Answer4.ontouchstart = function() { savethefunction_rvar="";
  ClearAll();
  Answer4.style.background = "white";
  Answer4.style.color = "black";
return savethefunction_rvar; }

Answer4.onclick = function() { savethefunction_rvar="";
  ClearAll();
  Answer4.style.background = "white";
  Answer4.style.color = "black";
return savethefunction_rvar; }

function ClearAll() { savethefunction_rvar="";
  Answer1.style.background = "transparent";
  Answer2.style.background = "transparent";
  Answer3.style.background = "transparent";
  Answer4.style.background = "transparent";

  Answer1.style.color = "white";
  Answer2.style.color = "white";
  Answer3.style.color = "white";
  Answer4.style.color = "white";

return savethefunction_rvar; }


window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


