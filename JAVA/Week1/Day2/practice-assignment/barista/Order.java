import java.util.ArrayList;
    
// Here we're creating a new data type called Order
public class Order {
    
    // MEMBER VARIABLES
    private String name; // default value of null
    private boolean ready; // default value false
    private ArrayList <Item> items=new ArrayList <Item>() ; // defaults to null
    
    // CONSTRUCTOR
    // No arguments, sets name to "Guest", initializes items as an empty list.
    public Order(){
        this.name="Guest";
        this.ready=false;
        
    }
    // OVERLOADED CONSTRUCTOR
    // Takes a name as an argument, sets name to this custom name.
    // Initializes items as an empty list.
    public Order(String name){
        this.name=name;
        this.ready=false;
    }
    
    // ORDER METHODS
    
    	// Most of your code will go here, 
    	// so implement the getters and setters first!

    public void addItem(Item item ){
        this.items.add(item);
    }
    
    public String getStatusMessage(){
        if(this.ready=true){
            return("your order is ready");
        }
        else {
        return ("Thank you for waiting");
        }

    }
    

    public double getOrderTotal(){
        double sum=0.0;
        for(Item item: this.items){
            sum=sum+ item.getPrice();
        }
        return sum;

    }
    public void  display(){
        System.out.println("Customer name  "  + this.name );
        for(Item item:this.items){
            System.out.println(item.getName() + "- $" + item.getPrice()) ; 

        }
        System.out.println("Total: $" + this.getOrderTotal());
    }




    
    // GETTERS & SETTERS
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public boolean getReady(){
        return this.ready;
    }

    public void setReady( boolean ready){
        this.ready=ready;

    }
    public ArrayList<Item> getItem(){
        return this.items;
    }
    public void setItem(ArrayList<Item> items){
        this.items=items;
    }
}

