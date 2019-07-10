module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    telsius: {
      host: "ey-alastria-node.westeurope.cloudapp.azure.com/rpc",
      //host: "ey-alastria-node.westeurope.cloudapp.azure.com", // The ip of our AWS instance
      from: '0x8142c97014d4b25b726efd55cfcd2516a9667e11',
      port: 80,
      gasPrice: 0,
      network_id: 83584648538,
      type: "quorum"
    }
  }
};
