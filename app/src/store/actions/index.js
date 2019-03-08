export const setAccounts = (accounts) => ({
  type: 'SET_ACCOUNTS',
  accounts,
});

export const generateMnemonic = () => ({ type: 'GENERATE_MNEMONIC' });
