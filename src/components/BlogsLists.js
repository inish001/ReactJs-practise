import React from 'react'

function BlogsLists({blogs,title}) {   // destructring props in the parameter
    // let blogs = props.blogs
    // let title = props.title
  return (
    <div>
        <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
              {/* creating a button to delete blogs */}
              {/* <button onClick={()=>deleteHandler(blog.id)}>Delete Blog</button> */}
            </div>
        ))}
        </div>
  )
}

export default BlogsLists
