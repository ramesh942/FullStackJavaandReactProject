const currentUser = {
    id:508,
    fullName: "John Doe",
    email:"Jhon@example.com",
    role:"Admin",
    isVerifoied:true,
}

// step 1: Object Destructuring
const {fullName,role} = currentUser;
console.log("Full Name:", fullName, "Role:", role); // Output: Full Name: John Doe Role: Admin

// step 2: Object Spread
const updatedUser = {
    ...currentUser,
    role: "Super Admin",
    isVerifoied:false,
}

console.log("Original User:", currentUser.role);
console.log("Updated User:", updatedUser);