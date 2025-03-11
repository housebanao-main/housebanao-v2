import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Cancellation Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Refund Eligibility</h2>
        <ul className="list-disc list-inside">
          <li>If you have made a booking or paid a token amount and the construction work has not yet begun, you are eligible for a refund within one (1) week from the date of payment.</li>
          <li>After one (1) week from the date of payment, refunds will not be applicable under any circumstances.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Refund Process</h2>
        <ul className="list-disc list-inside">
          <li>To initiate a refund request, you must contact our support team via email or phone with proof of payment.</li>
          <li>Refunds will be processed within 7-14 business days after verification.</li>
          <li>The refund will be credited to the original payment method.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Non-Refundable Scenarios</h2>
        <ul className="list-disc list-inside">
          <li>If construction work has already begun, no refunds will be provided.</li>
          <li>If the refund request is made after one (1) week from the date of payment, it will not be entertained.</li>
          <li>Any additional costs incurred for site inspections, planning, or material procurement will be deducted from the refundable amount, if applicable.</li>
          <li>Any discounts, promotional offers, or service fees associated with the booking are non-refundable.</li>
          <li>The company is not liable for any external factors, such as changes in government regulations, delays due to force majeure events, or unforeseen site conditions.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Company Rights and Policies</h2>
        <ul className="list-disc list-inside">
          <li>The company reserves the right to deny refunds at its sole discretion if there is any violation of the agreement terms.</li>
          <li>Any disputes related to refunds shall be subject to the jurisdiction of the companies registered location.</li>
          <li>The company has the right to adjust, modify, or update this cancellation policy without prior notice.</li>
          <li>If a customer fails to provide necessary approvals, documents, or payments required to commence construction, no refund shall be issued.</li>
          <li>In case of customer-requested delays or changes to the construction plan, refunds will not be entertained, and additional charges may apply.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">Modifications and Exceptions</h2>
        <ul className="list-disc list-inside">
          <li>The company reserves the right to make exceptions on a case-by-case basis under special circumstances.</li>
          <li>Any modifications to this policy will be communicated to customers in advance.</li>
        </ul>
      </section>
      
      <p className="mt-6 text-lg">For any queries, please contact our customer support team.</p>
    </div>
  );
};

export default CancellationPolicy;