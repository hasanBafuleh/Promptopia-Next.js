import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    // Set appropriate cache control headers
    const responseHeaders = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // This disables caching
    };

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
