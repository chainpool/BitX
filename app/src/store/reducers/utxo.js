const utxos = (state = [], action) => {
  if (action.type === "ADD_UTXO") {
    const index = state.findIndex(item => item.address === action.address);
    if (index < 0) {
      return [{ utxos: action.utxos, address: action.address }, ...state];
    } else {
      const clone = [...state];
      clone.splice(index, 1, { utxos: action.utxos, address: action.address });
      return clone;
    }
  }
  return state;
};

export default utxos;
