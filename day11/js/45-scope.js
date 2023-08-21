let foo=function(){
    let x=5;
    console.log(`x degeri fonksiyon icerisinden erisilebilir: ${x}`);

}
foo();
//console.log(`x degeri fonksiyon icerisinden erisilemez: ${x}`);
let y=5;
const foo1=function(){
    y=10;
    console.log(`y degeri fonksiyon icerisinden erisilebilir: ${y}`);
}
foo1();
console.log(`y degeri fonksiyon disinda: ${y}`);