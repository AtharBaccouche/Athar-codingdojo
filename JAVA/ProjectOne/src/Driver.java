
public class Driver extends Car {
	 public void drive(){
	        System.out.println("You drive the car");
	        gas--;
	        display();
	    }

	    public void boost(){
	        System.out.println("You use the boosters");
	        gas-=3;
	        display();
	    }

	    public void refuel(){
	        System.out.println("You refuel");
	        gas+=2;
	        display();
	    }

}
