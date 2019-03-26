const utxos = (state = [], action) => {
  if (action.type === 'ADD_UTXO') {
    return [{ utxos: action.utxos, address: action.address }, ...state];
  }
  return state;
};

export default utxos;
