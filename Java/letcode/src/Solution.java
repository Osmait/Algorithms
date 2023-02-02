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

    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] store = new int[26];

        for (int i = 0; i < s.length(); i++) {
            store[s.charAt(i) - 'a']++;
            store[t.charAt(i) - 'a']--;
        }
        for (int n : store) if (n != 0) return false;
        return true;
    }

    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> prevMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int diff = target - num;

            if (prevMap.containsKey(diff)) {

                return new int[]{prevMap.get(diff), i};
            }

            prevMap.put(num, i);
        }

        return new int[]{};
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        if (strs.length == 0) return res;
        HashMap<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] hash = new char[26];
            for (char c : s.toCharArray()) {
                hash[c - 'a']++;
            }
            String key = new String(hash);
            map.computeIfAbsent(key, k -> new ArrayList<>());
            map.get(key).add(s);

        }
        res.addAll(map.values());
        return res;
    }


    public int[] topKFrequent(int[] nums, int k) {
        int[] arr = new int[k];
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num : nums) map.put(num, map.getOrDefault(num, 0) + 1);
        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
                (a, b) -> a.getValue() - b.getValue()
        );
        for (Map.Entry<Integer, Integer> it : map.entrySet()) {
            pq.add(it);
            if (pq.size() > k) pq.poll();

        }
        int i = k;
        while (!pq.isEmpty()) {
            arr[--i] = pq.poll().getKey();
        }
        return arr;
    }

    public String hoopCount(int n) {
        return n <= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
    }

    public static String greet(String language) {

//        String IP_ADDRESS_INVALID = "not a valid ipv4 or ipv6 ip address";
//        String   IP_ADDRESS_NOT_FOUND = "ip address not in the database";
//        String   IP_ADDRESS_REQUIRED = "no ip address was supplied";

        Map<String, String> datos = new HashMap<>();
        datos.put("english", "Welcome");
        datos.put("czech", "Vitejte");
        datos.put("danish", "Velkomst");
        datos.put("dutch", "Welkom");
        datos.put("estonian", "Tere tulemast");
        datos.put("finnish", "Tervetuloa");
        datos.put("flemish", "Welgekomen");
        datos.put("french", "Bienvenue");
        datos.put("german", "Willkommen");
        datos.put("irish", "Failte");
        datos.put("italian", "Benvenuto");
        datos.put("latvian", "Gaidits");
        datos.put("lithuanian", "Laukiamas");
        datos.put("polish", "Witamy");
        datos.put("spanish", "Bienvenido");
        datos.put("swedish", "Valkommen");
        datos.put("welsh", "Croeso");

        if (datos.containsKey(language)) {
            return datos.get(language);
        }
        return datos.get("english");


    }

    public String bmi(double weight, double height) {
        double bmi = weight / Math.pow(height, 2);
        System.out.println(bmi);
        if (bmi <= 18.5) return "Underweight";
        if (bmi <= 25.0) return "Normal";
        if (bmi <= 30.0) return "Overweight";
        return "Obese";

    }

    public String fakeBin(String numberString) {

//        StringJoiner text = new StringJoiner("");
//        for (int i = 0; i < numberString.length(); i++) {
//            if (numberString.charAt(i) < '5') {
//                text.add("0");
//            } else {
//                text.add("1");
//            }
//        }
//
//        return text.toString();
        return  numberString.replaceAll("[0-4]", "0").replaceAll("[5-9]", "1");
    }

    public static int[] pipeFix(int[] numbers) {

//        ArrayList<Integer>lista = new ArrayList<>();
//        for (int i =numbers[0] ; i <= numbers[numbers.length -1]; i++) {
//            lista.add(i);
//        }
//        int[] result = new int[lista.size()];
//        for (int i = 0; i < lista.size(); i++) {
//            result[i] = lista.get(i);
//        }
//
//        return result;

        int min = numbers[0];
        int max = numbers[numbers.length -1];
        int size = max - min + 1;
        int[] rango  = new int[size];
        for (int i = 0; i < size; i++) {
            rango[i]= min + i;
        }
        return rango;
    }

    public double TwoDecimalPlaces(double number){
        return (double) Math.round(number * 100) / 100d;
//        return Double.parseDouble(String.format("%.2f", number));
    }
    public  String howMuchILoveYou(int nb_petals) {
//
//        String[] flor = {
//                "I love you",
//                "a little",
//                "a lot",
//                "passionately",
//                "madly",
//                "not at all",
//        };
//        int j = -1;
//        for (int i = 0 ; i <= nb_petals; i++) {
//            j++;
//            if (i == flor.length){
//                j = -1;
//                continue;
//            }
//            if (i == nb_petals-1)return flor[j];
//        }
//        return flor[0];

        String[] arr ={"not at all", "I love you",  "a little", "a lot", "passionately", "madly"};

        return arr[nb_petals%6];
    }

    public static String remove(String s, int n){
        while(n-- >0)
            s  = s.replaceFirst("!","");
        return s;





    }

    public static int[] invert(int[] array) {
        for (int i = 0; i < array.length; i++) {
            array[i]*= -1;
        }
        return array;
    }

    public static String sayHello(String name) {

        return "Hello, "+name;
    }


    public boolean isvalid(String s){
        if (s.length() % 2 != 0) return false;
        Stack<Character>stack = new Stack<>();
        for (int i = 0; i < s.length(); i++){
            if (
                    stack.isEmpty() &&  (s.charAt(i) == ')' || s.charAt(i) == '}' || s.charAt(i) == ']')
            )return false;else{
                if (!stack.isEmpty()){
                    if (  stack.peek() == '('&& s.charAt(i) == ')')stack.pop();
                    else if (stack.peek() == '{' && s.charAt(i) == '}' ) stack.pop();
                    else if ( stack.peek() == '[' && s.charAt(i) == ']' ) stack.pop();
                    else stack.add(s.charAt(i));
                }else stack.add(s.charAt(i));
            }
        }
        return stack.isEmpty();
    }

}
