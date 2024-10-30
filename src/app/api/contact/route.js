import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, companyName, phoneNumber, email, comment } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Company: ${companyName}
      Phone: ${phoneNumber}
      Email: ${email}
      Comment: ${comment}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
