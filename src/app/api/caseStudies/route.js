import clientPromise from "@/libs/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mobius_projects");

    const data = await db.collection("caseStudies").find({}).toArray();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
