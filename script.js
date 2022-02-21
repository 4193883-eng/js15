let isRun = true
do{
let f = 0
let s = 0
f = parseInt(prompt("first"))
s = parseInt(prompt("second"))
alert(f+s)
if((f+s)>20){
    isRun = false
}
}while(isRun)