import client from "../db/db.js";

export async function registerUser(formData) {
    const { username, password, birthdate, role } = formData;

    const query = `
        INSERT INTO users (username, password, birthdate, role)
        VALUES ($1, $2, $3, $4)
    `;

    try {
        await client.queryArray(query, username, password, birthdate, role);
        console.log("User registered successfully.");
        return new Response("User registered successfully.", { status: 200 });
    } catch (error) {
        console.error("Error registering user:", error);
        return new Response("Failed to register user.", { status: 500 });
    }
}