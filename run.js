// Run driver for geth-vipnode

var address, startBlock;
// startBlock = 1800000;
// address = "0x09e6acdbf002bcc993e03b7b6c6f461ca32519c1"; // Testnet

startBlock = 5244795;
address = "0x10d4909cacb1ca5ca7fc1a2a52e5f94373f0c594"; // Mainnet

var vipnodeContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"limitRegistered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"interval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numRegistered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_weiPrice","type":"uint256"},{"name":"_interval","type":"uint256"},{"name":"_limitRegistered","type":"uint256"}],"name":"config","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_enode","type":"string"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_contractOwner","type":"address"},{"name":"_withdrawWallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"enode","type":"string"},{"indexed":false,"name":"timeExpires","type":"uint256"}],"name":"Register","type":"event"}]);
var vipnode = vipnodeContract.at(address);

var filter = { address: [address], fromBlock: startBlock, toBlock: "latest" };

// Trim scheme and args
function parseEnode(enode) {
  var parts;
  parts = enode.split("://");
  if (parts.length > 1) {
    enode = parts[1];
  }
  return enode.slice(0, 128);
}

function isExpired(reg) {
  var now = +new Date();
  return now > reg.timeExpires * 1000;
}

var trusting = {};
var results = [];
var watching = vipnode.allEvents(filter).watch(function(err, res) {
  //console.log("contract.AllEvents().watch:", JSON.stringify(arguments));

  results.push(res);
  var reg = res.args;
  if (isExpired(reg)) {
    console.log("reg expired, skipping: ", JSON.stringify(reg));
    return;
  }

  var enode = parseEnode(reg.enode);
  try{
    admin.trustPeer(enode);
    trusting[enode] = reg;
  } catch(e) {
    console.log("failed to add reg: " + JSON.stringify(reg));
    console.error(e);
    return;
  }

  console.log("trusted reg: " + JSON.stringify(reg));
});

function checkExpired() {
  console.log("Checking "+ Object.keys(trusting).length + " members for expirations: " + new Date());
  for(var enode in trusting) {
    var reg = trusting[enode];
    if (!isExpired(reg)) {
      continue;
    }
    delete trusting[enode];
    try {
      admin.removePeer(enode);
    } catch(e) {
      console.log("failed to remove reg: " + JSON.stringify(reg));
      console.log(e);
      return;
    }

    console.log("removed expired reg: " + JSON.stringify(reg));
  };
}

// Check twice per day
var checkSpeed = 1000*60*60*12;
var interval = setInterval(checkExpired, checkSpeed);
