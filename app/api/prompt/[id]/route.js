import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async (req, { params }) => {
  try {
    await connectToDB()
    const prompt = await Prompt.findById(params.id).populate("creator")

    if (!prompt) {
      return new Response("Prompt not found.", { status: 404 })
    }
    return new Response(JSON.stringify(prompt), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch", { status: 500 })
  }
}

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json()
  try {
    await connectToDB()
    const eprompt = await Prompt.findById(params.id)

    if (!eprompt) {
      return new Response("Prompt not found.", { status: 404 })
    }

    eprompt.prompt = prompt
    eprompt.tag = tag

    await eprompt.save()
    return new Response(JSON.stringify(eprompt), { status: 200 })
  } catch (error) {
    return new Response("Failed to update", { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB()
    await Prompt.findByIdAndRemove(params.id)

    return new Response("Deleted successfully.", { status: 200 })
  } catch (error) {
    return new Response("Failed to delete.", { status: 500 })
  }
}
