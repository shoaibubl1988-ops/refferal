# Email Notifications Setup Guide

## Overview
The Referus website now includes email notifications for:
1. **Lead Form Submissions** - When someone submits a lead
2. **Chat Messages** - When someone sends a live chat or offline message

All notifications are sent to: **shoaibfm1988@gmail.com**

## Setup Instructions

### 1. Formspree Configuration

#### For Lead Form Notifications:
1. Go to [formspree.io](https://formspree.io) and create a new form
2. Name it "Referus Lead Notifications"
3. Copy the form endpoint URL
4. Update `client/src/components/Forms/AddLeadForm.js` line 79:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_LEAD_FORM_ID', {
   ```

#### For Chat Notifications:
1. Create another Formspree form for chat messages
2. Name it "Referus Chat Notifications"
3. Copy the form endpoint URL
4. Update `client/src/components/Chat/FloatingChatButton.js` line 30:
   ```javascript
   await fetch('https://formspree.io/f/YOUR_CHAT_FORM_ID', {
   ```

### 2. Formspree Email Settings

In your Formspree dashboard:

1. **Go to Settings** for each form
2. **Set up email notifications**:
   - Add `shoaibfm1988@gmail.com` as the notification email
   - Enable email notifications
   - Customize the email template if needed

3. **Optional: Set up auto-responders**:
   - Lead form: Send confirmation to the person who submitted
   - Chat: Send acknowledgment to the person who sent the message

### 3. Data Being Sent

#### Lead Form Data:
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
  "url": "https://referus.com/add-lead"
}
```

#### Chat Message Data:
```json
{
  "type": "live_chat", // or "offline_message"
  "message": "Hello, I need help with...",
  "name": "John Doe", // only for offline messages
  "email": "john@example.com", // only for offline messages
  "timestamp": "2024-01-01T12:00:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "url": "https://referus.com/"
}
```

### 4. Testing

1. **Test Lead Form**:
   - Go to `/add-lead`
   - Fill out and submit the form
   - Check your email (shoaibfm1988@gmail.com) for the notification

2. **Test Chat**:
   - Click the floating chat button
   - Send a message (both online and offline modes)
   - Check your email for the notification

### 5. Customization

#### Change Notification Email:
Update the email address in these files:
- `client/src/components/Forms/AddLeadForm.js` line 95
- `client/src/components/Chat/FloatingChatButton.js` (add notificationEmail field)

#### Change Online/Offline Status:
In `client/src/components/Chat/FloatingChatButton.js` line 6:
```javascript
const [isOnline, setIsOnline] = useState(false); // Change to false for offline
```

#### Business Hours Logic:
You can add business hours logic to automatically set online/offline status:
```javascript
useEffect(() => {
  const now = new Date();
  const hour = now.getHours();
  const isBusinessHours = hour >= 9 && hour <= 17; // 9 AM to 5 PM
  setIsOnline(isBusinessHours);
}, []);
```

### 6. Advanced Features

#### Auto-responders:
Set up in Formspree to automatically reply to users:
- Lead form: "Thank you for your referral!"
- Chat: "We've received your message and will respond soon."

#### Webhook Integration:
If you need real-time notifications, you can set up webhooks in Formspree to send data to your own server.

#### Analytics:
Formspree provides analytics on form submissions and chat messages.

## Troubleshooting

### Common Issues:

1. **Emails not received**:
   - Check spam folder
   - Verify Formspree form is active
   - Check Formspree email settings

2. **Form not submitting**:
   - Check browser console for errors
   - Verify Formspree endpoint URL is correct
   - Check network connectivity

3. **Chat not working**:
   - Ensure Formspree form is set up for chat
   - Check if online/offline status is set correctly
   - Verify form validation

### Support:
- Formspree Documentation: https://formspree.io/help/
- Formspree Support: support@formspree.io
