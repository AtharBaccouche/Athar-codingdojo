import java.util.ArrayList;

public class TestOrder{
    public static void main(String[] args) {

        Item item1 = new Item("cappucino", 3.5);
        Item item2 = new Item("Express", 2.5);
        Item item3 = new Item("Latte", 1.5);
        Item item4 = new Item("Direct Coffee", 0.5);



        Order order1=new Order();
        Order order2=new Order();


        Order order3=new Order("Athar");
        Order order4=new Order("Safa");
        Order order5=new Order("Henda");


       
        order3.addItem(item1);
        order3.addItem(item2);
        order2.addItem(item3);
        order2.addItem(item4);
        order4.addItem(item3);
        order4.addItem(item2);

        order2.setReady(true);
        System.out.println(order2.getStatusMessage());


        System.out.println("*************************");
        System.out.println (order4.getOrderTotal());

        System.out.println("*************************");
        order3.display();

        System.out.println("*************************");
        order1.display();

        




    }





}