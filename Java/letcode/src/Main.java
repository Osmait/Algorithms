

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] lista = {2, 3, 4, 10, 40};
        int result = solution.binarySearch2(lista,0, lista.length-1,10 );

        System.out.println(result);

    }
}