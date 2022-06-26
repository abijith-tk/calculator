function btnClick(val){
    var input=document.getElementById('scr').value+=val;
    document.getElementById('scr').innerHTML=input;
}
function clrscr() {
    document.getElementById('scr').value=""
}
function result(){
    var text=document.getElementById('scr').value
    var output=eval(text)
    document.getElementById('scr').innerHTML=output;
    console.log(output)
}