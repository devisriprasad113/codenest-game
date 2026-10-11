package com.codenest.repository;

import com.codenest.model.Submission;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface SubmissionRepository extends MongoRepository<Submission, String> {
    List<Submission> findByUserIdOrderByTimestampDesc(String userId);
}
