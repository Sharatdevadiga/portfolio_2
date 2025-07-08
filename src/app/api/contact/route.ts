import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);
    
    // Here you would typically send an email using a service like SendGrid, Nodemailer, etc.
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData);
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
