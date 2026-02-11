//Sum of three numbers in java
import java.util.Scanner;
public class SOTN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the first input");
        int a = sc.nextInt();
        System.out.println("ENter the second input");
        int b = sc.nextInt();
        System.out.println("Enter the third input");
        int c  = sc.nextInt();
        int k = a + b;
        int res = k + c;
        System.out.println(res);
    }
}