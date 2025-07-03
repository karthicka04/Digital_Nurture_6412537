package org.dependency_injection;

import java.util.ArrayList;
import java.util.List;

public class BookingService3 {
    private final List<String> bookings = new ArrayList<>();
    private NotificationService notificationService;

    public void setNotificationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void book(String name) {
        bookings.add(name);
        System.out.println("Booked: " + name);
        notificationService.send("Ticket booked for " + name);
    }

    public void cancel(String name) {
        if (bookings.remove(name)) {
            System.out.println("Cancelled: " + name);
            notificationService.send("Booking cancelled for " + name);
        } else {
            System.out.println("No booking found for " + name);
        }
    }

    public void listAll() {
        System.out.println("Current Bookings: " + bookings);
    }
}
