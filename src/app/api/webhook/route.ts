import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();

	if (
		typeof json === "object" &&
		json &&
		"entry" in json &&
		typeof json.entry === "object" &&
		json.entry &&
		"slug" in json.entry &&
		typeof json.entry.slug === "string"
	) {
		console.log("Revalidate webhook triggered!!!", `/product/${json.entry.slug}`);
		revalidatePath(`/product/${json.entry.slug}`);
		revalidatePath(`/products`);
		return NextResponse.json({ message: "OK" }, { status: 200 });
	}

	return NextResponse.json({ message: "Invalid body, try again" }, { status: 400 });
}
