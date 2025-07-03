package org.bookingapp;

import java.util.ArrayList;
import java.util.List;

public class BookingService {
    private final PaymentService paymentService; // Constructor Injection
    private NotificationService notificationService; // Setter Injection

    private final List<String> bookings = new ArrayList<>();
    private final int ticketPrice = 250;

    public BookingService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void setNotificationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void book(String name) {
        if (paymentService.process(name, ticketPrice)) {
            bookings.add(name);
            System.out.println("Booking confirmed for: " + name);
            notificationService.notify("Ticket booked for " + name);
        }
    }

    public void cancel(String name) {
        if (bookings.remove(name)) {
            System.out.println("Cancelled: " + name);
            notificationService.notify("Cancelled booking for " + name);
        } else {
            System.out.println("No booking found for " + name);
        }
    }

    public void showAll() {
        System.out.println("Current bookings: " + bookings);
    }
}
