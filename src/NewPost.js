const NewPost = ({handleSubmit , postTitle , setPostTitle , postBody , setPostBody}) => {
    return ( 
        <main className="NewPost">
            <h1>NewPost</h1> 
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title : </label>    
                <input 
                    id="postTitle" 
                    type="text" 
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}/>
                <label htmlFor="postBody">Post :</label>
                <input 
                    id="postBody"
                    type="text" 
                    style={{ width: '1000px' , height:'200px' }} // Correctly set the style attribute as an object
                    required 
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                    <button type="submit">Submit</button>
            </form>
        </main>
    )
} 
export default NewPost
