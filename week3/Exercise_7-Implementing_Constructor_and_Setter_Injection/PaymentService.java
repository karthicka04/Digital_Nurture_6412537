package org.constructor_setter;

public class PaymentService {
    public boolean processPayment(String name, int amount) {
        System.out.println("Processing ₹" + amount + " payment for " + name);
        return true; // Simulate success
    }
}
