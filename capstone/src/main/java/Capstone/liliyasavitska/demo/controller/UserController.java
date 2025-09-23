package Capstone.liliyasavitska.demo.controller;

import Capstone.liliyasavitska.demo.dto.NewUserDTO;
import Capstone.liliyasavitska.demo.model.User;
import Capstone.liliyasavitska.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public Page<User> getAll(@RequestParam int page, @RequestParam int size) {
        return userService.findAll(page, size);
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody NewUserDTO payload) {
        return userService.saveUser(payload);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody NewUserDTO payload) {
        return userService.updateUser(id, payload);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
