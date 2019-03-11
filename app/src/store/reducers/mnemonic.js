import bip39 from 'bip39';

const mnemonic = (state = [], action) => {
  if (action.type === 'GENERATE_MNEMONIC') {
    const mnemonic = bip39.generateMnemonic();
    return mnemonic.split(' ');
  }
  return state;
};

export default mnemonic;
