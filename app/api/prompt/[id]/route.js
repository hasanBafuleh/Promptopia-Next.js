import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET - Fetch the prompt by ID
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt)
      return new Response(JSON.stringify({ message: "Prompt Not Found" }), {
        status: 404,
      });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.error("Error fetching prompt:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

// PATCH - Update the prompt by ID
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  // Validate the data
  if (!prompt || !tag) {
    return new Response(
      JSON.stringify({ message: "Prompt and tag are required" }),
      { status: 400 }
    );
  }

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }

    // Update the prompt
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(
      JSON.stringify({ message: "Successfully updated the prompt" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating prompt:", error);
    return new Response(JSON.stringify({ message: "Error updating prompt" }), {
      status: 500,
    });
  }
};

// DELETE - Delete the prompt by ID
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const result = await Prompt.findByIdAndDelete(params.id);
    if (!result) {
      return new Response(JSON.stringify({ message: "Prompt not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Prompt deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return new Response(JSON.stringify({ message: "Error deleting prompt" }), {
      status: 500,
    });
  }
};
