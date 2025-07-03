package org.bookingapp;

public class PaymentService {
    public boolean process(String user, int amount) {
        System.out.println("Processing ₹" + amount + " for " + user);
        return true;
    }
}
