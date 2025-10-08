# Formspree Setup Guide - Complete Configuration

## 🎯 Your Formspree Endpoint
**Endpoint URL**: `https://formspree.io/f/xkgqvjkw`

## 📋 Forms Connected

### 1. Lead Form (AddLeadForm.js)
**Location**: Homepage "Submit a Lead" section
**Data Sent**:
```json
{
  "fullName": "John Doe",
  "companyName": "ABC Corp", 
  "designation": "CEO",
  "email": "john@abc.com",
  "mobile": "+1234567890",
  "hasReference": true,
  "referencePerson": "Jane Smith",
  "useReference": "use",
  "details": "Looking for IT services...",
  "submissionType": "Lead Referral",
  "notificationEmail": "shoaibfm1988@gmail.com",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "url": "https://referus.com/"
}
```

### 2. Chat Form - Live Chat (FloatingChatButton.js)
**Location**: Floating chat button (online mode)
**Data Sent**:
```json
{
  "type": "live_chat",
  "message": "Hello, I need help with...",
  "notificationEmail": "shoaibfm1988@gmail.com",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "url": "https://referus.com/"
}
```

### 3. Chat Form - Offline Message (FloatingChatButton.js)
**Location**: Floating chat button (offline mode)
**Data Sent**:
```json
{
  "type": "offline_message",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I have a question about...",
  "notificationEmail": "shoaibfm1988@gmail.com",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "url": "https://referus.com/"
}
```

## ⚙️ Formspree Configuration Steps

### Step 1: Access Your Form
1. Go to [formspree.io](https://formspree.io)
2. Log into your account
3. Find form ID: `xkgqvjkw`

### Step 2: Configure Email Notifications
1. **Go to Settings** → **Notifications**
2. **Add Email**: `shoaibfm1988@gmail.com`
3. **Enable Email Notifications**: ✅
4. **Notification Frequency**: Every submission

### Step 3: Set Up Auto-Responders (Optional)
1. **Go to Settings** → **Auto-Responders**
2. **Enable Auto-Responder**: ✅
3. **Subject**: "Thank you for your submission"
4. **Message**: 
   ```
   Hi there,
   
   Thank you for reaching out to Referus! We've received your message and will get back to you soon.
   
   Best regards,
   Referus Team
   ```

### Step 4: Configure Form Fields (Optional)
1. **Go to Settings** → **Fields**
2. **Add Custom Fields** if needed:
   - `submissionType` (Lead Referral, live_chat, offline_message)
   - `notificationEmail`
   - `timestamp`
   - `userAgent`
   - `url`

## 📧 Email Notification Setup

### Automatic Notifications
Every form submission will automatically send an email to `shoaibfm1988@gmail.com` with:
- All form data
- Submission timestamp
- User's browser info
- Page URL where form was submitted

### Email Template Customization
You can customize the email template in Formspree:
1. **Go to Settings** → **Email Templates**
2. **Customize Subject**: "New Referus Form Submission"
3. **Customize Body**: Include all relevant fields

## 🧪 Testing Your Forms

### Test Lead Form
1. Go to your website homepage
2. Scroll to "Submit a Lead" section
3. Fill out the form with test data:
   - Full Name: Test User
   - Company: Test Company
   - Email: test@example.com
   - Mobile: +1234567890
   - Details: This is a test submission
4. Click "Submit Lead"
5. **Expected Result**: 
   - Success message: "✅ Thank you! Your message has been received. We'll get back to you soon."
   - Email notification sent to `shoaibfm1988@gmail.com`

### Test Chat Form (Online Mode)
1. Click the floating chat button (bottom-right)
2. Type a test message: "This is a test chat message"
3. Click "Send Message"
4. **Expected Result**:
   - Success message: "✅ Thank you! Your message has been received. We'll get back to you soon."
   - Email notification sent to `shoaibfm1988@gmail.com`

### Test Chat Form (Offline Mode)
1. In `FloatingChatButton.js`, change line 6:
   ```javascript
   const [isOnline, setIsOnline] = useState(false); // Change to false
   ```
2. Click the floating chat button
3. Fill out the offline form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test offline message
4. Click "Send Message"
5. **Expected Result**:
   - Success message: "✅ Thank you! Your message has been received. We'll get back to you soon."
   - Email notification sent to `shoaibfm1988@gmail.com`

## 🔧 Troubleshooting

### Common Issues

1. **Forms not submitting**:
   - Check browser console for errors
   - Verify Formspree endpoint is correct
   - Ensure internet connection is stable

2. **No email notifications**:
   - Check spam folder
   - Verify email address in Formspree settings
   - Check Formspree notification settings

3. **Success message not showing**:
   - Check browser console for JavaScript errors
   - Verify form validation is working
   - Test with simple data first

### Debug Information
All forms include debug information:
- `timestamp`: When the form was submitted
- `userAgent`: User's browser information
- `url`: Which page the form was submitted from

## 📊 Form Analytics
Formspree provides analytics on:
- Number of submissions
- Submission times
- User locations
- Device types

## 🚀 Production Checklist
- [ ] Formspree endpoint configured
- [ ] Email notifications enabled
- [ ] Test submissions working
- [ ] Success messages displaying
- [ ] Email notifications received
- [ ] Auto-responders configured (optional)
- [ ] Form analytics enabled (optional)

## 📞 Support
- **Formspree Support**: support@formspree.io
- **Formspree Documentation**: https://formspree.io/help/
- **Your Form ID**: `xkgqvjkw`
- **Notification Email**: `shoaibfm1988@gmail.com`

---

**✅ All forms are now connected and ready to use!**
