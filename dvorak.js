function convert(qwertoToDvorak, string) {
  const qwerty = "-=qwertyuiop[]asdfghjkl;'zxcvbnm,./_+QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?";
  const dvorak = "[]',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz{}\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ";

  if (qwertoToDvorak) {
    return prc(qwerty, dvorak, string);
  } else {
    return prc(dvorak, qwerty, string);
  }
}


function prc(source, destination, string) {
  let i = 0;
  let result = "";

  for (i=0; i<string.length; i++) {
    if (destination.indexOf( string.charAt(i)) > -1) {
      result += source.charAt(destination.indexOf(string.charAt(i)));
    } else {
      result += string.charAt(i);
    }
  }

  return result;
}

const toQwerty = document.getElementById('toQwerty');
const toDvorak = document.getElementById('toDvorak');
const input = document.getElementById('input');
const output = document.getElementById('output');
const copyResult = document.getElementById('copyResult');

toQwerty.addEventListener('click', function() {
    output.value = convert(true, input.value);
});

toDvorak.addEventListener('click', function() {
    output.value = convert(false, input.value);
});

copyResult.addEventListener('click', function() {
    const text = output.value;
    const copyContent = async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) {
            console.log("Failed to copy!")
        }
      };
    copyContent();
});
