import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String[] lists ={"eat","tea","tan","ate","nat","bat"};
        Solution solution = new Solution();
        List<List<String>> result = solution.groupAnagrams(lists);
        System.out.println(result);


    }
}