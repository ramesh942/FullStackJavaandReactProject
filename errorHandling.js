//Error handling in JavaScript is a crucial aspect of writing robust and reliable code. 
//It involves anticipating potential errors that may occur during the execution of your program and implementing strategies to handle them gracefully. 
// Here are some key concepts and techniques for error handling in JavaScript:
//block name (try/cathch/finally & respons.ok) = // The try/catch/finally block is a fundamental construct for error handling in JavaScript. It allows you to wrap code that may throw an error in a try block, catch any errors that occur in a catch block, and execute cleanup code in a finally block regardless of whether an error occurred or not.
//try: Run risky code(like netword API call)
//catch: catch any crash or Throw error inside try so yow can show user friendly message insted of crashing the app
//finally: Runs Every single time at the end (wheter try suceeded or failed ) ideal for hiding a 'Loading' spinner or cleaning up resources

// respons.ok & throw new Error () : By default , fetch() only reject  if the internet is completly disconnected or the request is blocked by the browser. It does not reject for HTTP error status codes (like 404 or 500). To handle such cases, you can check the response.ok property, which is true if the response status code is in the range 200-299. If it's false, you can throw a new Error to indicate that something went wrong with the request.

const fetchUserProfile = async (userId) => {
    let isLoading = true;
    console.log("Loading user profile...");
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
     
        }
        const data = await response.json();
        console.log("User Profile Data:", data);
    }
    catch (error) {
        console.error("Error fetching user profile:", error.message);
    }
    finally {
        isLoading = false;
        console.log("Finished loading user profile.");
    }

}

fetchUserProfile(999); // Fetch user profile for user with ID 1