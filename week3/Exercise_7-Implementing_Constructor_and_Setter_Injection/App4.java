package org.constructor_setter;

public class App4 {
    private BookingService4 bookingService;

   
    public void setBookingService(BookingService4 bookingService) {
        this.bookingService = bookingService;
    }

    public void run() {
        bookingService.book("Karthi");
        bookingService.book("Fio");
        bookingService.listAll();
    }
}
