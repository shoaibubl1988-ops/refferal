const mongoose = require('mongoose');
require('dotenv').config();

// Import User model
const User = require('../models/User');

const createSimpleAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/referralhub');
    console.log('Connected to MongoDB');

    // Delete any existing admin
    await User.deleteOne({ email: 'shoaibfm1988@gmail.com' });
    console.log('🗑️ Deleted existing admin account');

    // Create a simple admin with known password
    const simpleAdmin = new User({
      name: 'Admin User',
      email: 'shoaibfm1988@gmail.com',
      password: 'admin123', // Store as plain text for now
      role: 'admin',
      isActive: true,
      wallet: {
        usd: 0,
        aed: 0,
        euro: 0,
        sar: 0
      }
    });

    await simpleAdmin.save();
    console.log('✅ Simple admin account created');

    // Verify the account
    const verifyAdmin = await User.findOne({ email: 'shoaibfm1988@gmail.com' });
    console.log('\n🔍 Verification:');
    console.log(`   Email: ${verifyAdmin.email}`);
    console.log(`   Role: ${verifyAdmin.role}`);
    console.log(`   Active: ${verifyAdmin.isActive}`);
    console.log(`   Password: ${verifyAdmin.password}`);
    
    console.log('\n🎉 SIMPLE ADMIN ACCOUNT READY:');
    console.log('📧 Email: shoaibfm1988@gmail.com');
    console.log('🔑 Password: admin123');
    console.log('\n🌐 Login at: http://localhost:3000/admin/login');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the script
createSimpleAdmin();
