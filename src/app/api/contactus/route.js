import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email, name, message, phone } = await request.json();
  console.log(email, name, message, phone);
  console.log("email, name, message, phone");
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "haseeb@mobiusstudios.co",
        pass: "bfdr izvl wdqu tmlv",
      },
    });

    const mailOptions = {
      from: "haseeb@mobiusstudios.co",
      to: "haseeb@mobiusstudios.co",
      subject: "Contact Form Submission",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p> 
        <p><strong>Project Description:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log(error, "error");
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Error sending email:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
