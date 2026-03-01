public class BitManipulation {
    public int Bit(int num1, int num2) {
        //Here it checks num2 represents carry in binary addition and returns without carry 
        if(num2 == 0) return num1;
        //Here ^ is XOR operaton that we are using to find without carry operations and & is to check with carry and << 1 represents shift to higher operator
        return Bit(num1 ^ num2, (num1 & num2) << 1);
    }
    public static void main(String[] args) {
        BitManipulation ob = new BitManipulation();
        int res = ob.Bit(10, 20);
        System.out.println(res);
    }
}