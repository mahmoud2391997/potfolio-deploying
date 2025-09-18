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
    console.log('📧 Starting email process...')
    console.log('Environment check:')
    console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Missing')
    console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Missing')
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Missing email configuration')
    }

    console.log('Creating transporter...')
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    console.log('Sending email...')
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "mahmoudmelsaid1@gmail.com",
      subject: `New Contact Message - ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    })

    console.log('✅ Email sent successfully')
    res.status(200).json({ message: "Message sent successfully ✅" })
  } catch (error: any) {
    console.error('❌ DETAILED ERROR:')
    console.error('Error name:', error.name)
    console.error('Error message:', error.message)
    console.error('Error code:', error.code)
    console.error('Full error:', error)
    
    res.status(500).json({
      message: "Server error. Please try again later.",
      error: error.message || "Failed to send message",
    })
  }
}