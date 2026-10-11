package com.codenest.controller;

import com.codenest.model.Level;
import com.codenest.model.User;
import com.codenest.repository.LevelRepository;
import com.codenest.service.ChallengeService;
import com.codenest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/game")
public class GameController {

    @Autowired
    private UserService userService;

    @Autowired
    private LevelRepository levelRepository;

    @Autowired
    private ChallengeService challengeService;

    private String getAuthenticatedUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @GetMapping("/progress")
    public ResponseEntity<?> getProgress() {
        String username = getAuthenticatedUsername();
        if ("anonymousUser".equals(username)) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        User user = userService.findByUsername(username).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @PostMapping("/run-code")
    public ResponseEntity<?> runCode(@RequestBody Map<String, String> payload) {
        String levelId = payload.get("levelId");
        String language = payload.get("language");
        String code = payload.get("code");

        Level level = levelRepository.findById(levelId).orElse(null);
        if (level == null) {
            return ResponseEntity.badRequest().body("Invalid Level ID: " + levelId);
        }

        ChallengeService.ValidationResult result = challengeService.validateCode(level, language, code);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/complete")
    public ResponseEntity<?> completeLevel(@RequestBody Map<String, Object> payload) {
        String levelId = (String) payload.get("levelId");
        int stars = (Integer) payload.get("stars");

        Level level = levelRepository.findById(levelId).orElse(null);
        if (level == null) {
            return ResponseEntity.badRequest().body("Invalid Level ID: " + levelId);
        }

        // Rewards scale with difficulty
        int goldReward = "Hard".equalsIgnoreCase(level.getDifficulty()) ? 200 : "Medium".equalsIgnoreCase(level.getDifficulty()) ? 100 : 50;
        int xpReward = "Hard".equalsIgnoreCase(level.getDifficulty()) ? 150 : "Medium".equalsIgnoreCase(level.getDifficulty()) ? 80 : 40;

        String username = getAuthenticatedUsername();
        User updatedUser = userService.completeLevel(username, levelId, stars, goldReward, xpReward);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("user", updatedUser);
        response.put("goldReward", goldReward);
        response.put("xpReward", xpReward);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/buy-hint")
    public ResponseEntity<?> buyHint(@RequestBody Map<String, Object> payload) {
        String levelId = (String) payload.get("levelId");
        int hintIndex = (Integer) payload.get("hintIndex");
        int cost = (Integer) payload.get("cost");

        Level level = levelRepository.findById(levelId).orElse(null);
        if (level == null) {
            return ResponseEntity.badRequest().body("Invalid Level ID: " + levelId);
        }

        if (hintIndex < 0 || hintIndex >= level.getHints().size()) {
            return ResponseEntity.badRequest().body("No more hints available for this level.");
        }

        String username = getAuthenticatedUsername();
        try {
            User updatedUser = userService.buyHint(username, levelId, cost);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("hint", level.getHints().get(hintIndex));
            response.put("user", updatedUser);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/profile/avatar")
    public ResponseEntity<?> updateProfileAvatar(@RequestBody Map<String, String> payload) {
        String avatar = payload.get("avatar");
        String username = getAuthenticatedUsername();
        try {
            User updatedUser = userService.updateAvatar(username, avatar);
            return ResponseEntity.ok(updatedUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/profile/update")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, Object> payload) {
        String currentUsername = getAuthenticatedUsername();
        try {
            String newUsername = (String) payload.get("username");
            String fullName = (String) payload.get("fullName");
            String location = (String) payload.get("location");
            String work = (String) payload.get("work");
            String education = (String) payload.get("education");
            String website = (String) payload.get("website");
            String bio = (String) payload.get("bio");
            java.util.List<String> skills = (java.util.List<String>) payload.get("skills");

            User updatedUser = userService.updateProfile(currentUsername, newUsername, fullName, location, work, education, website, bio, skills);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PostMapping("/claim-achievement")
    public ResponseEntity<?> claimAchievement(@RequestBody Map<String, String> payload) {
        String achievementId = payload.get("achievementId");
        if (achievementId == null || achievementId.isEmpty()) {
            return ResponseEntity.badRequest().body("Achievement ID is required");
        }
        
        String username = getAuthenticatedUsername();
        try {
            User updatedUser = userService.claimAchievement(username, achievementId);
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("user", updatedUser);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
