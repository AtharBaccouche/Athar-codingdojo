package com.athar.newproject;

public class Bat extends Mammal {
	
	public void fly() {
		System.out.println("The sound of a bat taking");
		this.setEnergyLevel(this.getEnergyLevel() - 50);
	}
	public void eatHumans() {
		System.out.println("The so-well never mind");
		this.setEnergyLevel(this.getEnergyLevel() +25);
	}
	public void attackTown() {
		System.out.println("the sound in tne town in fire");
		this.setEnergyLevel(this.getEnergyLevel() - 100);
	}
	
}
