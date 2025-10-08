const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Referral Hub Setup...\n');

// Check if required directories exist
const requiredDirs = [
  'client',
  'server',
  'client/public/images',
  'client/src/components',
  'client/src/pages',
  'client/src/hooks',
  'client/src/services',
  'client/src/utils',
  'client/src/styles'
];

console.log('📁 Checking directory structure...');
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir} exists`);
  } else {
    console.log(`❌ ${dir} missing`);
  }
});

// Check if key files exist
const keyFiles = [
  'package.json',
  'server/package.json',
  'client/package.json',
  'server/index.js',
  'client/src/App.js',
  'client/src/index.js',
  'client/tailwind.config.js',
  'client/public/index.html'
];

console.log('\n📄 Checking key files...');
keyFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Check if images exist
const imageFiles = [
  'client/public/images/placeholder-avatar.png',
  'client/public/images/dashboard-illustration.svg',
  'client/public/images/lead-illustration.svg',
  'client/public/images/wallet-illustration.svg'
];

console.log('\n🖼️ Checking placeholder images...');
imageFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});

// Check package.json dependencies
console.log('\n📦 Checking dependencies...');
try {
  const clientPackage = JSON.parse(fs.readFileSync('client/package.json', 'utf8'));
  const serverPackage = JSON.parse(fs.readFileSync('server/package.json', 'utf8'));
  
  const requiredClientDeps = ['react', 'react-dom', 'react-router-dom', 'axios', 'react-hot-toast', 'react-hook-form'];
  const requiredServerDeps = ['express', 'mongoose', 'bcryptjs', 'jsonwebtoken', 'cors', 'dotenv'];
  
  console.log('Client dependencies:');
  requiredClientDeps.forEach(dep => {
    if (clientPackage.dependencies && clientPackage.dependencies[dep]) {
      console.log(`✅ ${dep}: ${clientPackage.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep} missing`);
    }
  });
  
  console.log('\nServer dependencies:');
  requiredServerDeps.forEach(dep => {
    if (serverPackage.dependencies && serverPackage.dependencies[dep]) {
      console.log(`✅ ${dep}: ${serverPackage.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep} missing`);
    }
  });
} catch (error) {
  console.log('❌ Error reading package.json files:', error.message);
}

console.log('\n🎉 Setup validation complete!');
console.log('\n📋 Next steps:');
console.log('1. Run "npm install" in the root directory');
console.log('2. Run "npm install" in the client directory');
console.log('3. Run "npm install" in the server directory');
console.log('4. Create server/.env file with MongoDB connection string');
console.log('5. Run "npm run dev" to start the development server');
