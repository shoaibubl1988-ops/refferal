# Referus.co Deployment Configuration

## Domain Information
- **Domain**: referus.co
- **Project**: Referral Hub Platform
- **Environment**: Production

## Application URLs
- **Main Website**: https://referus.co
- **Admin Panel**: https://referus.co/admin/login
- **Employee Panel**: https://referus.co/employee
- **User Dashboard**: https://referus.co/dashboard

## Admin Credentials
- **Email**: shoaibfm1988@gmail.com
- **Password**: admin123

## Employee Credentials
- **Email**: employee@referus.co
- **Password**: employee123

## Technical Stack
- **Frontend**: React 18.2.0
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Styling**: Tailwind CSS

## Deployment Requirements
1. **Server Requirements**:
   - Node.js 16+ 
   - MongoDB Atlas or local MongoDB instance
   - SSL Certificate for HTTPS

2. **Environment Variables**:
   - MONGO_URI (MongoDB connection string)
   - JWT_SECRET (for authentication)
   - NODE_ENV=production

3. **Build Commands**:
   - Frontend: `npm run build` (in client directory)
   - Backend: `npm start` (in server directory)

## DNS Configuration Needed
- A record pointing to server IP
- CNAME for www.referus.co
- SSL certificate setup

## Features Ready for Production
- ✅ User registration and authentication
- ✅ Lead submission and management
- ✅ Admin panel with full control
- ✅ Employee panel with limited access
- ✅ Multi-currency wallet system
- ✅ Real-time chat functionality
- ✅ Responsive design for all devices
- ✅ Formspree integration for contact forms

## Next Steps for Deployment
1. Set up hosting environment
2. Configure MongoDB Atlas
3. Set up SSL certificate
4. Configure DNS records
5. Deploy application
6. Test all functionality
