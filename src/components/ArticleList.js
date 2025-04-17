import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
    return (
        <main>
            {blogData.posts.map((post) => (
                <Article 
                    key={post.id}
                    post={post}
                />
            ))}
        </main>
    );
}

export default ArticleList;