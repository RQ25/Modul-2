function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi ** 2);
    let kategori;

    if (bmi < 18.5) {
        kategori = 'Underweight';
    } else if (bmi < 24.9) {
        kategori = 'Normal weight';
    } else if (bmi < 29.9) {
        kategori = 'Overweight';
    } else {
        kategori = 'Obese';
    }

    return { bmi, kategori };
}