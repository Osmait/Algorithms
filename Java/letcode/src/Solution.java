import java.util.*;

public class Solution {
    public boolean containsDuplicate(int[] numb) {
        Set<Integer> uniques = new HashSet<>();
        for (int num : numb) {
            if (uniques.contains(num)) {
                return true;
            }
            uniques.add(num);
        }
        return false;
    }

    public  boolean isAnagram(String s, String t){
        if (s.length() != t.length()) return false;
        int[] store = new int[26];

        for (int i = 0 ; i < s.length(); i++){
            store[s.charAt(i)-'a']++;
            store[t.charAt(i)-'a']--;
        }
        for (int n :store) if (n != 0 )return false;
        return true;
    }

    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> prevMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int diff = target - num;

            if (prevMap.containsKey(diff)) {

                return new int[] { prevMap.get(diff), i };
            }

            prevMap.put(num, i);
        }

        return new int[] {};
    }

public List<List<String>> groupAnagrams(String[] strs){
        List<List<String>> res = new ArrayList<>();
        if (strs.length == 0 )return res;
        HashMap<String, List<String>> map = new HashMap<>();
        for (String s : strs){
            char[] hash = new char[26];
            for (char c : s.toCharArray()){
                hash[c - 'a']++;
            }
            String key = new String(hash);
            map.computeIfAbsent(key, k-> new ArrayList<>());
            map.get(key).add(s);

        }
        res.addAll(map.values());
        return res;
}



}
