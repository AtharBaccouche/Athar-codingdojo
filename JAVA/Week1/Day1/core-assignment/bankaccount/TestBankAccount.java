public class TestBankAccount{
    public static void main (String[] args) {
        BankAccount firstuser = new BankAccount(250.00,100.10);
        BankAccount seconduser = new BankAccount(350.150,460.147);


        firstuser.depositMoney("saving", 56.00);
        firstuser.withdrawmoney("saving", 53.00);
        firstuser.Totalmoney();


        seconduser.depositMoney("cheking",25);
        seconduser.withdrawmoney("cheking",65);
        seconduser.Totalmoney();
    }
}