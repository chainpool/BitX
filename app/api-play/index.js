const blockexplorer = require('blockchain.info/blockexplorer').usingNetwork(3);

async function test() {
  try {
    const block = await blockexplorer.getBlockHeight(1);
    console.log(block);

    const txs = await blockexplorer.getAddress('2N3dAjr9bX4BRUPwbewzhqEEHBUaDCnZsv4');
    console.log(txs);
  } catch (e) {
    console.log(e);
  }
}

test();

/**
 * BlockCypher api 比较适合BitX的开发
 *
 * 不同链的endpoint
 * https://www.blockcypher.com/dev/bitcoin/?shell#restful-resources
 *
 * Address api
 * https://www.blockcypher.com/dev/bitcoin/?shell#address-api
 *
 * 广播交易（propagate the raw transaction）
 * https://www.blockcypher.com/dev/bitcoin/#push-raw-transaction-endpoint
 */
