//---------------------------------ABI----------------------------------------------//
const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "fees_",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner_1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner_2",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "owner_3",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "consensusState",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "contractIs",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "conversationID",
				"type": "uint256"
			}
		],
		"name": "conversationCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newLeader",
				"type": "address"
			}
		],
		"name": "leaderAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "removedLeader",
				"type": "address"
			}
		],
		"name": "leaderRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "conversationID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "message",
				"type": "bytes"
			}
		],
		"name": "message",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "conversationID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			}
		],
		"name": "participantAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "vote",
				"type": "bool"
			}
		],
		"name": "voted",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "activeOwners",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newLeader",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "otherLeader",
				"type": "address"
			}
		],
		"name": "addLeader",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "identifier",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "participant",
				"type": "address"
			}
		],
		"name": "addParticipant",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "agree",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "consensus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "consensusResult",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "conversation",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "identifier",
				"type": "uint256"
			}
		],
		"name": "createConversation",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "identifier",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "message_",
				"type": "bytes"
			}
		],
		"name": "deliverMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "extractFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getConsensus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "leaderShip_control",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownerAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "owners",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "pauseContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "otherLeader",
				"type": "address"
			}
		],
		"name": "removeLeader",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "soleLeader",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "leader",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "state",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

//------------------------------CONNECTION Variables--------------------------------//
let web3;
let contract;
//------------------------------CONNECTION FUNCTIONS--------------------------------//

window.addEventListener("load", async () => {

  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  web3 = new Web3(window.ethereum);

  await window.ethereum.request({
    method: "eth_requestAccounts"
  });

  contract = new web3.eth.Contract(
    abi,
    "0x4AD1e0996467E5DAee8c2C1B3e8BDD313C4F3607"
  );

  console.log("Initialized");
});
//------------------------------ENCRYPT--------------------------------//

async function encrypt(message, password) {
  const enc = new TextEncoder();

  const keyMaterial = await crypto.subtle.digest(
    "SHA-256",
    enc.encode(password)
  );

  const key = await crypto.subtle.importKey(
    "raw",
    keyMaterial,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(message)
  );
  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);
  return btoa(String.fromCharCode(...combined));
}

//------------------------------DECRYPT--------------------------------//

async function decrypt(encrypted, password) {
  const enc = new TextEncoder();
  const dec = new TextDecoder();

  const data = Uint8Array.from(atob(encrypted), c => c.charCodeAt(0));

  const iv = data.slice(0, 12);
  const ciphertext = data.slice(12);

  const keyMaterial = await crypto.subtle.digest(
    "SHA-256",
    enc.encode(password)
  );

  const key = await crypto.subtle.importKey(
    "raw",
    keyMaterial,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );

  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    ciphertext
  );

  alert(dec.decode(plaintext));
}

//------------------------state modifying functions-----------------------//

//TODO wrap this in a funcion
//you also need to get the user variable via something like below
//const accounts = await web3.eth.getAccounts();
//const user = accounts[0];

contract.methods.sendMessage(id, message)
.send({ from: user })
.on("transactionHash", hash => {
  console.log("TX sent:", hash);
})
.on("receipt", receipt => {
  console.log("TX confirmed:", receipt);
})
.on("error", err => {
  console.error(err);
});

//------------------------Non state modifying functions-----------------------//
//TODO: add other functions
async function getValue() {
  const result = await contract.methods.myMethod().call();
  console.log(result);
}

//-----------Listen to all events from a specific block to present-------------//
// you can only filter, for indexed events

//TODO: add other events
contract.events.conversationCreated({
  filter: { conversationID: 5 },
  fromBlock: 0
})
.on("data", (event) => {
  console.log(event.returnValues);
});

//------------------------- State view Functions -------------------------------//

async function conversationCreated() {
  const conversationID = document.getElementById("convoID").value;
  const result = await contract.methods.conversation(conversationID).call();
  console.log(result);
}

async function conversationParticipants(){
  const conversationID=document.getElementById("participantID").value;
  const userAddress=document.getElementById("participantAddress").value;
  const result = await contract.methods.users(conversationID, userAddress).call();
  console.log(result);
}

async function viewFees() {
  const result = await contract.methods.fees().call();
  console.log(result);
}

async function owners() {
  const ownerAddress=document.getElementById("viewOwners").value;
  const result = await contract.methods.owners(ownerAddress).call();
  console.log(result);
}

async function totalOwners() {
  const result = await contract.methods.activeOwners().call();
  console.log(result);
}

async function consensusState() {
  const ownerAddress=document.getElementById("checkConsensus").value;
  const result = await contract.methods.consensus(ownerAddress).call();
  console.log(result);
}

async function consensusResult() {
  const result = await contract.methods.consensusResult().call();
  console.log(result);
}

async function paused() {
  const result = await contract.methods.pause().call();
  console.log(result);
}


//-------------------------
