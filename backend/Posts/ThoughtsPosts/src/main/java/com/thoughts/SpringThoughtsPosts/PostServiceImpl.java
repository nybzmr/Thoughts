package com.thoughts.SpringThoughtsPosts;

import java.util.List;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	

	@Override
	public PostModel addPost(PostModel postmodel) {
		// TODO Auto-generated method stub
		return this.postRepository.save(postmodel);
	}

	@Override
	public Vector<PostModel> getposts() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PostModel> getAllPosts() {
		// TODO Auto-generated method stub
		return postRepository.findAll();
	}

}

