//Command line arguments
public class Command {
    public static void main(String[] args) {
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);
        int res = a + b;
        System.out.println(res);
    }
}
//Output must be executed as follows
javac command.java
java Command 15 5