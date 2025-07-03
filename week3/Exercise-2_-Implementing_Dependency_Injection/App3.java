package org.dependency_injection;

public class App3 {
    private BookingService3 bookingService;

    public void setBookingService(BookingService3 bookingService) {
        this.bookingService = bookingService;
    }

    public void run() {
        bookingService.book("Karthi");
        bookingService.book("Fio");
        bookingService.cancel("Fio");
        bookingService.listAll();
    }
}
