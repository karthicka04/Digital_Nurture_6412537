package org.spring_ioc_container;

public class BookingApp2 {
    private BookingService2 bookingService;

    public void setBookingService(BookingService2 bookingService) {
        this.bookingService = bookingService;
    }

    public void run() {
        bookingService.checkAvailability();

        bookingService.book("karthi");
        bookingService.book("Fio");
        bookingService.book("Karthi");

        bookingService.cancel("Fio");

        bookingService.viewAll();

        bookingService.checkAvailability();

        bookingService.showTotalCost();
    }
}
