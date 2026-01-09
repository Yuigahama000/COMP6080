"use strict"
let result = prompt("片想いしている女の子", "");
if(result==null) {
    alert("Yeeee! U are free to relationship!!!")
} else {
    alert(`これは、永遠に届かない恋だ.....${result} and you are impossible.`)
    let keepGoing = confirm("それでも、彼女を想い続けるのか...");
    if(keepGoing) {
        alert("Stop wasting time on her, there are many other things need you to achieve.");
    } else {
        alert("希望你真的能做到，如果是这样的话，你一定能在短暂的痛苦之后过得更好")
    }
}

