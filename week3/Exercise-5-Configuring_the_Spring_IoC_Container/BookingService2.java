package org.spring_ioc_container;

import java.util.ArrayList;
import java.util.List;

public class BookingService2 {
    private final List<String> bookings = new ArrayList<>();
    private final int totalSeats = 5;
    private final int ticketPrice = 200;

    public void book(String name) {
        if (bookings.size() < totalSeats) {
            bookings.add(name);
            System.out.println("[DI] Booked: " + name);
        } else {
            System.out.println("[DI] Booking failed! No seats available.");
        }
    }

    public void cancel(String name) {
        if (bookings.remove(name)) {
            System.out.println("[DI] Cancelled: " + name);
        } else {
            System.out.println("[DI] No booking found for: " + name);
        }
    }

    public void viewAll() {
        System.out.println("[DI] Bookings: " + bookings);
    }

    public void checkAvailability() {
        int remaining = totalSeats - bookings.size();
        System.out.println("[DI] Seats available: " + remaining);
    }

    public void showTotalCost() {
        int total = bookings.size() * ticketPrice;
        System.out.println("[DI] Total Revenue: ₹" + total);
    }
}
