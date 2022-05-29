import { BinaryTree } from "./binarytree";


let bt = new BinaryTree<number, string>();


var readlineSync = require('readline-sync');
console.log("Binary tree have a key type: number, value type: string");
var k = "0";
while(k != "5"){
    console.log("1.Add node: ");
     console.log("2.Remove node on key");
     console.log("3.Search node on key");
     console.log("4.Pring tree");
     console.log("5.Exit");

     k = readlineSync.question('Select action ');

     
     switch(k){
        case "1":
           var key = readlineSync.question('Input key: ');
           var value = readlineSync.question('Input value: ');
           bt.add(key,value);
           break;
           case "2":
           var key = readlineSync.question('Input key, which you want to remove: ')
           bt.delete(key);
           break;
           case "3":
            var key = readlineSync.question('Input key, which you want to search: ')
            console.log("Element(" + key + ") = " + bt.containsNode(key));
            break;
            case "4":
               console.log("\n Binary tree: ");
               bt.print();
               break;
     }

     console.log();
}