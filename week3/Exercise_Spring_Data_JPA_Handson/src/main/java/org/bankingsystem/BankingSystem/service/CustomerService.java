package org.bankingsystem.BankingSystem.service;

import org.bankingsystem.BankingSystem.entity.Customer;
import org.bankingsystem.BankingSystem.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository repo;

    public CustomerService(CustomerRepository repo) {
        this.repo = repo;
    }

    public Customer addCustomer(Customer customer) {
        return repo.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return repo.findAll();
    }

    public Customer getCustomerByEmail(String email) {
        return repo.findByEmail(email);
    }
}
