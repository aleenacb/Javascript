import java.util.Scanner;
public class Nnumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of elements");
        int N = sc.nextInt();
        int sum = 0;
        for (int i = 0; i < N; i++) {
            System.out.println("Enter the " +  (i+1) +" elements");
            int a = sc.nextInt();
            sum += a;
        }
        System.out.println(sum);
        

    }
}