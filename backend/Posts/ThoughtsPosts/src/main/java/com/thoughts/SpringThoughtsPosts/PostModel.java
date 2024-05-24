package com.thoughts.SpringThoughtsPosts;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name = "Posts")
public class PostModel {
	
	
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE)
	private int Id;
	
	
	private String name;
	
	private int time;
	
	private int likes;
	
	private String postContent;
	
	@Override
	public String toString() {
		return "PostModel [Id=" + Id + ", name=" + name + ", time=" + time + ", likes=" + likes + ", postContent="
				+ postContent + ", comments=" + comments + ", imageUrl=" + imageUrl + "]";
	}

	public PostModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PostModel(int id, String name, int time, int likes, String postContent, int comments, String imageUrl) {
		super();
		Id = id;
		this.name = name;
		this.time = time;
		this.likes = likes;
		this.postContent = postContent;
		this.comments = comments;
		this.imageUrl = imageUrl;
	}

	private int comments;
	
	private String imageUrl;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public String getPostContent() {
		return postContent;
	}

	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}

	public int getComments() {
		return comments;
	}

	public void setComments(int comments) {
		this.comments = comments;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	

}
