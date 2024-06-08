import { deletePost, getById, updatePost } from "@/lib/common"
import { NextResponse } from "next/server"

export async function GET(request: Request, response: Response) {
    try {
        const id = request.url.split("blogs/")[1]
        const post = getById(id);
        if (!post) {
            return NextResponse.json({ message: "Error" }, { status: 404 })
        }
        return NextResponse.json({ message: "Ok", post }, { status: 200 })
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