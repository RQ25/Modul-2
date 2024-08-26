// EndPoint Kubus
function kubus(sisi) {
    let volume = sisi ** 3;
    let luasPermukaan = 6 * (sisi ** 2);
    return { volume, luasPermukaan };
}

// EndPoint Balok
function balok(panjang, lebar, tinggi) {
    let volume = panjang * lebar * tinggi;
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    return { volume, luasPermukaan };
}

// EndPoint Bola
function bola(jariJari) {
    let volume = (4/3) * Math.PI * (jariJari ** 3);
    let luasPermukaan = 4 * Math.PI * (jariJari ** 2);
    return { volume, luasPermukaan };
}

// EndPoint Tabung
function tabung(jariJari, tinggi) {
    let volume = Math.PI * (jariJari ** 2) * tinggi;
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);
    return { volume, luasPermukaan };
}