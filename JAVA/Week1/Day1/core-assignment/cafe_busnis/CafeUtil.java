import java.util.ArrayList;
import java.util.Arrays;


public class CafeUtil {
    
    public  int getStreakGoal() {
        int sum=0;
        for (int i = 1; i <=10; i++) {
                sum=sum+i;
        }
        return sum;
    }
    

    public double getOrderTotal(double[] prices){

       
        double sum=0;
        for( double p : prices ){
            sum = sum +p;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems){

        for(int i=0; i<menuItems.size();i++){
            System.out.println(i);
            System.out.println(menuItems.get(i));
        }
       


    }
    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please inter your name");
        String userName = System.console().readLine();
        System.out.println("Hello,[username here]!");
        System.out.println("There are " + customers.size() +" people in front of you");
        customers.add("userName");



    }



}