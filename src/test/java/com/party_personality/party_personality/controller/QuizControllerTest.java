package com.party_personality.party_personality.controller;

import com.party_personality.party_personality.model.QuizResult;
import com.party_personality.party_personality.service.QuizService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.HashMap;
import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(QuizController.class)
public class QuizControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private QuizService quizService;

    // This configuration class provides our mock bean
    @Configuration
    @Import(QuizController.class) // Import the controller we want to test
    static class TestConfig {
        @Bean
        public QuizService quizService() {
            return Mockito.mock(QuizService.class);
        }
    }

    @Test
    public void submitQuizShouldReturnOk() throws Exception {
        // Given
        Map<String, String> answers = new HashMap<>();
        answers.put("1", "A");
        answers.put("2", "B");

        QuizResult mockResult = new QuizResult();
        mockResult.setResultType("Life of the Party");

        when(quizService.processQuizAnswers(any())).thenReturn(mockResult);

        // When & Then
        mockMvc.perform(post("/api/quiz/submit")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"1\":\"A\",\"2\":\"B\"}"))
                .andExpect(status().isOk());
    }
}