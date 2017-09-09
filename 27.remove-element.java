public class Solution {
    public int removeElement(int[] nums, int val) {
        int start = 0, end = nums.length - 1;
        while (start <= end) {
            if (nums[start] == val) {
                if (nums[end] == val)
                    end--;
                else {
                    nums[start] = nums[end];
                    start++;
                    end--;
                }
            } else {
                start++;
            }
        }
        return start;
    }
}