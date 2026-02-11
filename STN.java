public class STN {
    public int sum(int num1, int num2) {
        return num1 + num2;
    }
    public static void main(String[] args) {
        STN ob = new STN();
        int res = ob.sum(10, 30);
        System.out.println(res);
    }
}