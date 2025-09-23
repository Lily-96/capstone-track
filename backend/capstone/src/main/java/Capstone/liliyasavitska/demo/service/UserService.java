package Capstone.liliyasavitska.demo.service;

import Capstone.liliyasavitska.demo.dto.NewUserDTO;
import Capstone.liliyasavitska.demo.model.User;
import Capstone.liliyasavitska.demo.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Data
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Value("${admin.fullName}")
    private String adminFullName;

    @org.springframework.beans.factory.annotation.Value("${admin.email}")
    private String adminEmail;
    @Value("${ADMIN_NOME}")
    private String adminNome;

    @Value("${ADMIN_COGNOME}")
    private String adminCognome;

    @org.springframework.beans.factory.annotation.Value("${admin.password}")
    private String adminPassword;

    // Creare admin
    @PostConstruct
    public void initAdmin() {
        if (userRepository.findByEmail(adminEmail).isEmpty()) {
            User admin = User.builder()
                    .fullName(adminNome + " " + adminCognome)
                    .email(adminEmail)
                    .password(passwordEncoder.encode(adminPassword))
                    .build();

            userRepository.save(admin);
            System.out.println("✅ Admin creato: " + adminEmail);
        }
    }


    // Trova tutti gli utenti con paginazione
    public Page<User> findAll(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return userRepository.findAll(pageable);
    }

    // Trova utente per id
    public User findUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("User con id " + id + " non trovato"));
    }

    // Trova utente per email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("User con email " + email + " non trovato"));
    }

    // Salva un nuovo utente
    public User saveUser(NewUserDTO payload) {
        userRepository.findByEmail(payload.email()).ifPresent(user -> {
            throw new IllegalArgumentException("L'email " + user.getEmail() + " appartiene già ad un altro utente");
        });

        User newUser = User.builder()
                .fullName(payload.fullName())
                .email(payload.email())
                .password(passwordEncoder.encode(payload.password()))
                .build();

        return userRepository.save(newUser);
    }

    // Aggiorna un utente
    public User updateUser(Long id, NewUserDTO payload) {
        User found = findUserById(id);

        if (!found.getEmail().equals(payload.email()))
            userRepository.findByEmail(payload.email()).ifPresent(u -> {
                throw new IllegalArgumentException("L'email " + u.getEmail() + " appartiene già ad un altro utente");
            });

        found.setFullName(payload.fullName());
        found.setEmail(payload.email());
        found.setPassword(passwordEncoder.encode(payload.password()));


        return userRepository.save(found);
    }

    // Elimina un utente
    public void deleteUser(Long id) {
        User found = findUserById(id);
        userRepository.delete(found);
    }

}
