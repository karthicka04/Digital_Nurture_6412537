package org.bookingapp;

public class App {
    private BookingService bookingService;

    // Setter injection
    public void setBookingService(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    public void run() {
        bookingService.book("Karthi");
        bookingService.book("Fio");
        bookingService.cancel("Fio");
        bookingService.showAll();
    }
}
