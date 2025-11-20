# EmailJS Setup Instructions for Alive Music Academy

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your preferred email provider
4. Connect your email account (aliveabraham@gmail.com)
5. Note down the **Service ID** (e.g., service_abc123)

## Step 3: Create Email Templates

### Template 1: Admin Notification (template_student_registration)
Create a new template with ID: `template_student_registration`

**Subject:** New Student Registration - {{student_name}}

**Content:**
```
Dear Abraham Sir,

A new student has registered for classes at Alive Music Academy.

{{formatted_details}}

Please contact the student as soon as possible to discuss their musical journey.

Best regards,
Alive Music Academy Website
```

### Template 2: Student Confirmation (template_student_confirmation)
Create a new template with ID: `template_student_confirmation`

**Subject:** Registration Confirmed - Welcome to Alive Music Academy!

**Content:**
```
Dear {{student_name}},

Thank you for your interest in Alive Music Academy!

Your registration for {{course_type}} has been received successfully.

What happens next:
✓ Abraham Sir will review your application
✓ You'll receive a call within 24 hours
✓ We'll schedule your free consultation
✓ Your musical journey begins!

Contact Information:
📞 Phone: {{academy_phone}}
📧 Email: {{academy_email}}

We look forward to helping you discover the joy of music!

Best regards,
Isai Kalaimani Abraham Sir
Alive Music Academy, Tiruvallur
```

## Step 4: Get Your Credentials
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., user_abc123xyz)
3. Note down your **Service ID** from Step 2
4. Note down your **Template IDs** from Step 3

## Step 5: Update Configuration
Update the following files with your actual credentials:

### src/services/emailService.js
```javascript
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'template_student_registration';
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
```

## Step 6: Test the Integration
1. Fill out the registration form on your website
2. Check if you receive the email at aliveabraham@gmail.com
3. Check if the student receives a confirmation email
4. Monitor the EmailJS dashboard for delivery status

## Template Parameters Available

### For Admin Email (template_student_registration):
- `{{student_name}}` - Full name
- `{{student_email}}` - Email address
- `{{student_phone}}` - Phone number
- `{{course_type}}` - Selected course
- `{{formatted_details}}` - Complete formatted registration details
- `{{submission_date}}` - Date and time of submission

### For Student Confirmation (template_student_confirmation):
- `{{student_name}}` - Student's name
- `{{course_type}}` - Selected course
- `{{academy_phone}}` - Academy phone number
- `{{academy_email}}` - Academy email

## Troubleshooting
- Ensure your email service is properly connected
- Check template IDs match exactly
- Verify public key is correct
- Check browser console for error messages
- Test with EmailJS dashboard first

## Free Tier Limits
- 200 emails per month
- Upgrade to paid plan if you need more

Your student registration form will now automatically send emails to aliveabraham@gmail.com whenever someone registers!