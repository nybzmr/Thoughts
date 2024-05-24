package com.thoughts.SpringThoughtsPosts;

import java.util.List;
import java.util.Vector;

public interface PostService {	
	
	PostModel addPost(PostModel postmodel);
	
	Vector<PostModel> getposts();

	List<PostModel> getAllPosts();


}