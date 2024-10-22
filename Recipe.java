import java.util.HashMap;
import java.util.Map;

public class Ingredient {
    private String name;
    private double quantity;
    private String unit;

    // Static database of common ingredients
    private static final Map<String, Ingredient> ingredientDatabase = new HashMap<>();

    static {
        ingredientDatabase.put("Sugar", new Ingredient("Sugar", 0, "grams"));
        ingredientDatabase.put("Flour", new Ingredient("Flour", 0, "grams"));
        ingredientDatabase.put("Salt", new Ingredient("Salt", 0, "grams"));
        ingredientDatabase.put("GroundBeef", new Ingredient("GroundBeef", 0, 
    }

    // Constructor
    public Ingredient(String name, double quantity, String unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }

    // Getters
    public String getName() {
        return name;
    }

    public double getQuantity() {
        return quantity;
    }

    public String getUnit() {
        return unit;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    // Method to get an ingredient from the database
    public static Ingredient getIngredient(String name) {
        return ingredientDatabase.get(name);
    }

    // toString method for easy printing
    @Override
    public String toString() {
        return quantity + " " + unit + " of " + name;
    }
}

