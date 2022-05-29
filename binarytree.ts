import { NodeTree } from "./NodeTree";

export class BinaryTree<T, U>{

    public root:NodeTree<T, U>;
  
     private addRecursion(current:NodeTree<T,U>, key: T, value : U) : NodeTree<T,U> {
        if (current == null) {
           return new NodeTree(key,value);
        }
        if(key < current.key){
              current.left = this.addRecursion(current.left,key,value);
        }

         else if(key > current.key){
              current.right = this.addRecursion(current.right,key,value);
        
        }else{
           return current
        }
        return current;
     }
  
     public add(key:T, value : U){
        this.root = this.addRecursion(this.root, key, value);
     }
  
      private containsNodeRecursive(current:NodeTree<T,U>, key : T ):U{
        if(current == null){
           return null;
        }
        if(key == current.key){
           return current.value;
        }
  
        if(key < current.key){
           return this.containsNodeRecursive(current.left,key);
        }else{
           return this.containsNodeRecursive(current.right,key);
        }
     }
  
     public containsNode(key : T) : U{
        return this.containsNodeRecursive(this.root, key);
     }
  
       findSmallestValue(root:NodeTree<T,U>):T {
        if(root.left == null){
           return root.key;
        }else{
           return this.findSmallestValue(root.left);
        }
  
    }
  
     private deleteRecursive(current:NodeTree<T,U>, key:T) : NodeTree<T,U>{
        if(current == null){
           return null;
        }
  
        if(key == current.key){
           if (current.left == null && current.right == null) {
              return null;
          }
          if (current.right == null) {
           return current.left;
       }
       
       if (current.left == null) {
           return current.right;
       }
  
       var smallestValue = this.findSmallestValue(current.right);
        current.key = smallestValue;
        current.right = this.deleteRecursive(current.right, smallestValue);
        return current;
  
     }
        if(key < current.key){
           current.left = this.deleteRecursive(current.left,key);
           return current;
        }
        current.right = this.deleteRecursive(current.right,key);
        return current;
     }
  
     public delete(key : T){
        this.root = this.deleteRecursive(this.root, key);
     }
  
  
     public traverseInOrder(node:NodeTree<T,U>){
        if(node != null){
           this.traverseInOrder(node.left);
           console.log(" " + node.value);
           this.traverseInOrder(node.right);
        }
     }
  
     public print(){
        this.traverseInOrder(this.root);
     }
  
    }