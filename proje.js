// Harfler için simgeler
const symbolMap = {
  a: [
    "a",
    "а",
    "α",
    "ä",
    "á",
    "à",
    "â",
    "ā",
    "ã",
    "å",
    "ă",
    "ǎ",
    "ạ",
    "ą",
    "æ",
    "A",
    "А",
    "Α",
    "Ꭺ",
    "ᗅ",
    "ᴀ",
    "Ａ",
  ],
  b: ["b", "б", "β", "ɓ", "ʙ", "в", "B", "Б", "Β", "Ᏼ", "ᗷ", "ʙ", "Ｂ"],
  c: ["c", "с", "ç", "č", "ĉ", "ċ", "ƈ", "C", "С", "Ϲ", "Ꮯ", "ᑕ", "ᴄ", "Ｃ"],
  d: ["d", "д", "ð", "đ", "ɗ", "ɖ", "ƌ", "D", "Д", "Ꭰ", "ᗪ", "ᴅ", "Ｄ"],
  e: [
    "e",
    "е",
    "ε",
    "ê",
    "ë",
    "ė",
    "ē",
    "ę",
    "ě",
    "è",
    "é",
    "ẹ",
    "E",
    "Е",
    "Ε",
    "Ꭼ",
    "ᗴ",
    "ᴇ",
    "Ｅ",
  ],
  f: ["f", "ф", "ƒ", "ϕ", "ᶠ", "𝑓", "F", "Ф", "ᖴ", "ꜰ", "Ｆ"],
  g: ["g", "г", "ɠ", "ĝ", "ğ", "ġ", "ģ", "G", "Ꮐ", "Ᏻ", "ɢ", "Ｇ"],
  h: ["h", "н", "ĥ", "ħ", "ʜ", "H", "Н", "Η", "Ꮋ", "ᕼ", "Ｈ"],
  i: [
    "i",
    "і",
    "ί",
    "ï",
    "î",
    "ī",
    "į",
    "ì",
    "í",
    "ị",
    "I",
    "І",
    "Ι",
    "Ꭵ",
    "Ꮖ",
    "ɪ",
    "Ｉ",
  ],
  j: ["j", "ј", "ĵ", "ʝ", "J", "Ј", "Ϳ", "Ꭻ", "ᒍ", "ᴊ", "Ｊ"],
  k: ["k", "к", "ķ", "ƙ", "κ", "ᶄ", "K", "К", "Κ", "Ꮶ", "ᛕ", "ᴋ", "Ｋ"],
  l: ["l", "л", "ļ", "ľ", "ł", "ƚ", "L", "Ꮮ", "ᒪ", "ʟ", "Ｌ"],
  m: ["m", "м", "ɱ", "ṃ", "M", "М", "Μ", "Ꮇ", "ᗰ", "ᴍ", "Ｍ"],
  n: [
    "n",
    "н",
    "ñ",
    "ń",
    "ņ",
    "ň",
    "ŋ",
    "ṅ",
    "N",
    "Н",
    "Ν",
    "Ꮑ",
    "ᑎ",
    "ɴ",
    "Ｎ",
  ],
  o: [
    "o",
    "о",
    "ó",
    "ò",
    "ô",
    "ö",
    "ő",
    "ō",
    "õ",
    "ø",
    "ơ",
    "ọ",
    "O",
    "О",
    "Ο",
    "Ꮎ",
    "ᗝ",
    "ᴏ",
    "Ｏ",
  ],
  p: ["p", "ƥ", "ᵽ", "P", "Р", "Ρ", "Ꮲ", "ᑭ", "ᴘ", "Ｐ"],
  q: ["q", "ԛ", "Q", "Ԛ", "Ϙ", "Ꮔ", "ᑫ", "ǫ", "Ｑ"],
  r: [
    "r",
    "р",
    "ŕ",
    "ŗ",
    "ř",
    "ɾ",
    "R",
    "Р",
    "Ρ",
    "Ꮢ",
    "ᖇ",
    "ʀ",
    "Ｒ",
    "Г",
    "Γ",
  ],
  s: ["s", "š", "ş", "ŝ", "ś", "ș", "S", "С", "Σ", "Ꮪ", "ᔕ", "ꜱ", "Ｓ"],
  t: ["t", "т", "ţ", "ť", "ț", "ƫ", "T", "Т", "Τ", "Ꭲ", "ᖴ", "ᴛ", "Ｔ"],
  u: [
    "u",
    "ú",
    "ù",
    "û",
    "ü",
    "ŭ",
    "ū",
    "ů",
    "ų",
    "ư",
    "ụ",
    "U",
    "Ꮜ",
    "ᑌ",
    "ᴜ",
    "Ｕ",
  ],
  v: ["v", "ѵ", "ṿ", "V", "Ѵ", "Ⅴ", "Ꮩ", "ᐯ", "ᴠ", "Ｖ"],
  w: ["w", "ŵ", "ẁ", "ẃ", "ẅ", "W", "Ԝ", "Ѡ", "Ꮤ", "ᗯ", "ᴡ", "Ｗ"],
  x: ["x", "χ", "х", "ᶍ", "X", "Х", "Χ", "Ꮍ", "᙭", "ˣ", "Ｘ"],
  y: ["y", "у", "ý", "ÿ", "ŷ", "ƴ", "ỷ", "Y", "У", "Υ", "Ꭹ", "Ꮍ", "ʏ", "Ｙ"],
  z: ["z", "ž", "ż", "ź", "ƶ", "Z", "Ζ", "Ꮓ", "ᘔ", "ᴢ", "Ｚ"],
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
