package com.party_personality.party_personality.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MemoryController {

    @GetMapping("/memory")
    public Map<String, String> getMemoryInfo() {
        Runtime runtime = Runtime.getRuntime();

        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        long usedMemory = totalMemory - freeMemory;
        long maxMemory = runtime.maxMemory();

        Map<String, String> memoryInfo = new HashMap<>();
        memoryInfo.put("used_mb", String.format("%.2f", usedMemory / (1024.0 * 1024.0)));
        memoryInfo.put("free_mb", String.format("%.2f", freeMemory / (1024.0 * 1024.0)));
        memoryInfo.put("total_mb", String.format("%.2f", totalMemory / (1024.0 * 1024.0)));
        memoryInfo.put("max_mb", String.format("%.2f", maxMemory / (1024.0 * 1024.0)));
        memoryInfo.put("used_percentage", String.format("%.1f%%", (usedMemory * 100.0) / maxMemory));

        return memoryInfo;
    }
}
