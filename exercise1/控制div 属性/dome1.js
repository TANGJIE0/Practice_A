/*
* @Author: Administrator
* @Date:   2017-11-04 18:10:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-04 21:36:25
*/
console.log("success");
var btn1 = document.getElementById("btn") ;
var btn = btn1.getElementsByTagName('button');
var Tdiv = document.getElementById("div1")
//改变宽度
function btn_0(){
    var i=1;
    var j=6;
    btn[0].onclick=function(){
        console.log("success");
        var width = Tdiv.getAttribute("width");
        if(i<=6){
            i++;
            Tdiv.style.width=i*50+"px";
        }else{
            j--;
            Tdiv.style.width=j*50+"px";
            if(j==1){
                i=1;
                j=6;
            }

        }

    }  
}
btn_0();
//改变高度
function btn_1(){
    var i=1;
    var j=6;
    btn[1].onclick=function(){
        console.log("success")
        var height = Tdiv.getAttribute("height");
        if(i<=6){
            i++;
            Tdiv.style.height=i*50+"px";
        }else{
            j--;
            Tdiv.style.height=j*50+"px";
            if(j==1){
                i=1;
                j=6;
            }
        }
    }
}
var color=[
   "red",
   "yellow",
   "black",
   "gold",
   "peach",
   "blue"
]
console.log(color[0])
btn_1();
//改变颜色
function btn_2(){
    var i=0;
    var j=5;
    btn[2].onclick=function(){
        console.log("success")
        if(i<=5){
            Tdiv.style.backgroundColor=color[i];
            i++;
       }else{
            i=0;
            Tdiv.style.backgroundColor=color[i];
            i++;
       }


    }
}
btn_2();

//前三个部分
//后两个部分


//隐藏
    console.log("success")
    Tdiv.style.display="none";

}
//重置
btn[4].onclick=function(){
    console.log("success")
    var width = Tdiv.getAttribute("width");
    var height = Tdiv.getAttribute("height");
    Tdiv.style.width=width;
    Tdiv.style.height=height;
    Tdiv.style.display="block";
    Tdiv.style.backgroundColor="white";
    
}
