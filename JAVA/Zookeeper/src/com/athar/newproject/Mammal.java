package com.athar.newproject;

public class Mammal {
    private int energyLevel=500;
    
    public int displayEnergy() {
    	System.out.println("the animal s energy level is " + energyLevel);
    	return(energyLevel);
   
    }
    
    public int getEnergyLevel() {
		return this.energyLevel;
	}
	
	public void setEnergyLevel(int energy) {
		this.energyLevel = energy;
	}


}




