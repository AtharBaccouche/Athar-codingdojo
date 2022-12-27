package com.athar.newproject;

public class Gorella  extends Mammal{
	public void throwSomething() {
		System.out.println("The Gorella throw something");
		this.setEnergyLevel(this.getEnergyLevel() - 5);
	}
	public  void eatBanans() {
		System.out.println("the Gorella eat Banans");
		this.setEnergyLevel(this.getEnergyLevel() +10);
	}
	public void climb() {
		System.out.println("the Gorella climb tree");
		this.setEnergyLevel(this.getEnergyLevel() - 10);
	}

}
