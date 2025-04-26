const generateInvoiceHTML = (invoice) => {
    return `
      <h2>Invoice for ${invoice.studentName}</h2>
      <p><strong>Program:</strong> ${invoice.program}</p>
      <p><strong>Payment Plan:</strong> ${invoice.paymentPlan}</p>
      <p><strong>Tuition:</strong> ₦${invoice.tuition.toLocaleString()}</p>
      <p><strong>Acceptance Fee:</strong> ₦${invoice.acceptanceFee.toLocaleString()}</p>
      ${invoice.hostel ? `<p><strong>Hostel Fee:</strong> ₦${invoice.hostelFee.toLocaleString()}</p>` : ''}
      ${invoice.scholarship ? `<p><strong>Scholarship Discount:</strong> -₦${invoice.scholarshipDiscount.toLocaleString()}</p>` : ''}
      <h3>Total: ₦${invoice.total.toLocaleString()}</h3>
    `;
  }
  

  module.exports = generateInvoiceHTML;