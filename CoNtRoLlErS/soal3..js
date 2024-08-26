// Desimal ke Biner, Oktal, Hexadecimal
function konversiDesimal(desimal) {
    return {
        biner: desimal.toString(2),
        oktal: desimal.toString(8),
        hexadecimal: desimal.toString(16).toUpperCase()
    };
}

// Biner ke Desimal, Oktal, Hexadecimal
function konversiBiner(biner) {
    let desimal = parseInt(biner, 2);
    return {
        desimal: desimal,
        oktal: desimal.toString(8),
        hexadecimal: desimal.toString(16).toUpperCase()
    };
}

// Oktal ke Desimal, Biner, Hexadecimal
function konversiOktal(oktal) {
    let desimal = parseInt(oktal, 8);
    return {
        desimal: desimal,
        biner: desimal.toString(2),
        hexadecimal: desimal.toString(16).toUpperCase()
    };
}

// Hexadecimal ke Desimal, Biner, Oktal
function konversiHexadecimal(hexadecimal) {
    let desimal = parseInt(hexadecimal, 16);
    return {
        desimal: desimal,
        biner: desimal.toString(2),
        oktal: desimal.toString(8)
    };
}
