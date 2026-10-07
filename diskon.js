const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan total belanja : ", function(angka) {
    let total_belanja = parseInt(angka);
    let diskon = 0;

    if (total_belanja >= 250000) {
        diskon = total_belanja * 0.1;
    } else if (total_belanja >= 100000) {
        diskon = total_belanja * 0.05;
    } else if (total_belanja >= 50000) {
        diskon = total_belanja * 0.03;
    } else {
        diskon = 0;
        console.log("Total belanja tidak memenuhi, anda tidak mendapatkan diskon");
    }

    let total_bayar = total_belanja - diskon;

    console.log("Total belanja   :", total_belanja);
    console.log("Potongan diskon :", diskon);
    console.log("Total bayar     :", total_bayar);

    rl.close();
});