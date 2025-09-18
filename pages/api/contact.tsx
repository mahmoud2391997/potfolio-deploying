import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ResponseData = {
  message: string
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, subject, message }: ContactFormData = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Missing required fields",
      error: "Please fill in all required fields",
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
      error: "Please provide a valid email address",
    })
  }

  try {
    // Create transporter using Gmail SMTP
    // Note: You'll need to set up environment variables for this to work
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "mahmoudmelsaid1@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || "mahmoudmelsaid1@gmail.com",
      to: "mahmoudmelsaid1@gmail.com", // Your email where you want to receive messages
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">From:</h3>
              <p style="color: #666; margin: 0; font-size: 16px;"><strong>${name}</strong></p>
              <p style="color: #666; margin: 5px 0 0 0;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">Subject:</h3>
              <p style="color: #666; margin: 0; font-size: 16px;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea;">
                <p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
              </p>
            </div>
          </div>
        </div>
      `,
      // Also send a plain text version
      text: `
        New Contact Form Submission
        
        From: ${name} (${email})
        Subject: ${subject}
        
        Message:
        ${message}
        
        Sent on: ${new Date().toLocaleString()}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Optional: Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.GMAIL_USER || "mahmoudmelsaid1@gmail.com",
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank You!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I'll get back to you as soon as possible.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to check out my work on my portfolio or connect with me on LinkedIn.
            </p>
            
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://www.linkedin.com/in/mahmoud-elsayed-17293b29b/" 
                 style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Connect on LinkedIn
              </a>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Mahmoud Mohamed Elsayed</strong><br>
              Full Stack Developer
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 14px; margin: 0;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(autoReplyOptions)

    res.status(200).json({ message: "Email sent successfully!" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({
      message: "Failed to send email",
      error: "Please try again later or contact me directly at mahmoudmelsaid1@gmail.com",
    })
  }
}
