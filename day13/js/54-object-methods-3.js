const car = {
  brand: "Audi",
  model: "A4",
  color: "red",
  year: 2019,
  doors: 4,
  seats: 5,
  engine: "2.0 TDI",
  fuel: "diesel",
  transmission: "Automatic",
  nameWithBrandAndModel: function () {
    return `${this.brand} ${this.model}`;
  },
  price: 20000,
};

console.log(car.nameWithBrandAndModel());

console.log(Object.entries(car));
// [["brand", "Audi"], ["model", "A4"], ["color", "red"], ["year", 2019], ["doors", 4], ["seats", 5], ["engine", "2.0 TDI"], ["fuel", "diesel"], ["transmission", "Automatic"], ["nameWithBrandAndModel", ƒ], ["price", 20000]]

console.log(Object.keys(car));
// ["brand", "model", "color", "year", "doors", "seats", "engine", "fuel", "transmission", "nameWithBrandAndModel", "price"];

console.log(car.length);

const car2 = "Audi A4";

if (car2) {
  console.log("car2 is true");
}

const car3 = {};

if (car3) {
  console.log("car3 is true");
}

if (Object.keys(car).length) {
  console.log("car is true");
}

console.log(Object.keys(car3).length);

if (Object.keys(car3).length) {
  console.log("car3 is true");
}

console.log(Object.values(car));
// ["Audi", "A4", "red", 2019, 4, 5, "2.0 TDI", "diesel", "Automatic", ƒ, 20000]



/*
JavaScript, non-primitif (veya referans) veri tipleri:
1-Object (Nesne)
2-Array (Dizi)
3-Function (Fonksiyon)
4-Date (Tarih)
5-RegExp (Düzenli İfade)
6-Map
7-Set
8-Promise
9-Symbol
10-WeakMap ve WeakSet

JavaScript'te, primitif veri tipleri:
1-String
2-Number
3-Boolean
4-Undefined
5-Null
6-Symbol
7-BigInt

JavaScript'te, veri tipleri iki ana kategoride gruplanabilir: primitif ve non-primitif (referans) veri tipleri. 
İşte bu iki kategori arasındaki temel farklar:

Değer Taşıma (Value vs. Reference):

Primitif Veri Tipleri: Primitif veri tipleri, değerleri doğrudan saklar ve değişkenlere atanırken bu değerler kopyalanır. 
Bu nedenle, primitif bir değişkenin değeri değiştirilse bile, diğer değişkenler etkilenmez.
Non-Primitif Veri Tipleri: Non-primitif veri tipleri ise değerlerin referansını (bellek adresini) saklar.
 Bu nedenle, non-primitif bir değişken diğer bir değişkene atandığında, aslında bellekte aynı veriye işaret edilir. 
 Bu yüzden bir değişkenin değeri değiştirildiğinde, diğer referanslayan tüm değişkenler de etkilenir.
Bellek Kullanımı:

Primitif Veri Tipleri: Primitif veri tipleri, değerleri küçük boyutlarda olduğu için daha az bellek tüketir.
Non-Primitif Veri Tipleri: Non-primitif veri tipleri daha büyük boyutlu verileri sakladığı için, daha fazla bellek tüketir.
İlk Değerler:

Primitif Veri Tipleri: Primitif veri tipleri, bir değişkenin değeri atanmadığında otomatik olarak belirli bir başlangıç değeri alır. 
Örneğin, undefined veya null.
Non-Primitif Veri Tipleri: Non-primitif veri tipleri ise bir değişken atanmadığında genellikle null değerini alır.
Kopyalama ve Karşılaştırma:

Primitif Veri Tipleri: Primitif veri tipleri, değerlerin kopyalanması ve karşılaştırılması basittir. Değerler doğrudan karşılaştırılabilir.
Non-Primitif Veri Tipleri: Non-primitif veri tipleri ise referanslar olduğundan, iki değişkenin aynı veriyi gösterip göstermediğini kontrol 
etmek için ekstra çaba gerekebilir. Doğrudan karşılaştırma yerine, içeriklerinin eşitliğini kontrol etmek gerekebilir.
Primitif veri tipleri daha basit ve hafifken, non-primitif veri tipleri daha karmaşıktır ve genellikle daha büyük boyutlu verileri temsil eder.
 Her iki türün de kendine özgü kullanım alanları ve avantajları vardır, bu nedenle uygun türü seçmek, kullanım senaryonuza bağlıdır.
*/
