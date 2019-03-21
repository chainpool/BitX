import bip39 from 'bip39';

const mnemonic = (state = [], action) => {
  if (action.type === 'GENERATE_MNEMONIC') {
    const mnemonic = bip39.generateMnemonic();
    return mnemonic.split(' ');
  } else if (action.type === 'GENERATE_MNEMONIC') {
    return [];
  }
  return state;
};

export default mnemonic;
