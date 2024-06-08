import { addPost, deletePost, getPost, updatePost } from "@/lib/common";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
    try {
        const posts = getPost()
        return NextResponse.json({ message: "Ok", posts }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

export async function POST(request: Request, response: Response) {
    const { title, description } = await request.json()
    try {
        const post = {
            title, description, date: new Date(), id: Date.now().toString()
        }
        addPost(post)
        return NextResponse.json({ message: "Ok", post }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

export async function PUT(request: Request, response: Response) {
    try {
        const { title, description } = await request.json();
        const id = request.url.split("blogs/")[1]
        updatePost(id, title, description)
        return NextResponse.json({ message: "Ok" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}

export async function DELETE(request: Request, response: Response) {
    try {
        const id = request.url.split("blogs/")[1]
        deletePost(id)
        return NextResponse.json({ message: "Ok" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}
