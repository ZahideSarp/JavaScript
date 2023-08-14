function showOnConsole(){
    console.log("Console'da goster!");
}


function sum(){
 const input1Value= document.querySelector("#sayi1").value;
 console.log(input1Value);
 
 const input2Value=document.querySelector("#sayi2").value;
 console.log(input2Value);

 const sum=Number(input1Value) + Number(input2Value);
 console.log(sum);
 
 const sonuc=document.querySelector("#sonuc");
console.log(sonuc);

 sonuc.textContent=`Sonuc: ${sum}`;
}