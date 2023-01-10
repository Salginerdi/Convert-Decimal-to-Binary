// 10'luk Sayıyı 2'liğe Çevirme Uygulaması - Decimal to Binary Conversion
// Ondalıklı sayıyı ikilik sayıyıya çevirme

// mesele 10'un binary karşılığını bulmak için 10'u 2'ye bölüyoruz. Kalan 0 oluyor, bölüm 5 oluyor. 5'i tekrar 2'ye bölüyoruz. Kalan 1 bölüm 2 oluyor. Bu 2'yi tekrar ikiye bölüyoruz ve kalan 0 oluyor. Son bölümü ve kalanları sağdan sola yazdığımızda 1010 oluyor.

convertDecimalToBinary(123);

function convertDecimalToBinary(number) {
  let binary = "";
  while (true) {
    binary += (number % 2).toString();
    number = Math.floor(number / 2); // Bunu yazdığımızda ondalık kısmı at demiş oluyoruz.
    if (number == 1) {
      // Bölüm 1'e eşit olduğunda artık bölme döngüden çık diyoruz.
      binary += 1; // burada binary'mizin içine en son bölümdeki rakam olan 1'i de ekliyorum.
      break;
    }
  }
  let result = reverse(binary);
  console.log("Sonuç : " + result);
}

function reverse(binary) {
  let reverseBinary = "";
  for (let i = binary.length - 1; i >= 0; i--) {
    reverseBinary += binary.charAt(i);
  }
  return reverseBinary;
}
