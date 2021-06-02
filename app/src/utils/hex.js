export const hexToAscii = str => {
  if (!/^(0x)?[\da-fA-F]+$/.test(str)) {
    return "";
  }
  const hexString = str.startsWith("0x") ? str.substring(2) : str;
  if (hexString.length % 2 === 1) {
    return "";
  }

  let strOut = "";
  for (let x = 0; x < hexString.length; x += 2) {
    strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
  }
  return strOut;
};
