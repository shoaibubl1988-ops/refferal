# Deploy Referus.co to Vercel - Complete Guide

## 🚀 Quick Deployment (5 minutes)

### Option A: Using Vercel Dashboard (Easiest)

1. **Go to**: https://vercel.com
2. **Sign up/Login** with GitHub account
3. **Click "New Project"**
4. **Import your repository** (upload your project files)
5. **Configure settings**:
   - Framework Preset: `Create React App`
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. **Add Environment Variables**:
   ```
   NODE_ENV=production
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
7. **Deploy!**

### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   vercel --prod
   ```

4. **Add custom domain**:
   - Go to Vercel Dashboard
   - Select your project
   - Go to "Domains"
   - Add `referus.co`
   - Follow DNS setup instructions

## 🔒 Automatic SSL Setup

Vercel automatically provides SSL certificates for:
- ✅ HTTPS encryption
- ✅ Automatic HTTPS redirect
- ✅ Modern security headers
- ✅ Global CDN

## 🌐 After Deployment

Your site will be live at:
- **Main Site**: https://referus.co
- **Admin Panel**: https://referus.co/admin/login
- **Employee Panel**: https://referus.co/employee

## 📊 Monitoring

Vercel provides:
- Real-time analytics
- Performance monitoring
- Error tracking
- Automatic deployments

## 🆘 Support

If you need help:
1. Vercel has excellent documentation
2. Their support team is very responsive
3. Community Discord for quick help

---
**Total Time**: 5-10 minutes
**Cost**: Free tier available
**SSL**: Automatic
**Domain**: referus.co ready
