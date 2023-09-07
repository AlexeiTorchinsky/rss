
export const generateCardNumb = () => {

  const minNum = 100000000;
  const maxNum = 999999999;
  
  const nineDigit = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  function fromDecimal(decimal, alphabet) {
    const base = alphabet.length;
    let result = '';

    while (decimal) {
      result = alphabet[decimal % base] + result;
      decimal = Math.floor(decimal / base);
    }

    return result; 
  }
  return fromDecimal(nineDigit, '0123456789ABCDEF')
} 

