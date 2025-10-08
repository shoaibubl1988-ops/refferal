const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import User model
const User = require('../models/User');

const checkAndResetAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/referralhub');
    console.log('Connected to MongoDB');

    // Check if admin exists
    const adminUser = await User.findOne({ email: 'shoaibfm1988@gmail.com' });
    
    if (adminUser) {
      console.log('✅ Admin user found:');
      console.log(`   Email: ${adminUser.email}`);
      console.log(`   Name: ${adminUser.name}`);
      console.log(`   Role: ${adminUser.role}`);
      console.log(`   Active: ${adminUser.isActive}`);
      
      // Reset password to admin123
      const hashedPassword = await bcrypt.hash('admin123', 10);
      adminUser.password = hashedPassword;
      adminUser.role = 'admin';
      adminUser.isActive = true;
      
      await adminUser.save();
      console.log('\n✅ Admin password reset successfully!');
      console.log('📧 Email: shoaibfm1988@gmail.com');
      console.log('🔑 Password: admin123');
      
    } else {
      console.log('❌ Admin user not found. Creating new admin account...');
      
      // Create new admin user
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      const newAdminUser = new User({
        name: 'Admin User',
        email: 'shoaibfm1988@gmail.com',
        password: hashedPassword,
        role: 'admin',
        isActive: true,
        wallet: {
          usd: 0,
          aed: 0,
          euro: 0,
          sar: 0
        }
      });

      await newAdminUser.save();
      console.log('✅ New admin account created successfully!');
      console.log('📧 Email: shoaibfm1988@gmail.com');
      console.log('🔑 Password: admin123');
    }

    // Verify the admin account
    const verifyAdmin = await User.findOne({ email: 'shoaibfm1988@gmail.com' });
    console.log('\n🔍 Verification:');
    console.log(`   Email: ${verifyAdmin.email}`);
    console.log(`   Role: ${verifyAdmin.role}`);
    console.log(`   Active: ${verifyAdmin.isActive}`);
    
    // Test password
    const isPasswordValid = await bcrypt.compare('admin123', verifyAdmin.password);
    console.log(`   Password Valid: ${isPasswordValid}`);
    
    console.log('\n🎉 Admin account is ready!');
    console.log('🌐 Admin Panel URL: http://localhost:3000/admin/login');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the script
checkAndResetAdmin();
