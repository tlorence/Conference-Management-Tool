package com.af.Repositories;

import com.af.Model.Conference;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConferenceRepository extends MongoRepository<Conference,String> {
}
