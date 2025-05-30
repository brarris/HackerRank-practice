'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  // Write your code here

  // Langkah 1: Inisialisasi variabel untuk menyimpan jumlah
  // Kita mulai dengan total 0 karena belum ada angka yang dijumlahkan.
  let sum = 0;

  // Langkah 2: Looping (perulangan) melalui setiap elemen dalam array 'ar'
  // Kita akan melihat setiap angka satu per satu.
  // 'i' adalah indeks yang dimulai dari 0 (elemen pertama)
  // dan berlanjut hingga elemen terakhir (ar.length - 1).
  for (let i = 0; i < ar.length; i++) {
    // Langkah 3: Tambahkan elemen saat ini ke variabel 'sum'
    // 'ar[i]' mengambil angka pada posisi 'i' dalam array.
    // 'sum += ar[i]' adalah singkatan dari 'sum = sum + ar[i]'.
    sum += ar[i];
  }

  // Langkah 4: Kembalikan hasil akhir penjumlahan
  // Setelah semua angka dijumlahkan, 'sum' akan berisi totalnya.
  return sum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arTemp) => parseInt(arTemp, 10));

  const result = simpleArraySum(ar);

  ws.write(result + '\n');

  ws.end();
}
