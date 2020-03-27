const visszajaroSzamolo = function(fizetendo, fizetett) {
    let visszajaro = fizetett - fizetendo;
    let penzek = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5];
    let visszaadandoPenzek = [];
    let ertek = 0;

    while(visszajaro > 0) {
        for (let index = 0; index < penzek.length; index++) {
            while (visszajaro / penzek[index] >= 1) {
                visszajaro = visszajaro - penzek[index];
                visszaadandoPenzek.push(penzek[index]);
            }
        }
    }

    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    return `A visszajárót legkevesebb ${visszaadandoPenzek.length} db pénzjegy és érme felhasználásával lehet visszaadni.
            Amelyek az alábbiak: ${visszaadandoPenzek}.
            A visszaadandó összeg: ${arrSum(visszaadandoPenzek)} Ft`
}


console.log(visszajaroSzamolo(5000,100000)) // 95000 a visszajáró ==> 20 000 + 20 000 + 20 000 + 20 000 + 10 000 + 5000
console.log(visszajaroSzamolo(4845,5000)) // 155 a visszajáró ==> 100 + 50 + 5
console.log(visszajaroSzamolo(9575,20000)) // 10 425 a visszajáró ==> 10 000 + 200 + 200 + 20 + 5