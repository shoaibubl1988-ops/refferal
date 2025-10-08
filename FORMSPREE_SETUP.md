# Formspree Setup Instructions

## Setting up your Formspree endpoint

1. **Go to Formspree**: Visit [https://formspree.io](https://formspree.io)

2. **Create an account** or sign in

3. **Create a new form**:
   - Click "New Form"
   - Give it a name like "Referus Lead Form"
   - Copy the form endpoint URL (it will look like `https://formspree.io/f/your_form_id`)

4. **Update the form endpoint**:
   - Open `client/src/components/Forms/AddLeadForm.js`
   - Find line 67: `const response = await fetch('https://formspree.io/f/your_form_id', {`
   - Replace `your_form_id` with your actual Formspree form ID

5. **Test the form**:
   - Submit a test lead through your website
   - Check your Formspree dashboard to see if the submission was received

## Form Fields Being Sent

The form sends the following data to Formspree:

- `fullName`: Full name of the person being referred
- `companyName`: Company name (optional)
- `designation`: Job title/position (optional)
- `email`: Email address
- `mobile`: Mobile number
- `hasReference`: Boolean - whether they want to mention a reference
- `referencePerson`: Reference person's name (if applicable)
- `useReference`: Radio selection - "use" or "dont_use"
- `details`: Additional details about the lead
- `submissionType`: Always "Lead Referral"

## Customizing the Form

You can modify the form fields in `client/src/components/Forms/AddLeadForm.js`:

- Add new fields by updating the `formData` state
- Add validation in the `validateForm` function
- Update the form UI in the JSX
- Modify the data being sent to Formspree in the `handleSubmit` function

## Styling

The form uses Tailwind CSS classes and can be customized by modifying the className attributes in the component.
