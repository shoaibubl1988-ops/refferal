# Form Testing Guide

## 🧪 Test Your Forms

### Test 1: Lead Form Submission
1. **Navigate to Homepage**: Go to your website
2. **Scroll to Lead Form**: Find the "Submit a Lead" section
3. **Fill Out Form**:
   ```
   Full Name: John Doe
   Company Name: ABC Corporation
   Designation: CEO
   Email Address: john.doe@abc.com
   Mobile Number: +1 (555) 123-4567
   Reference Checkbox: ✅ Checked
   Reference Person Name: Jane Smith
   Reference Option: Use reference
   Details: Looking for comprehensive IT services for our growing company.
   ```
4. **Submit Form**: Click "Submit Lead"
5. **Expected Results**:
   - ✅ Success message: "✅ Thank you! Your message has been received. We'll get back to you soon."
   - ✅ Email notification sent to `shoaibfm1988@gmail.com`
   - ✅ Form data includes all fields

### Test 2: Chat Form - Online Mode
1. **Click Chat Button**: Bottom-right floating chat button
2. **Type Message**: "Hello, I need help with lead submission process"
3. **Send Message**: Click "Send Message"
4. **Expected Results**:
   - ✅ Success message: "✅ Thank you! Your message has been received. We'll get back to you soon."
   - ✅ Email notification sent to `shoaibfm1988@gmail.com`
   - ✅ Data includes message type: "live_chat"

### Test 3: Chat Form - Offline Mode
1. **Enable Offline Mode**: 
   - Open `client/src/components/Chat/FloatingChatButton.js`
   - Change line 6: `const [isOnline, setIsOnline] = useState(false);`
   - Save and refresh page
2. **Click Chat Button**: Bottom-right floating chat button
3. **Fill Offline Form**:
   ```
   Name: Sarah Johnson
   Email: sarah.johnson@example.com
   Message: I have a question about referral commissions and would like to discuss partnership opportunities.
   ```
4. **Send Message**: Click "Send Message"
5. **Expected Results**:
   - ✅ Success message: "✅ Thank you! Your message has been received. We'll get back to you soon."
   - ✅ Email notification sent to `shoaibfm1988@gmail.com`
   - ✅ Data includes message type: "offline_message"

## 📧 Email Verification

### Check Your Email (`shoaibfm1988@gmail.com`)
After each test, you should receive an email with:

**Lead Form Email**:
```
Subject: New Form Submission
From: Formspree

Form Data:
- Full Name: John Doe
- Company Name: ABC Corporation
- Designation: CEO
- Email Address: john.doe@abc.com
- Mobile Number: +1 (555) 123-4567
- Has Reference: true
- Reference Person: Jane Smith
- Use Reference: use
- Details: Looking for comprehensive IT services...
- Submission Type: Lead Referral
- Notification Email: shoaibfm1988@gmail.com
- Timestamp: [current date/time]
- URL: [your website URL]
```

**Chat Form Email**:
```
Subject: New Form Submission
From: Formspree

Form Data:
- Type: live_chat (or offline_message)
- Message: [user's message]
- Name: [for offline messages only]
- Email: [for offline messages only]
- Notification Email: shoaibfm1988@gmail.com
- Timestamp: [current date/time]
- URL: [your website URL]
```

## 🔧 Troubleshooting

### If Forms Don't Submit:
1. **Check Browser Console**: Press F12 → Console tab
2. **Look for Errors**: Any red error messages
3. **Check Network Tab**: See if request is being sent
4. **Verify Endpoint**: Ensure `https://formspree.io/f/xkgqvjkw` is correct

### If No Email Notifications:
1. **Check Spam Folder**: Emails might be filtered
2. **Verify Formspree Settings**: Ensure notifications are enabled
3. **Check Email Address**: Confirm `shoaibfm1988@gmail.com` is correct
4. **Wait a Few Minutes**: Sometimes there's a delay

### If Success Message Doesn't Show:
1. **Check JavaScript Errors**: Browser console
2. **Verify Form Validation**: All required fields filled
3. **Test with Simple Data**: Try minimal form submission

## ✅ Success Criteria

Your forms are working correctly if:
- [ ] Lead form submits successfully
- [ ] Chat form (online) submits successfully  
- [ ] Chat form (offline) submits successfully
- [ ] Success message appears after each submission
- [ ] Email notifications are received at `shoaibfm1988@gmail.com`
- [ ] All form data is included in email notifications
- [ ] No JavaScript errors in browser console

## 🚀 Ready for Production

Once all tests pass:
1. **Revert Offline Mode**: Change `isOnline` back to `true` in FloatingChatButton.js
2. **Deploy to Production**: Your forms are ready for live users
3. **Monitor Submissions**: Check Formspree dashboard for incoming submissions
4. **Set Up Email Filters**: Organize incoming emails in your inbox

---

**🎉 Your forms are now fully functional and connected to Formspree!**
