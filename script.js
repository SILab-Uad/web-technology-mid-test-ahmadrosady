const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let dictionary = "";
    let password = "";

    if (options.includeUppercase) {
        dictionary += uppercase;
        password += uppercase[Math.floor(Math.random() * uppercase.length)]; // Pastikan setidaknya satu huruf besar
    }
    if (options.includeLowercase) {
        dictionary += lowercase;
        password += lowercase[Math.floor(Math.random() * lowercase.length)]; // Pastikan setidaknya satu huruf kecil
    }
    if (options.includeNumbers) {
        dictionary += numbers;
        password += numbers[Math.floor(Math.random() * numbers.length)]; // Pastikan setidaknya satu angka
    }
    if (options.includeSpecialChars) {
        dictionary += specialChars;
        password += specialChars[Math.floor(Math.random() * specialChars.length)]; // Pastikan setidaknya satu karakter khusus
    }

    if (dictionary === "") {
        throw new Error("At least one character type must be selected.");
    }        

    // Mengisi sisa panjang password dengan karakter acak dari kamus
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        password += dictionary[randomIndex];
    }

    // Mengacak password untuk menghindari urutan yang dapat diprediksi
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
};

// Ekspor fungsi untuk digunakan dalam pengujian
module.exports = {
    generatePassword,
    // Ekspor fungsi lain jika diperlukan
};