# SendGrid Email Setup Guide

This guide will help you set up SendGrid for handling contact form submissions in your Next.js portfolio.

## 1. Create a SendGrid Account

1. Go to [SendGrid](https://sendgrid.com/) and create a free account
2. Verify your email address

## 2. Create an API Key

1. In your SendGrid dashboard, go to **Settings** > **API Keys**
2. Click **Create API Key**
3. Choose **Restricted Access** and give it a name (e.g., "Portfolio Contact Form")
4. Under **Mail Send**, select **Full Access**
5. Click **Create & View**
6. Copy the API key (you won't be able to see it again!)

## 3. Set Up Sender Authentication

### Option A: Single Sender Verification (Easiest for personal use)
1. Go to **Settings** > **Sender Authentication**
2. Click **Single Sender Verification**
3. Add your email address (the one you want to send emails FROM)
4. Fill in the required information
5. Verify the email address when you receive the verification email

### Option B: Domain Authentication (Recommended for production)
1. Go to **Settings** > **Sender Authentication**
2. Click **Domain Authentication**
3. Follow the instructions to authenticate your domain

## 4. Environment Variables

Create a `.env.local` file in your project root with:

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=your_verified_sender_email@example.com
TO_EMAIL=your_receiving_email@example.com
```

### Variable Explanations:
- `SENDGRID_API_KEY`: The API key you created in step 2
- `FROM_EMAIL`: The email address you verified in step 3 (must be verified in SendGrid)
- `TO_EMAIL`: Where you want to receive contact form submissions (can be any email)

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email for the message

## 6. Troubleshooting

### Common Issues:

1. **"Unauthorized" error**: Check your API key is correct
2. **"The from address does not match a verified Sender Identity"**: Make sure your FROM_EMAIL is verified in SendGrid
3. **No email received**: Check spam folder and ensure TO_EMAIL is correct

### Testing in Development:
- SendGrid allows 100 free emails per day
- You can test with any email addresses once sender verification is complete

## 7. Production Deployment

When deploying to Vercel/Netlify/etc.:
1. Add the same environment variables in your hosting platform's environment settings
2. Make sure all variables are properly set
3. Test the contact form after deployment

## Features Included:

✅ **Form Validation**: Client and server-side validation with Zod
✅ **Email Templates**: Professional HTML email templates
✅ **Error Handling**: Comprehensive error handling for all scenarios
✅ **Toast Notifications**: User feedback with Sonner toast notifications
✅ **Reply-To Support**: Easy to reply directly to the sender
✅ **Rate Limiting Ready**: Easy to add rate limiting if needed
✅ **TypeScript**: Full type safety
✅ **Next.js 15 Compatible**: Uses App Router and modern Next.js features

## Security Notes:

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive data
- Consider adding rate limiting for production use
- The API key has restricted permissions for security

## Next Steps:

1. Set up your SendGrid account and get your API key
2. Add the environment variables
3. Test the contact form
4. Customize the email templates if needed
5. Deploy and enjoy your working contact form!
