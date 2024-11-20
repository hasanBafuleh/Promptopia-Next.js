import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const revalidate = 0;

export const GET = async (request) => {
  try {
    // Attempt to connect to the database
    await connectToDB().catch((err) => {
      console.error("Database connection error:", err);
      throw new Error("Failed to connect to the database");
    });

    // Fetch prompts and populate the creator field
    const prompts = await Prompt.find({}).populate("creator").lean();

    // Return the prompts as a JSON response
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching prompts:", error);

    // Return a 500 response with the error message
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
