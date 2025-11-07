import clientPromise from "@/libs/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mobius_projects");

    const document = await db.collection("projectDetails").findOne({});
    const arrayData = document?.projectDetails || [];

    return new Response(JSON.stringify({ success: true, data: arrayData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
