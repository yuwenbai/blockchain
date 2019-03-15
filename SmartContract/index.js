var contractInstance
function init(){
	console.log('aaaaaaaaaaa init')
		if (typeof window.ethereum !== 'undefined'
	|| (typeof window.web3 !== 'undefined')) {

	  // Web3 browser user detected. You can now use the provider.
	  const provider = window['ethereum'] || window.web3.currentProvider
	  
	  console.log('aaaaaaaaaa provider ' + ethereum.networkVersion)
	  
	  console.log('aaaaaaaaaa ethereum.isMetaMask ' + ethereum.isMetaMask)
	}
	if (typeof window.ethereum !== 'undefined'){
		console.log('aaaaaaaaaa bbb')
		const accounts = ethereum.enable()
		const account = accounts[0] 
		console.log('aaaaaaaaaa account 1 ' + account)
		const account1 = ethereum.selectedAddress
		console.log('aaaaaaaaaa account 2 ' + account1)
	}else{
		console.log('aaaaaaaaaa aaa')
	}
		let abi = JSON.parse('[ { "constant": true, "inputs": [], "name": "totalBalanceof", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x04c44dd3" }, { "constant": true, "inputs": [], "name": "funderReceivedAccount", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x0839aa71" }, { "constant": true, "inputs": [], "name": "grabbaseBlockNumber", "outputs": [ { "name": "", "type": "uint256", "value": "10753" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x0bac4a71" }, { "constant": true, "inputs": [], "name": "uilotteryNumber", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x167607ca" }, { "constant": true, "inputs": [], "name": "avarageAviableBalance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x1f8dba19" }, { "constant": false, "inputs": [ { "name": "numbers", "type": "uint256[]" } ], "name": "voteLottery", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function", "signature": "0x2e168cdf" }, { "constant": true, "inputs": [], "name": "grabPeriods", "outputs": [ { "name": "", "type": "uint256[]", "value": [ "10753" ] } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x3970d774" }, { "constant": true, "inputs": [ { "name": "period", "type": "uint256" } ], "name": "grabFundersHistory", "outputs": [ { "name": "", "type": "uint256[]", "value": [] } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x57203977" }, { "constant": true, "inputs": [ { "name": "period", "type": "uint256" } ], "name": "grabLotteryResultHistory", "outputs": [ { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" }, { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x5ad6fd74" }, { "constant": false, "inputs": [ { "name": "useless", "type": "uint256" } ], "name": "openLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x5c0bf939" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "testUI", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6bf16d35" }, { "constant": true, "inputs": [], "name": "tempValue", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6cbc07b7" }, { "constant": true, "inputs": [], "name": "tempFlag", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x755e0085" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Periods", "outputs": [ { "name": "", "type": "uint256", "value": "10753" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x7e189653" }, { "constant": true, "inputs": [ { "name": "blockNumber", "type": "uint256" } ], "name": "grabBlockNumberAndHash", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x86b0bf9e" }, { "constant": true, "inputs": [], "name": "grabFirstStageNumber", "outputs": [ { "name": "", "type": "uint256", "value": "100" } ], "payable": false, "stateMutability": "pure", "type": "function", "signature": "0x878f9e58" }, { "constant": true, "inputs": [ { "name": "period", "type": "uint256" }, { "name": "addr", "type": "address" } ], "name": "grabFundersHistoryLength", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xbf9b496b" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "FunderReceived", "outputs": [ { "name": "flag", "type": "uint256", "value": "0" }, { "name": "number", "type": "uint256", "value": "0" }, { "name": "mount", "type": "uint256", "value": "0" }, { "name": "addr", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xc7e8ae33" }, { "constant": true, "inputs": [], "name": "baseBlockNumber", "outputs": [ { "name": "", "type": "uint256", "value": "10753" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xce1e33c3" }, { "constant": true, "inputs": [], "name": "tempNumber", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xd1b0e407" }, { "constant": true, "inputs": [], "name": "uiTotalBalanceof", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xe2d17759" }, { "constant": true, "inputs": [], "name": "totalStep", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xe882715f" }, { "constant": true, "inputs": [], "name": "aviableBalance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xf0332691" }, { "constant": true, "inputs": [], "name": "totalWinner", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xf7a4e8f2" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor", "signature": "constructor" } ]')
	var contractAddress = '0x5a583C420a2D9168a4776954BA49394B9BEbB14D'
	contractInstance = web3.eth.contract(abi).at(contractAddress);
  
  // var myEvent = contractInstance.Increment({},{fromBlock: 0, toBlock: 'latest'});
    // myEvent.watch(function(error, result){
        // console.log("on watch"); 
        // console.log(arguments);
    // });

}
//开启metamask
$("#metamask_btn").click(function(event){
    event.preventDefault();
    console.log(' history ')
	asyncCall()
	console.log(' history end ')
})
//grabbaseBlockNumber
$("#grabbaseBlockNumber").click(function(event){
    event.preventDefault();
    console.log(' grabbaseBlockNumber ')

	// Call a function of the contract:
	contractInstance.grabbaseBlockNumber(
	  (err, res) => { console.log('getstring ' + res)/** do something with results **/ });
})

//grabFirstStageNumber
$("#grabFirstStageNumber").click(function(event){
    event.preventDefault();
    console.log(' grabFirstStageNumber ')

	// Call a function of the contract:
	contractInstance.grabFirstStageNumber(
	  (err, res) => { console.log('getstring ' + res)/** do something with results **/ });
})
//grabPeriods 获取所有开奖期数
$("#grabPeriods").click(function(event){
    event.preventDefault();
    console.log(' grabPeriods ')

	// Call a function of the contract:
	contractInstance.grabPeriods(
	  (err, res) => { console.log('getstring ' + res)/** do something with results **/ });
})

// //grabFundersHistory
// $("#grabFundersHistory").click(function(event){
    // event.preventDefault();
    // console.log(' grabFundersHistory ')

	// // Call a function of the contract:
	// contractInstance.grabFundersHistory.call(10153,(error, result) => {
		// console.log(result);
	// });
// })

// //grabFundersHistoryLength
// $("#grabFundersHistoryLength").click(function(event){
    // event.preventDefault();
    // console.log(' grabFundersHistoryLength ')

	// const account1 = ethereum.selectedAddress;
	// // Call a function of the contract:
	// contractInstance.grabFundersHistoryLength.call(9953,account1,(error, result) => {
		// console.log(result);
		// });
	// });
// })

//voteLottery //获取所有开奖期数
 $("#voteLottery").click(function(event){
		event.preventDefault();
		console.log(' voteLottery ')

	 // Call a function of the contract:
	 var arr6 = [1003,2002,2001];
	 var oneEth = 100000000000000000
	 var totalEth = arr6.length * oneEth
	 contractInstance.voteLottery(arr6,{from: ethereum.selectedAddress, value: totalEth},
	 (err, res) => { console.log('voteLottery ' + res)/** do something with results **/ });
 })
 
 //voteLottery //获取所有开奖期数
 $("#openLottery").click(function(event){
		event.preventDefault();
		console.log(' openLottery ')

	 // Call a function of the contract:
	 contractInstance.openLottery(0,{from: ethereum.selectedAddress},
	 (err, res) => { console.log('openLottery ' + res)/** do something with results **/ });
 })

// //grabFundersHistory
// $("#grabFundersHistory").click(function(event){
    // event.preventDefault();
    // console.log(' grabFundersHistory ')

	// // Call a function of the contract:
	// contractInstance.grabFundersHistory(
	  // (err, res) => { console.log('getstring ' + res)/** do something with results **/ });
// })

//点击上传跳转
$("#grabLotteryResultHistory").click(function(event){
    event.preventDefault();
    console.log(' grabLotteryResultHistory ')

	// Call a function of the contract:
	contractInstance.grabLotteryResultHistory.call(9953,(error, result) => {
		console.log(result);
	});
})
//点击上传跳转
$("#upload_btn2").click(function(event){
    event.preventDefault();
    console.log(' upload_btn2 ' + ethereum.selectedAddress)
	const transactionParameters = {
  nonce: '0x00', // ignored by MetaMask
  gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
  gasLimit: '0x2710',  // customizable by user during MetaMask confirmation.
  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  from: web3.eth.accounts[0], // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
  chainId: 3 // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
}

ethereum.sendAsync({
  method: 'eth_sendTransaction',
  params: [transactionParameters],
  from: ethereum.selectedAddress,
}, function (err, result) {
	
})})
ethereum.on('networkChanged', function (accounts) {
  // Time to reload your interface with accounts[0]!
  console.log('aaaaaaaaaa provider ' + ethereum.networkVersion)
})
async function asyncCall() {
	  try {
	  const accounts = await ethereum.enable()
	  console.log(accounts)
	  // You now have an array of accounts!
	  // Currently only ever one:
	  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']

	} catch (error) {
	  // Handle error. Likely the user rejected the login:
	  console.log(reason === "User rejected provider access")
	}
  // expected output: 'resolved'
}

init()