function btnClick(val){
    var input=document.getElementById('scr').value+=val;
    document.getElementById('scr').innerHTML=input;
}
function clrscr() {
    document.getElementById('scr').value=""
}
function result(val){
    var text=document.getElementById('scr').value
    var res=eval(text);
    document.getElementById('scr').value=res;
}
function backSpace() {
    var text=document.getElementById('scr').value;
    var input=text.slice(0,text.length-1);
    document.getElementById('scr').value=input;
}