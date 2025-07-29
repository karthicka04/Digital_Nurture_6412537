package org.bankingsystem.BankingSystem.controller;

import org.bankingsystem.BankingSystem.entity.Customer;
import org.bankingsystem.BankingSystem.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        // Ensure ID is null for new entities to avoid merge conflicts
        customer.setId(null);
        return service.addCustomer(customer);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return service.getAllCustomers();
    }

    @GetMapping("/{email}")
    public Customer getCustomerByEmail(@PathVariable String email) {
        return service.getCustomerByEmail(email);
    }
}
