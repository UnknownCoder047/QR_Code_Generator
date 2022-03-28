let qrcode=document.querySelector("#button");
let qrimg=document.querySelector("#codeimg");

let loader=document.querySelector("#loading");


qrcode.addEventListener("click",()=>{

    loader.style.display="block";
    qrimg.onload=function(){
        loader.style.display="none";
    };
    let input=document.querySelector("#inputdata").value;
    let api=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
    qrimg.src=api;
})

