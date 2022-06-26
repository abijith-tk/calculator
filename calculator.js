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