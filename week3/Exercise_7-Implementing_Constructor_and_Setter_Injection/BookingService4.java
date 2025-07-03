package org.constructor_setter;

import java.util.ArrayList;
import java.util.List;

public class BookingService4 {
    private final PaymentService paymentService;
    private final List<String> bookings = new ArrayList<>();
    private final int price = 250;


    public BookingService4(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void book(String name) {
        if (paymentService.processPayment(name, price)) {
            bookings.add(name);
            System.out.println("Booking confirmed for: " + name);
        } else {
            System.out.println("Payment failed for: " + name);
        }
    }

    public void listAll() {
        System.out.println("All bookings: " + bookings);
    }
}
