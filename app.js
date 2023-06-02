

const users = []
// let users = [
//      { name: 'John', address: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', age: 25 },
//      { name: 'Alice', address: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2', age: 30 },
//      { name: 'Bob', address: '0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db', age: 40 }
//    ];

var divContent = document.getElementById("proof");


function GetProof(){    
var Leafvalue = document.getElementById("Leaf-Field");
const leaves = users.map((data) => keccak256(data))
const buftohex = x => '0x' + x.toString('hex')
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
const leaf = keccak256(Leafvalue.value) 
const proof = tree.getProof(leaf).map(x => buftohex(x.data))
divContent.innerHTML = JSON.stringify(proof);
console.log(proof)
}








function copyText() {
     navigator.clipboard.writeText(divContent.innerText)
       .then(function() {
         console.log("Text copied to clipboard!");
       })
       .catch(function(error) {
         console.error("Unable to copy text: ", error);
       });
      divContent.innerHTML= "";
   }





function AddUser(){
     var address = document.getElementById("AddAddress-Field")
     users.push(address.value)
     alert("Success");
     console.log(users);
}


function GetRoot(){
    const leaves = users.map(data => keccak256(data))
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
     const buftohex = x => '0x' + x.toString('hex')
     var root = buftohex(tree.getRoot())
      console.log(root);
      field = document.getElementById("hashResult");
      field.value = root
} 