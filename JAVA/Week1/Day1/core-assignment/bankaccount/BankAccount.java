public class BankAccount{
    // MEMBER VARIABLES
    private double checking_balance;
    private double saving_balance;
    public static int numberOfAccounts = 0;
    public static double totalAmount = 0;

    //CONSTRUCTOR
    public BankAccount(double checking_balance, double saving_balance) {
        this.checking_balance= checking_balance;
        this.saving_balance = saving_balance;
        numberOfAccounts++;
    }

    //METHODS
    public void depositMoney(String type, double depositAmount){
        if(type== "cheking"){
            setcheckingbalance(getCheckingbalance()+depositAmount);
            totalAmount +=depositAmount;
        }
        else if(type=="saving"){
            setsavingbalance(getSavingbalance()+depositAmount);
            totalAmount +=depositAmount;
        }
        else{
            System.out.println("erreur");
        }
    }


    public void  withdrawmoney(String type, double withdrawAmount ){
        if(type=="cheking" ){
            if(getCheckingbalance()< withdrawAmount){
                System.out.println("D'ont withdraw")  ;    
            }
            else{
                setcheckingbalance(getCheckingbalance()-withdrawAmount);
                totalAmount -= withdrawAmount;
            }


        }
        if(type=="saving"){
            if(getSavingbalance()< withdrawAmount){
                System.out.println("D'ont withdraw") ;
            }
            else{
                setsavingbalance(getSavingbalance()-withdrawAmount);
                totalAmount -= withdrawAmount;
            }
        }
    }

    public double Totalmoney() {
        double totalmoney= checking_balance + saving_balance;
       
        
        System.out.println(totalmoney);
        return(totalmoney);
    }



    // GETTERS & SETTERS  - 
    public double getCheckingbalance() {
        return this.checking_balance;
    }
    public double getSavingbalance() {
        return this.saving_balance;
    }
    public void setcheckingbalance(double checking_balance){
        this.checking_balance=checking_balance;

    }
    public void setsavingbalance(double saving_balance){
        this.saving_balance=saving_balance;
    }
    
}