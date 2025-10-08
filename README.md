# Referral Hub

A comprehensive referral management platform that connects businesses with opportunities and rewards referrers for successful deals.

## Features

### Public Features
- **Homepage**: Information about the platform with compelling visuals
- **About Page**: Company story, team, and values
- **How It Works**: Step-by-step guide for users
- **Contact Page**: Support and communication channels

### User Portal
- **Authentication**: Secure signup/login with JWT
- **Dashboard**: Overview of leads, earnings, and activity
- **Lead Submission**: Forms for IT, Banking, Real Estate, and Construction
- **Lead Tracking**: Real-time status updates and progress monitoring
- **Multi-Currency Wallet**: USD, AED, EUR, SAR support
- **Withdrawal System**: Request withdrawals with admin review
- **Chat System**: Real-time communication with support team

### Admin Panel
- **Lead Management**: Update lead status and add notes
- **Withdrawal Review**: Approve/reject withdrawal requests
- **User Management**: View users, update roles, and account status
- **Analytics Dashboard**: Key metrics and performance indicators

## Technology Stack

### Frontend
- **React 18**: Modern UI framework
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **React Hook Form**: Form management
- **Axios**: HTTP client
- **Socket.io Client**: Real-time communication
- **React Hot Toast**: Notifications
- **Lucide React**: Icon library

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **Socket.io**: Real-time communication
- **Bcryptjs**: Password hashing
- **Express Validator**: Input validation

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd referral-hub
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   # Create server/.env file
   cp server/.env.example server/.env
   
   # Edit server/.env with your configuration
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/referral-hub
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   ```

4. **Start the application**
   ```bash
   # Development mode (runs both frontend and backend)
   npm run dev
   
   # Or run separately:
   # Backend only
   npm run server
   
   # Frontend only
   npm run client
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Project Structure

```
referral-hub/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── ...
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration
│   └── index.js
├── package.json           # Root package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Leads
- `POST /api/leads` - Submit new lead
- `GET /api/leads` - Get user's leads
- `GET /api/leads/:id` - Get single lead
- `PUT /api/leads/:id/status` - Update lead status (Admin)
- `GET /api/leads/admin/all` - Get all leads (Admin)

### Wallet
- `GET /api/wallet` - Get wallet balance
- `POST /api/wallet/withdraw` - Request withdrawal
- `GET /api/wallet/withdrawals` - Get withdrawal history
- `PUT /api/wallet/admin/withdrawals/:id` - Update withdrawal status (Admin)

### Chat
- `POST /api/chat/send` - Send message
- `GET /api/chat/conversations` - Get conversations
- `GET /api/chat/messages/:userId` - Get messages with user

### Users (Admin)
- `GET /api/users` - Get all users
- `PUT /api/users/:id/status` - Update user status
- `PUT /api/users/:id/role` - Update user role

## Database Models

### User
- Personal information (name, email, password)
- Role (user/admin)
- Account status (active/inactive)
- Multi-currency wallet balance

### Lead
- Company and contact information
- Category (IT, Banking, Real Estate, Construction)
- Deal value and currency
- Status tracking with notes
- User association

### Withdrawal
- Amount and currency
- Bank details
- Status (pending/approved/rejected/processed)
- Admin notes

### ChatMessage
- Sender and receiver
- Message content
- Read status
- Timestamps

## Features in Detail

### Lead Submission
- Industry-specific forms
- Validation and error handling
- File upload support (future enhancement)
- Real-time form validation

### Status Tracking
- Visual status indicators
- Progress timeline
- Admin notes and updates
- Email notifications (future enhancement)

### Multi-Currency Support
- USD, AED, EUR, SAR
- Real-time conversion rates (future enhancement)
- Localized formatting

### Real-time Chat
- Socket.io integration
- Typing indicators
- Message history
- User presence

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Helmet.js security headers

## Deployment

### Environment Variables
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://your-mongodb-connection-string
JWT_SECRET=your-production-jwt-secret
JWT_EXPIRE=7d
CLIENT_URL=https://your-frontend-domain.com
```

### Production Build
```bash
# Build frontend
cd client
npm run build

# Start production server
cd ../server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: support@referralhub.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## Roadmap

### Phase 1 (Current)
- ✅ Core platform functionality
- ✅ User authentication
- ✅ Lead submission and tracking
- ✅ Admin panel
- ✅ Multi-currency wallet

### Phase 2 (Future)
- 📧 Email notifications
- 📱 Mobile app
- 🔄 API integrations
- 📊 Advanced analytics
- 💳 Payment gateway integration
- 🌍 Multi-language support

---

Built with ❤️ for the referral community
