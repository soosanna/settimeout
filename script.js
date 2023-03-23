var div=document.createElement("div");
div.setAttribute("id","main");
div.style.color="red";
div.style.fontSize="50px"
div.style.textAlign="center";
div.style.margin="100px";

document.body.append(div);

setTimeout(()=>{
    document.getElementById("main").innerHTML=10;
    setTimeout(()=>{
        document.getElementById("main").innerHTML=9;
        setTimeout(()=>{
            document.getElementById("main").innerHTML=8;
            setTimeout(()=>{
            document.getElementById("main").innerHTML=7;
            setTimeout(()=>{
                document.getElementById("main").innerHTML=6;
                setTimeout(()=>{
                    document.getElementById("main").innerHTML=5;
                    setTimeout(()=>{
                        document.getElementById("main").innerHTML=4;
                        setTimeout(()=>{
                            document.getElementById("main").innerHTML=3;
                            setTimeout(()=>{
                                document.getElementById("main").innerHTML=2;
                                setTimeout(()=>{
                                    document.getElementById("main").innerHTML=1;
                                    setTimeout(()=>{
                                        document.getElementById("main").innerHTML=0;
                                        setTimeout(()=>{
                                            document.getElementById("main").innerHTML="Happy birthday";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
        },1000)
    },1000)
},1000);
