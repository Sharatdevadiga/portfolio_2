import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(2, 'Subject must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);
    
    // Check if required environment variables are set
    if (!process.env.SENDGRID_API_KEY || !process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { 
          message: 'Server configuration error. Please try again later.',
          success: false 
        },
        { status: 500 }
      );
    }

    // Create email content
    const msg = {
      to: process.env.TO_EMAIL, // Your email address where you want to receive messages
      from: process.env.FROM_EMAIL, // Must be a verified sender in SendGrid
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #4F46E5; margin: 10px 0;">
              ${validatedData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #666;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      replyTo: validatedData.email, // Allow you to reply directly to the sender
    };

    // Send email using SendGrid
    await sgMail.send(msg);
    
    return NextResponse.json(
      { 
        message: 'Thank you for your message! I will get back to you soon.',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Validation failed',
          errors: error.errors,
          success: false 
        },
        { status: 400 }
      );
    }
    
    // SendGrid specific error handling
    if (error && typeof error === 'object' && 'response' in error) {
      const sendGridError = error as { response?: { body?: unknown }; message?: string };
      console.error('SendGrid error:', sendGridError.response?.body || sendGridError.message);
      return NextResponse.json(
        { 
          message: 'Failed to send email. Please try again later.',
          success: false 
        },
        { status: 500 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        message: 'Something went wrong. Please try again later.',
        success: false 
      },
      { status: 500 }
    );
  }
}
