package org.basic_spring;

import java.util.ArrayList;
import java.util.List;

public class BookingService {
    private final List<String> bookings = new ArrayList<>();

    public void book(String name) {
        bookings.add(name);
        System.out.println("Ticket booked for: " + name);
    }

    public void cancel(String name) {
        if (bookings.remove(name)) {
            System.out.println("Booking cancelled for: " + name);
        } else {
            System.out.println("No booking found for: " + name);
        }
    }

    public void viewStatus(String name) {
        if (bookings.contains(name)) {
            System.out.println("Status: " + name + " has an active booking.");
        } else {
            System.out.println("Status: No active booking for " + name);
        }
    }

    public void listAll() {
        System.out.println("All Bookings: " + bookings);
    }
}
