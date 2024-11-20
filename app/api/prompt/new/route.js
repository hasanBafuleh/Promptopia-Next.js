import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  try {
    // Parse the request body
    const { userId, prompt, tag } = await request.json();

    // Validate the input
    if (!userId || !prompt || !tag) {
      return new Response("Missing required fields: userId, prompt, or tag", {
        status: 400,
      });
    }

    // Connect to the database
    await connectToDB().catch((err) => {
      console.error("Database connection error:", err);
      throw new Error("Failed to connect to the database");
    });

    // Create a new prompt document
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    // Save the new prompt to the database
    await newPrompt.save();

    // Return the newly created prompt as a response
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error creating a new prompt:", error);

    // Return a 500 response for server errors
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
