import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode id=589 lang=java
 *
 * [589] N-ary Tree Preorder Traversal
 */
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> list = new ArrayList<>();
        if (root == null) {
            return list;
        }
        list.add(root.val);
        traveler(root.children, list);
        return list;
    }

    void traveler(List<Node> root, List<Integer> list) {
        if (root.size() == 0)
            return;
        for (int i = 0; i < root.size(); i++) {
            Node node = root.get(i);
            list.add(node.val);
            traveler(node.children, list);
        }
    }
}
