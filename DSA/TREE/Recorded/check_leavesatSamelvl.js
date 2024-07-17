function checkLeafLevel(node, level, leafLevel)
{
    if (node == null)
        return true;    // If a leaf node is seen
    if (node.left == null && node.right == null){// When a leaf node is found first time
        if (leafLevel.leaflevel == 0){  // Set first found leaf's level
            leafLevel.leaflevel = level;
            return true;
        }
            // If this is not first leaf node,
            // compare its level with first leaf's level
            return (level == leafLevel.leaflevel);
        }// If this node is not leaf, recursively
        // check left and right subtrees
        return checkLeafLevel(node.left, level + 1, leafLevel) && checkLeafLevel(node.right, level + 1, leafLevel);
    }
    function checkIfAllLeavesAtSameLevel(node){
        let level = 0;
        return checkIfAllLeavesAtSameLevel(node, level, mylevel);
    }
