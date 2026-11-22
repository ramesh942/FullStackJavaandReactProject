// Array of user objects
const users = [
    {
      name: "John Doe",
      address: "123 Main St, Springfield",
      phone: "123-456-7890",
      dob: "1990-01-01"
    },
    {
      name: "Jane Smith",
      address: "456 Elm St, Shelbyville",
      phone: "987-654-3210",
      dob: "1985-05-15"
    },
    {
      name: "Alice Johnson",
      address: "789 Oak St, Capital City",
      phone: "555-123-4567",
      dob: "1992-09-10"
    }
  ];
  
  // Function to display user details
  function displayUsers(userArray) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Clear existing content
  
    userArray.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
  
      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Address:</strong> ${user.address}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Date of Birth:</strong> ${user.dob}</p>
      `;
  
      userList.appendChild(userCard);
    });
  }
  
  // Call the function to display users
  displayUsers(users);