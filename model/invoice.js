const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  studentName: String,
  regNumber: String,
  studentEmail: { type: String, required: true },
  program: String,
  paymentPlan: String,
  hostel: Boolean,
  scholarship: Boolean,
  scholarshipAmount: Number,
  tuition: Number,
  acceptanceFee: Number,
  hostelFee: Number,
  scholarshipDiscount: Number,
  total: Number,
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
