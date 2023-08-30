
const addEl=document.querySelector("#add");
const btnSortEl=document.querySelector("#sort");
const btnReverseEl=document.querySelector("#reverse");
const btnRemoveLastEl=document.querySelector("#removeLast");
const btnRemoveFirstEl=document.querySelector("#removeFirst");
const btnRemoveAllEl=document.querySelector("#removeAll");
const btnMixEl=document.querySelector("#mix");
const arrListEl=document.querySelector("#arrList");
var cityListEl=document.getElementById("cityList");
const inputEl=document.querySelector("#text");


const sehirler=[];


addEl.addEventListener("click", () => {
   sehirler.push(inputEl.value);
    inputEl.value="";
arr(sehirler);
  }); 

  const arr= (sehirler) => {
  
    cityListEl.innerHTML="";
   for(var i=0; i<sehirler.length; i++){
   //cityListEl.innerHTML = "<li>"+ sehirler[i] +"</li>";
   var liElemt=document.createElement("li");
   liElemt.textContent=sehirler[i];
   cityListEl.appendChild(liElemt);
}
  };


    
    btnSortEl.addEventListener("click", () => {
    sehirler.sort();
    arr(sehirler);
    }); 

    btnReverseEl.addEventListener("click", () =>{
    sehirler.reverse();
    arr(sehirler);
    });

    btnRemoveLastEl.addEventListener("click", () =>{
       sehirler.pop();
       arr(sehirler);

    });

btnRemoveFirstEl.addEventListener("click", () =>{
sehirler.shift();
arr(sehirler);
});

btnRemoveAllEl.addEventListener("click", () =>{
sehirler.splice(0,sehirler.length);
arr(sehirler);
});

btnMixEl.addEventListener("click", () => {
   for (var i = sehirler.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = sehirler[i];
      sehirler[i] = sehirler[j];
      sehirler[j] = temp;
  }
  arr(sehirler);
});



