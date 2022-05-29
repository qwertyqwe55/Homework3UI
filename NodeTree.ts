export class NodeTree<T, U> {
    public key : T;
    public value : U;
    public left : NodeTree<T, U>;
    public right: NodeTree<T, U>;

    constructor(key : T, value:U)
    {
       this.key = key;
        this.value = value;
       this.right = null;
       this.left = null;
    }
}