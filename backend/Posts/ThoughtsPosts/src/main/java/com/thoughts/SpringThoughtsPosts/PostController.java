package com.thoughts.SpringThoughtsPosts;
import java.util.List;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/Thoughts")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	private Vector<PostModel> postvector = new Vector<>();
	
	@PostMapping("/")
	public PostModel createpost(@RequestBody PostModel postmodel) {
		
		PostModel post = this.postService.addPost(postmodel);
		postvector.add(post);
		
		return post;
		
	}
	

	@GetMapping("/posts")
    public List<PostModel> getPosts() {
        return postService.getAllPosts();
    }

}

