// Harfler için simgeler
const symbolMap = {
  a: [
    "а",
    "α",
    "а",
    "ɒ",
    "ɑ",
    "ą",
    "å",
    "ª",
    "ā",
    "ӑ",
    "ӕ",
    "ă",
    "ą",
    "ɒ",
    "ḁ",
  ],
  b: ["в", "б", "ɓ", "b", "β", "ɓ", "b", "ƀ", "ɓ", "в", "ᵇ", "б", "ᵇ"],
  c: [
    "с",
    "с",
    "č",
    "ϲ",
    "с",
    "c",
    "ç",
    "ċ",
    "к",
    "с",
    "қ",
    "қ",
    "ç",
    "ċ",
    "č",
  ],
  d: ["ԁ", "d", "ɗ", "ʣ", "ժ", "d", "ḓ", "đ", "ď", "d", "ԝ", "𝑑", "ᵈ", "ᶁ"],
  e: [
    "е",
    "ε",
    "е",
    "ё",
    "є",
    "е",
    "ε",
    "е",
    "ė",
    "ē",
    "ę",
    "è",
    "ẹ",
    "ẽ",
    "ɇ",
    "ế",
  ],
  f: ["f", "ф", "ƒ", "ϕ", "f", "ƒ", "ϕ", "f", "ᶠ", "𝑓", "f"],
  g: ["g", "ց", "ɡ", "ϱ", "g", "ģ", "g", "ց", "𝑔", "ᵍ", "ց"],
  h: ["h", "һ", "н", "ħ", "н", "һ", "h", "𝒉", "ʰ", "н", "н"],
  i: ["і", "ι", "i", "ɪ", "і", "į", "ī", "į", "ī", "ι", "ɪ", "ı", "į"],
  j: ["j", "ј", "ʝ", "ĵ", "j", "ј", "𝑗", "ᵢ", "ʝ"],
  k: ["κ", "к", "к", "k", "қ", "к", "к", "к", "к", "k"],
  l: ["l", "ⅼ", "ⅼ", "ɫ", "l", "ʟ", "ļ", "ℓ", "𝑙", "l", "ⅼ"],
  m: ["м", "m", "м", "ɯ", "м", "m", "𝑚", "ᵐ", "ɱ", "ᵐ"],
  n: ["n", "и", "ո", "n", "ŋ", "n", "n", "ň", "ń", "ᶰ", "ŋ", "n", "ɳ"],
  o: ["о", "ο", "о", "о", "ø", "о", "ο", "ø", "о", "o", "օ", "ơ", "ō", "ὀ"],
  p: ["р", "p", "ρ", "р", "р", "ᵖ", "р", "р", "p", "𝑝"],
  q: ["q", "қ", "ԛ", "q", "қ", "q", "ᵩ", "գ", "𝑞"],
  r: ["r", "г", "r", "я", "г", "г", "ɹ", "ᶓ", "𝑟", "r", "г", "r"],
  s: ["ѕ", "s", "ѕ", "ѕ", "s", "ş", "ș", "s", "𝑠", "ѕ", "ѕ"],
  t: ["t", "т", "τ", "т", "t", "т", "τ", "t", "ᵗ", "𝑡"],
  u: ["u", "и", "υ", "ʉ", "u", "ү", "u", "ų", "ū", "ü", "ŭ", "ɯ"],
  v: ["v", "ν", "ѵ", "v", "ν", "v", "ᵛ", "𝑣", "ᵥ"],
  w: ["w", "ω", "ԝ", "w", "ｗ", "w", "ω", "ω", "ԝ"],
  x: ["х", "x", "χ", "х", "х", "x", "𝑥", "χ", "χ"],
  y: ["ү", "у", "y", "ү", "у", "y", "𝑦", "у", "ү", "ʏ"],
  z: ["z", "з", "ʐ", "з", "z", "𝑧", "z", "𝓏", "ᶻ"],
};

function generateRandomText() {
  let inputText = document.querySelector(".word").value;
  let outputText = "";

  for (let char of inputText) {
    let lowerChar = char.toLowerCase();
    if (symbolMap[lowerChar]) {
      let randomSymbol =
        symbolMap[lowerChar][
          Math.floor(Math.random() * symbolMap[lowerChar].length)
        ];
      outputText +=
        char === lowerChar ? randomSymbol : randomSymbol.toUpperCase();
    } else {
      outputText += char;
    }
  }

  document.querySelector(".bypass").value = outputText;
}

document.querySelector(".cevir").addEventListener("click", generateRandomText);

document.querySelector(".bypass").addEventListener("click", function () {
  this.select();
  document.execCommand("copy");

  let message = document.createElement("div");
  message.innerText = "✔️Text has been copied!🚀";
  message.classList.add("copy-message");

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2500);
});
