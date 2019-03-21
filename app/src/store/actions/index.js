export const addAccount = (account) => ({
  type: 'ADD_ACCOUNT',
  account,
});

export const generateMnemonic = () => ({ type: 'GENERATE_MNEMONIC' });

export const removeMnemonic = () => ({ type: 'REMOVE_MNEMONIC' });
