package com.thoughts.SpringThoughtsPosts;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<PostModel, Integer>{

}