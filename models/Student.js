const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // Basic Information
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters']
  },
  rollNo: {
    type: String,
    required: [true, 'Roll number is required'],
    unique: true,
    uppercase: true,
    trim: true
  },
  sapId: {
    type: String,
    required: [true, 'SAP ID is required'],
    unique: true,
    match: [/^[0-9]{8,12}$/, 'SAP ID must be 8-12 digits']
  },
  
  // Academic Information
  semester: {
    type: String,
    required: [true, 'Semester is required']
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  
  // Personal Information
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  religion: {
    type: String,
    trim: true
  },
  bloodGroup: {
    type: String
  },
  motherTongue: {
    type: String,
    trim: true
  },
  
  // Contact Information
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]{10}$/, 'Phone number must be 10 digits']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    minlength: [5, 'Address is too short']
  },
  
  // Face Images (stored as base64 strings)
  faceImages: {
    image1: {
      type: String,
      required: [true, 'Image 1 is required']
    },
    image2: {
      type: String,
      required: [true, 'Image 2 is required']
    },
    image3: {
      type: String,
      required: [true, 'Image 3 is required']
    }
  },
  
  // Authentication
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  
  // Account Status
  isActive: {
    type: Boolean,
    default: true
  },
  
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for faster queries
studentSchema.index({ rollNo: 1 });
studentSchema.index({ sapId: 1 });
studentSchema.index({ email: 1 });

// Method to get public profile (without sensitive data)
studentSchema.methods.getPublicProfile = function() {
  const studentObj = this.toObject();
  delete studentObj.password;
  delete studentObj.faceImages; // Don't send images back in response
  return studentObj;
};

module.exports = mongoose.model('Student', studentSchema);
