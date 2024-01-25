async function getAndFilterPostsByTitle(title) {
    try {
        // Fetch data from the mock API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response status is okay (200)
        if (!response.ok) {
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }

        // Parse the response JSON
        const posts = await response.json();

        // Filter posts based on the title
        const filteredPosts = posts.filter(post => post.title.includes(title));

        // Console the filtered posts
        console.log('Filtered Posts:', filteredPosts);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example: Get and filter posts with title containing 'sunt'
getAndFilterPostsByTitle('sunt');



