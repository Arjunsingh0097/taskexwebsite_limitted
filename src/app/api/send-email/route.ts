import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phoneNumber, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phoneNumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'taskextaskex@gmail.com',
        pass: process.env.GMAIL_PASS || 'liau nfdx blve jdzv', // App password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'taskextaskex@gmail.com',
      to: process.env.RECIPIENT_EMAIL || 'Jay.malhan@Taskex.in',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1acb97;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            ${message ? `<p><strong>Message:</strong></p><p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1acb97;">${message}</p>` : ''}
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2d5a2d;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <hr style="border: none; border-top: 2px solid #1acb97; margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            This email was sent from the Taskex website contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phoneNumber}
        ${message ? `Message: ${message}` : ''}
        
        Submitted: ${new Date().toLocaleString()}
        
        This email was sent from the Taskex website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
