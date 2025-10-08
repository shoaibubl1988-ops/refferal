const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import User model
const User = require('../models/User');

const fixAdminPassword = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/referralhub');
    console.log('Connected to MongoDB');

    // Find the admin user
    const adminUser = await User.findOne({ email: 'shoaibfm1988@gmail.com' });
    
    if (!adminUser) {
      console.log('❌ Admin user not found');
      return;
    }

    console.log('✅ Admin user found:');
    console.log(`   Email: ${adminUser.email}`);
    console.log(`   Name: ${adminUser.name}`);
    console.log(`   Role: ${adminUser.role}`);

    // Generate a new password hash
    const plainPassword = 'admin123';
    const saltRounds = 12;
    const newHashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    
    console.log('\n🔧 Updating password...');
    
    // Update the password
    adminUser.password = newHashedPassword;
    adminUser.role = 'admin';
    adminUser.isActive = true;
    
    await adminUser.save();
    
    console.log('✅ Password updated successfully!');
    
    // Test the new password
    const isPasswordValid = await bcrypt.compare(plainPassword, adminUser.password);
    console.log(`🔍 Password verification: ${isPasswordValid}`);
    
    if (isPasswordValid) {
      console.log('\n🎉 SUCCESS! Admin credentials are working:');
      console.log('📧 Email: shoaibfm1988@gmail.com');
      console.log('🔑 Password: admin123');
      console.log('\n🌐 You can now login at: http://localhost:3000/admin/login');
    } else {
      console.log('\n❌ Password verification failed. There might be an issue with bcrypt.');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the script
fixAdminPassword();
