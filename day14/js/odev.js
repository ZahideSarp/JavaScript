
const addEl=document.querySelector("#add");
const btnSortEl=document.querySelector("#sort");
const btnReverseEl=document.querySelector("#reverse");
const btnRemoveLastEl=document.querySelector("#removeLast");
const btnRemoveFirstEl=document.querySelector("#removeFirst");
const btnRemoveAlEl=document.querySelector("#removeAll");
const btnMixEl=document.querySelector("#mix");
const arrListEl=document.querySelector("#arrList");

 var sehirler=[];
addEl.addEventListener("click", () => {
   const textEl=document.querySelector("#text").value;
  
    sehirler.push(textEl) ;
    arrListEl.innerText=`${sehirler}`
    textEl.innerText="";

});

    
    btnSortEl.addEventListener("click", () => {
        sehirler.sort;
    });




