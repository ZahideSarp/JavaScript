import { countries } from "../data/county";

const yuzOlcumu= countries.reduce((toplam, ulkeler) => {
    console.log(ulkeler.area);
console.log(toplam + area) ;
return toplam +area;
});

 yuzOlcumu(countries);