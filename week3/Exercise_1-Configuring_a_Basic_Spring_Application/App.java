package org.basic_spring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        BookingService booking = context.getBean("bookingService", BookingService.class);

        // Simulate use cases
        booking.book("karthi");
        booking.book("Fio");

        booking.viewStatus("karthi");

        booking.cancel("Fio");

        booking.viewStatus("Fio");

        booking.listAll();
    }
}
