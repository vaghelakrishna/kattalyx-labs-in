
const TermsAndConditions = () => {

  return (
    <div className="flex min-h-screen bg-[#FCFCFC] font-sans text-gray-900  justify-center items-center">


      {/* MAIN CONTENT AREA */}
      <main className="flex-1  p-6 md:p-12 lg:p-20 max-w-5xl">

        {/* DOCUMENT HEADER */}
        <header className="mb-20 border-b border-gray-100 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-6 uppercase tracking-tight">
            Terms and Conditions
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-gray-500">
            <span>Effective Date: December 19, 2025</span>
            <span>Last Updated: December 19, 2025</span>
          </div>
        </header>

        {/* INTRODUCTION SECTION */}
        <section id="intro" className="mb-24 scroll-mt-20">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider">
            INTRODUCTION AND LEGAL AGREEMENT
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-justify text-gray-700">
            <p>
              This comprehensive Terms and Conditions document (hereinafter referred to as "Agreement" or "Terms")
              establishes the complete legal framework governing the relationship between Kattalyx Labs Private Limited...
            </p>
            <div className="bg-gray-50 p-6 border border-gray-100 font-mono text-xs leading-loose">
              <p className="font-bold mb-2 underline text-black">Company Details:</p>
              • Corporate Identity Number (CIN): U85500UP2025PTC239031<br />
              • Permanent Account Number (PAN): AAMCK4220H<br />
              • Tax Deduction and Collection Account Number (TAN): MRTK09475E<br />
              • Registered Office: C/o Manish Jain, Nai Mandi, Baraut, Baghpat, Uttar Pradesh 250611, India<br />
              • Primary Contact Email: kattalyxlabs@gmail.com<br />
              • Registration Date: December 19, 2025<br />
              • Business Classification: Education and Technology Company
            </div>
            <p>
              By accessing our website, downloading our applications, enrolling in our programs, using our services, making
              purchases, or engaging with Kattalyx Labs in any form whatsoever, you explicitly acknowledge, confirm, and
              agree that you have:<br />
              1. Read this entire Terms and Conditions document carefully and thoroughly <br />
              2. Understood all terms, conditions, provisions, and implications outlined herein <br />
              3. Accepted and agreed to be bound by each and every provision of this Agreement<br />
              4. Confirmed that you have the legal capacity and authority to enter into this binding agreement<br />
            </p>
            <p className="italic border-l-2 border-gray-200 pl-4 py-2">
              If you do not agree with any provision, term, or condition outlined in this Agreement, you must immediately
              cease all use of our services and platforms.
            </p>
          </div>
        </section>
        {/* SECTION 1: DETAILED DESCRIPTION OF KATTALYX LABS SERVICES */}
        <section id="section1" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 1: DETAILED DESCRIPTION OF KATTALYX LABS SERVICES
          </h2>

          <p className="text-sm text-gray-600 mb-10 leading-relaxed italic">
            Kattalyx Labs operates as a comprehensive education and technology ecosystem designed to facilitate school
            transformation, student development, and professional growth. A detailed description of our core services is
            provided below.
          </p>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700">

            {/* 1.1 REAL-WORLD LEARNING */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight">1.1 REAL-WORLD LEARNING PROGRAMS AND EDUCATIONAL SERVICES</h3>
              <p className="mb-4">Kattalyx Labs offers meticulously designed real-world learning programs intended to bridge the gap between theoretical classroom education and practical application. Our programs include:</p>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-2"><span>-</span> <span><strong>Real-World Learning Workshops:</strong> Interactive workshops conducted both offline and online, designed to provide hands-on experience in contemporary topics including artificial intelligence, finance, entrepreneurship, communication skills, coding, soft skills, data science, and other industry-relevant subjects.</span></li>
                <li className="flex gap-2"><span>-</span> <span><strong>Hybrid Learning Models:</strong> Flexible learning formats combining online asynchronous content with synchronous virtual classroom sessions, self-paced learning modules, and in-person practical workshops, allowing students to learn at their own pace while maintaining structured guidance.</span></li>
                <li className="flex gap-2"><span>-</span> <span><strong>Modern Competency-Based Education Modules:</strong> Curriculum modules designed around industry-demanded competencies rather than traditional subject-based learning, focusing on practical skills, critical thinking, problem-solving, and professional readiness.</span></li>
                <li className="flex gap-2"><span>-</span> <span><strong>Skill Development Programs:</strong> Specialized programs targeting specific skill development in areas such as digital literacy, technical skills, leadership, teamwork, emotional intelligence, and other professional competencies.</span></li>
                <li className="flex gap-2"><span>-</span> <span><strong>Offline and Online Workshop Formats:</strong> Workshops conducted in both physical classroom environments and virtual online platforms, with the flexibility to participate in real-time or access recorded sessions.</span></li>
              </ul>
            </div>

            {/* 1.2 ELITIVERSE ERP - Highlighted Card Style */}
            <div className="p-8 bg-black text-white rounded-sm border border-black shadow-lg">
              <h3 className="font-bold mb-4 text-lg border-b border-gray-800 pb-2">1.2 ELITIVERSE ENTERPRISE RESOURCE PLANNING (ERP) SYSTEM</h3>
              <p className="text-gray-400 text-[13px] mb-6">EliteVerse is Kattalyx Labs' proprietary cloud-based Enterprise Resource Planning system specifically designed for educational institutions. This comprehensive software solution includes:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[12px] uppercase tracking-wide">
                <div>• School Management Module</div>
                <div>• Student Information System</div>
                <div>• Academic Management Features</div>
                <div>• Communication Platform</div>
                <div>• Payment and Fee Management</div>
                <div>• Reporting and Analytics</div>
                <div>• Custom Development</div>
                <div>• Technical Support and Maintenance</div>
              </div>
            </div>

            {/* 1.3 INTERNSHIP */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase">1.3 INTERNSHIP AND CAREER DEVELOPMENT PROGRAMS</h3>
              <p className="mb-4 text-gray-500 italic">Kattalyx Labs facilitates career development and professional placement opportunities for students through:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Internship Identification and Matching", "Internship Coordination",
                  "Job Placement Services", "Career Counseling and Guidance",
                  "Aptitude and Career Assessments", "Resume and Portfolio Development",
                  "Interview Preparation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-l border-gray-200 pl-4 py-1 hover:border-black transition-colors">
                    <span className="text-gray-400 font-mono text-[10px]">#</span>
                    <span className="text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.4 COMPETITIONS */}
            <div className="border border-gray-100 p-6">
              <h3 className="font-bold text-black mb-4 uppercase">1.4 EDUCATIONAL COMPETITIONS AND EVENTS</h3>
              <p className="mb-4">We organize, coordinate, and facilitate various educational competitions and events including:</p>
              <div className="flex flex-wrap gap-2">
                {["Hackathons", "Innovation Challenges", "Leadership Events", "National-Level Competitions", "Seminars and Conferences"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 text-[11px] font-bold uppercase tracking-wider border border-gray-200">
                    {tag}
                  </span>
                ))}
                <span className="px-3 py-1 text-[11px] italic text-gray-400">+ other academic engagements</span>
              </div>
            </div>

            {/* 1.5 CONTENT CREATION */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase">1.5 EDUCATIONAL CONTENT CREATION AND DISTRIBUTION</h3>
              <div className="space-y-4">
                <p>Kattalyx Labs creates, produces, and distributes educational content through multiple formats and channels:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
                  <div className="p-2 border-b border-gray-50">• Digital Learning Materials</div>
                  <div className="p-2 border-b border-gray-50">• Podcasts and Audio Content</div>
                  <div className="p-2 border-b border-gray-50">• Expert-Led Sessions</div>
                  <div className="p-2 border-b border-gray-50">• Online Courses</div>
                  <div className="p-2 border-b border-gray-50">• Video Content</div>
                  <div className="p-2 border-b border-gray-50">• Media Production</div>
                </div>
              </div>
            </div>

            {/* 1.6 SCHOOL GROWTH */}
            <div className="bg-gray-50 p-8 border-x border-gray-200">
              <h3 className="font-bold text-black mb-4 uppercase tracking-widest">1.6 SCHOOL GROWTH AND BRANDING SERVICES</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 list-none text-[13px]">
                <li><strong>- Digital Branding:</strong> Identity development & website design.</li>
                <li><strong>- Communication:</strong> Stakeholder engagement strategies.</li>
                <li><strong>- Marketing:</strong> Promotional support & social media.</li>
                <li><strong>- Growth:</strong> Admission & reputation building strategies.</li>
              </ul>
            </div>

            {/* 1.7 DIGITAL INFRASTRUCTURE */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase">1.7 DIGITAL INFRASTRUCTURE AND TECHNOLOGY SOLUTIONS</h3>
              <p className="mb-6">Kattalyx Labs designs, develops, implements, and maintains digital infrastructure solutions including:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[10px] font-bold uppercase tracking-tighter">
                <div className="p-4 border border-gray-100 flex flex-col justify-center min-h-[100px]">School ERP</div>
                <div className="p-4 border border-gray-100 flex flex-col justify-center">Mobile Apps</div>
                <div className="p-4 border border-gray-100 flex flex-col justify-center">LMS Platforms</div>
                <div className="p-4 border border-gray-100 flex flex-col justify-center">Cloud Hosting</div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 2: USER ELIGIBILITY, ACCOUNT CREATION, AND ACCOUNT RESPONSIBILITIES */}
        <section id="section2" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 2: USER ELIGIBILITY, ACCOUNT CREATION, AND ACCOUNT RESPONSIBILITIES
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700">

            {/* 2.1 ELIGIBILITY REQUIREMENTS */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">2.1</span> ELIGIBILITY REQUIREMENTS
              </h3>
              <p className="mb-6">By using Kattalyx Labs services, you represent and warrant that you:</p>
              <ul className="space-y-4 pl-5 list-decimal marker:font-bold marker:text-black">
                <li>Are at least eighteen (18) years of age, OR if under eighteen years of age, have obtained verifiable consent from your parent or legal guardian and that your parent/guardian has agreed to these Terms on your behalf.</li>
                <li>Are a legally competent person capable of entering into binding legal agreements.</li>
                <li>Are not prohibited from using our services under any applicable law, regulation, or government directive.</li>
                <li>Have not been previously banned or suspended from using Kattalyx Labs services.</li>
                <li>If representing an educational institution or organization, you represent that you are authorized to bind that organization to this Agreement and that the organization is a legally registered entity.</li>
                <li>Understand and acknowledge the educational and professional nature of our services and commit to using them responsibly.</li>
                <li>Are not a competitor or employee of a competing organization seeking to access our services for intelligence gathering or competitive advantage.</li>
              </ul>
            </div>

            {/* 2.2 ACCOUNT CREATION AND REGISTRATION */}
            <div className="bg-gray-50 p-8 border-y border-gray-100">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">2.2</span> ACCOUNT CREATION AND REGISTRATION
              </h3>
              <p className="mb-6">To access certain features of our services, you may need to create an account. When creating an account:</p>
              <ul className="space-y-4 pl-5 list-decimal marker:font-bold marker:text-black">
                <li>You agree to provide accurate, complete, current, and truthful information about yourself.</li>
                <li>You accept responsibility for maintaining the confidentiality of your account credentials (username and password) and for all activities that occur under your account.</li>
                <li>You agree to immediately notify Kattalyx Labs of any unauthorized use of your account or any security breach. Contact us immediately at <span className="underline font-medium">kattalyxlabs@gmail.com</span> if you suspect unauthorized access.</li>
                <li>You are solely responsible for all activities conducted under your account, whether authorized by you or not.</li>
                <li>You agree not to create multiple accounts or share your account credentials with any other person.</li>
                <li>You represent that all information provided during account creation is accurate and that you will maintain the accuracy of this information.</li>
                <li>Kattalyx Labs reserves the right to verify any information provided during account creation and may request additional documentation.</li>
                <li>We reserve the right to suspend or terminate accounts created with false, misleading, or fraudulent information.</li>
              </ul>
            </div>

            {/* 2.3 ACCOUNT SECURITY AND USER RESPONSIBILITIES */}
            <div className="border-l-4 border-black pl-8 py-2">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">2.3</span> ACCOUNT SECURITY AND USER RESPONSIBILITIES
              </h3>
              <p className="mb-4">You agree to:</p>
              <ul className="space-y-3 pl-5 list-decimal marker:text-gray-400 mb-8">
                <li>Maintain the confidentiality of your account credentials at all times.</li>
                <li>Not share your password, PIN, security questions, or other authentication information with anyone.</li>
                <li>Immediately notify us of any unauthorized access or suspected security breach.</li>
                <li>Use only secure, personally-known passwords combining letters, numbers, and special characters.</li>
                <li>Log out of your account when using shared or public computers.</li>
                <li>Not access others' accounts or attempt to gain unauthorized access to restricted areas.</li>
                <li>Accept full responsibility for all transactions and activities conducted under your account.</li>
              </ul>

              <div className="bg-red-50/50 p-4 border border-red-100 rounded-sm">
                <p className="text-xs leading-relaxed italic text-gray-600">
                  Kattalyx Labs will not be liable for unauthorized access to your account if the unauthorized access results from
                  your failure to maintain account security or your disclosure of account credentials to third parties.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: COMPREHENSIVE PAYMENT TERMS AND METHODS */}
        <section id="section3" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 3: COMPREHENSIVE PAYMENT TERMS AND METHODS
          </h2>

          <div className="space-y-10 text-sm leading-relaxed text-gray-700">

            {/* 3.1 PAYMENT METHOD DETAILS AND ACCEPTANCE */}
            <div>
              <h3 className="font-bold text-black mb-4 flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">3.1</span> PAYMENT METHOD DETAILS AND ACCEPTANCE
              </h3>
              <p className="mb-6">Kattalyx Labs accepts payment through the following methods, all of which are clearly displayed during the checkout process:</p>

              <div className="space-y-6">
                <p className="font-bold text-black uppercase text-xs tracking-widest border-b pb-1 inline-block">Primary Payment Methods:</p>

                {/* Razorpay Sub-section */}
                <div className="pl-4 border-l-2 border-gray-100">
                  <p className="mb-4"><strong>RAZORPAY PAYMENT GATEWAY:</strong> Razorpay is our primary payment service provider, a licensed and regulated Payment Service Provider (PSP) in India. Through Razorpay, we accept:</p>
                  <ul className="space-y-3 pl-4">
                    <li><span className="font-bold">- Credit Cards:</span> Visa, Mastercard, American Express, and other major credit card brands issued by Indian and international banks. All credit card information is encrypted and processed securely by Razorpay. Kattalyx Labs does not store credit card information on its servers.</li>
                    <li><span className="font-bold">- Debit Cards:</span> Visa Debit Cards, Mastercard Debit Cards, RuPay cards, and other debit card brands. Processing and security standards are identical to credit cards.</li>
                    <li><span className="font-bold">- Net Banking:</span> Direct fund transfers from your bank account through the National Electronic Funds Transfer (NEFT) system. All major banks in India participate in this system including HDFC Bank, ICICI Bank, Axis Bank, State Bank of India, IDBI Bank, Kotak Mahindra Bank, and others.</li>
                    <li><span className="font-bold">- Digital Wallets and Prepaid Instruments:</span> Popular digital wallet services including Paytm, Google Pay, PhonePe, Amazon Pay, and other NPCI-approved wallet providers.</li>
                    <li><span className="font-bold">- Unified Payments Interface (UPI):</span> Direct payments through UPI applications including Google Pay, PhonePe, Paytm, Amazon Pay, and other UPI-enabled applications using your bank account.</li>
                    <li><span className="font-bold">- EMI (Equated Monthly Installments):</span> For eligible credit cards and purchase amounts, Razorpay offers EMI options allowing you to spread payments across multiple months at varying interest rates.</li>
                  </ul>
                </div>

                {/* Bank Transfer Sub-section */}
                <div className="pl-4 border-l-2 border-gray-100">
                  <p className="mb-4"><strong>BANK TRANSFER:</strong> For institutional clients and bulk payments, we accept direct bank transfers:</p>
                  <ul className="space-y-1 pl-4 mb-4">
                    <li>- Beneficiary Name: Kattalyx Labs Private Limited</li>
                    <li>- Account Details: [Bank account information will be provided during the transaction]</li>
                    <li>- Transfer Type: NEFT, RTGS, or IMPS (for immediate transfers)</li>
                    <li>- Reference Information: Your order number or enrollment ID should be included in the transfer reference to enable proper payment reconciliation</li>
                  </ul>
                </div>

                {/* Cheque Payment Sub-section */}
                <div className="pl-4 border-l-2 border-gray-100">
                  <p className="mb-4"><strong>CHEQUE PAYMENT:</strong> For specific institutional agreements and bulk services:</p>
                  <ul className="space-y-2 pl-4">
                    <li>- Payment by cheque is accepted for amounts above specified thresholds</li>
                    <li>- Cheques should be made payable to "Kattalyx Labs Private Limited"</li>
                    <li>- Cheques should be mailed to our registered address: C/o Manish Jain, Nai Mandi, Baraut, Baghpat, Uttar Pradesh 250611, India</li>
                    <li>- Payment is not effective until the cheque has been presented and cleared by the banking system</li>
                    <li>- Cheques should include your order/enrollment number for proper identification</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3.2 PRICING STRUCTURE */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-bold text-black mb-4 uppercase">3.2 PRICING STRUCTURE AND DISPLAY</h3>
              <p className="mb-4">All prices displayed on our website and in our service proposals are stated in Indian Rupees (₹) unless otherwise explicitly indicated. The following pricing elements apply:</p>
              <div className="space-y-4">
                <p><strong>Base Service Price:</strong> The primary price of the service as displayed on our website or quoted in a formal proposal.</p>
                <p><strong>Taxes and Government Levies:</strong> Applicable Goods and Services Tax (GST) is calculated based on the service category and your registered state (for institutional clients). GST is added to the base service price. The total amount including GST is displayed before you confirm your purchase.</p>
                <p><strong>Discount and Promotional Offers:</strong> Any applicable discounts, promotional offers, coupon codes, or special pricing are clearly indicated during the checkout process.</p>
                <p><strong>Payment Gateway Charges:</strong> For certain payment methods, the payment gateway may charge processing fees. These fees may be borne by you or absorbed by Kattalyx Labs depending on the payment method selected.</p>
                <p><strong>Service Delivery Fees:</strong> For certain services requiring special logistics, coordination, or resources, additional service delivery fees may apply.</p>
                <p><strong>Complete Pricing Transparency:</strong> The total amount you will be charged, including all taxes and fees, is clearly displayed before you complete the transaction. You have the opportunity to review and confirm the final amount before processing payment.</p>
              </div>
            </div>

            {/* 3.3 PRICING MODIFICATIONS */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase">3.3 PRICING MODIFICATIONS AND ADVANCE NOTICE</h3>
              <ul className="space-y-3 pl-5 list-decimal marker:font-bold">
                <li>Price changes for existing services will not apply to orders or enrollments already confirmed and paid.</li>
                <li>For subscription-based services, price changes will be effective at the beginning of the next billing cycle, with advance notice provided to users.</li>
                <li>Major price increases will be announced at least thirty (30) days in advance.</li>
                <li>Users have the option to cancel services before a price increase takes effect.</li>
                <li>Promotional pricing is temporary and subject to change or discontinuation without notice.</li>
              </ul>
            </div>

            {/* 3.4 PAYMENT PROCESSING PROCEDURES */}
            <div className="border-y border-gray-100 py-8">
              <h3 className="font-bold text-black mb-4 uppercase">3.4 PAYMENT PROCESSING PROCEDURES</h3>
              <p className="mb-4 text-xs font-mono text-gray-400 uppercase tracking-widest">Transaction Workflow:</p>
              <ul className="space-y-3 pl-5 list-decimal">
                <li>You will be directed to the Razorpay payment gateway (or alternative payment portal for other payment methods).</li>
                <li>You will review the payment details, service description, amount, and taxes before proceeding.</li>
                <li>You will select your preferred payment method from the available options.</li>
                <li>You will enter payment information as required by the payment method selected.</li>
                <li>Once payment is processed successfully, you will receive a confirmation email with your transaction ID, invoice, and service details.</li>
                <li>Your account will be immediately activated for the service, unless otherwise specified for certain services.</li>
                <li>Failed payments will result in an error message, and you will not be charged. You can retry payment.</li>
              </ul>
            </div>

            {/* 3.5 RAZORPAY SECURITY */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase">3.5 RAZORPAY PAYMENT TERMS AND SECURITY</h3>
              <div className="space-y-4 bg-blue-50/30 p-6 border-l-4 border-blue-200">
                <p><strong>Razorpay Processing:</strong> All credit card, debit card, net banking, wallet, and UPI payments are processed through Razorpay's secure payment gateway. Razorpay is PCI DSS (Payment Card Industry Data Security Standard) compliant and uses industry-standard encryption.</p>
                <p><strong>Non-Storage of Card Data:</strong> Kattalyx Labs does not store, process, or retain your credit card numbers, expiration dates, or security codes. This information is retained solely by Razorpay and is not accessible to Kattalyx Labs personnel.</p>
                <p><strong>Razorpay Terms and Conditions:</strong> Your payment through Razorpay is subject to Razorpay's terms and conditions and privacy policy. We recommend reviewing Razorpay's privacy and security policies at www.razorpay.com.</p>
                <p><strong>Razorpay Disputes and Chargebacks:</strong> In the event of payment disputes, chargebacks, or refund requests related to credit card or digital wallet payments, such requests are processed by Razorpay in accordance with their policies and the policies of your card issuer or wallet provider.</p>
                <p><strong>Payment Confirmation:</strong> Confirmation of successful payment comes directly from Razorpay's secure system. Our system receives notification of successful payment and activates your service accordingly.</p>
              </div>
            </div>

            {/* 3.6 FAILED TRANSACTIONS */}
            <div>
              <h3 className="font-bold text-black mb-4 uppercase">3.6 FAILED TRANSACTIONS AND MULTIPLE PAYMENT ATTEMPTS</h3>
              <ul className="space-y-2 pl-5 list-decimal">
                <li>Your card or account will not be charged.</li>
                <li>A detailed error message will explain the reason for the failure (e.g., insufficient funds, card decline, gateway error).</li>
                <li>You may retry the payment using the same or different payment method.</li>
                <li>Repeated failed payment attempts from the same user may trigger fraud detection and temporarily restrict payment attempts.</li>
                <li>Please contact your bank or payment provider if you continue experiencing failed transactions.</li>
                <li>Contact Kattalyx Labs support at <span className="underline">kattalyxlabs@gmail.com</span> if you require assistance with payment issues.</li>
              </ul>
            </div>

            {/* 3.7 INVOICE */}
            <div className="bg-black text-white p-8">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-gray-400">3.7 INVOICE AND TAX DOCUMENTATION</h3>
              <ul className="space-y-2 text-[13px]">
                <li>• An automated invoice via email within twenty-four (24) hours of payment.</li>
                <li>• A transaction receipt including transaction ID, date, amount paid, GST details, and itemized service description.</li>
                <li>• Invoices are maintained in your account portal for future reference and download.</li>
                <li>• Invoices include all necessary tax information for GST return filing by the recipient (for applicable cases).</li>
                <li>• For institutional clients, we can provide separate invoices for different services if requested.</li>
                <li>• Original invoices can be downloaded from your account portal at any time.</li>
              </ul>
            </div>

          </div>
        </section>



        {/* SECTION 4: INTELLECTUAL PROPERTY RIGHTS AND CONTENT OWNERSHIP */}
<section id="section4" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
  <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
    SECTION 4: INTELLECTUAL PROPERTY RIGHTS AND CONTENT OWNERSHIP
  </h2>

  <div className="space-y-12 text-sm leading-relaxed text-gray-700">
    
    {/* 4.1 KATTALYX LABS INTELLECTUAL PROPERTY */}
    <div>
      <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
        <span className="text-xs font-mono text-gray-400">4.1</span> KATTALYX LABS INTELLECTUAL PROPERTY
      </h3>
      <p className="mb-6">
        All content, materials, technology, software, designs, graphics, logos, trademarks, service marks, and other 
        intellectual property on our website, applications, and services (collectively, "Kattalyx Labs IP") are owned by 
        or licensed to Kattalyx Labs Private Limited. This includes:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-l-2 border-black pl-4">
          <p className="font-bold text-black text-[13px] mb-1">Website Content:</p>
          <p className="text-gray-500">Text, images, videos, graphics, layouts, design elements, and other creative content displayed on our website.</p>
        </div>
        <div className="border-l-2 border-black pl-4">
          <p className="font-bold text-black text-[13px] mb-1">Software and Applications:</p>
          <p className="text-gray-500">All code, algorithms, systems, databases, applications, and software tools developed by Kattalyx Labs.</p>
        </div>
        <div className="border-l-2 border-black pl-4">
          <p className="font-bold text-black text-[13px] mb-1">Educational Content:</p>
          <p className="text-gray-500">All educational materials, course content, training modules, presentations, worksheets, and instructional materials created by Kattalyx Labs.</p>
        </div>
        <div className="border-l-2 border-black pl-4">
          <p className="font-bold text-black text-[13px] mb-1">Trademarks and Branding:</p>
          <p className="text-gray-500">The "Kattalyx Labs" name, logo, "EliteVerse" trademark, and all associated brand elements.</p>
        </div>
        <div className="border-l-2 border-black pl-4 md:col-span-2">
          <p className="font-bold text-black text-[13px] mb-1">Proprietary Methodologies:</p>
          <p className="text-gray-500">Our educational methodologies, curriculum frameworks, assessment tools, and learning frameworks.</p>
        </div>
      </div>
    </div>

    {/* 4.2 LIMITED LICENSE */}
    <div className="bg-gray-50 p-8 border border-gray-100">
      <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
        <span className="text-xs font-mono text-gray-400">4.2</span> LIMITED LICENSE TO USE KATTALYX LABS IP
      </h3>
      <p className="mb-6 italic">Subject to your compliance with these Terms, Kattalyx Labs grants you a limited, non-exclusive, non-transferable, revocable license to:</p>
      <ul className="space-y-3 pl-5 list-decimal marker:font-bold mb-8">
        <li>Access and view our website and content for legitimate educational or commercial purposes.</li>
        <li>Use our services in accordance with the terms of the specific service agreement.</li>
        <li>Download educational materials and content for personal or organizational use (unless explicitly prohibited).</li>
        <li>Print materials for personal or non-commercial educational use.</li>
      </ul>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="font-bold text-red-800 text-xs uppercase tracking-widest mb-4">This license is conditioned upon your agreement not to:</p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex gap-2"><span>-</span> <span>Reproduce, distribute, modify, or create derivative works of Kattalyx Labs IP without written permission.</span></li>
          <li className="flex gap-2"><span>-</span> <span>Use Kattalyx Labs IP for competitive purposes or to develop competing products.</span></li>
          <li className="flex gap-2"><span>-</span> <span>Remove or obscure any copyright, trademark, or attribution notices.</span></li>
          <li className="flex gap-2"><span>-</span> <span>Use our content for commercial purposes without explicit written authorization.</span></li>
          <li className="flex gap-2"><span>-</span> <span>Sell, license, or transfer Kattalyx Labs IP to third parties.</span></li>
          <li className="flex gap-2"><span>-</span> <span>Reverse engineer, decompile, or attempt to derive the source code or algorithms underlying our software.</span></li>
        </ul>
      </div>
    </div>

    {/* 4.3 USER-GENERATED CONTENT */}
    <div>
      <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
        <span className="text-xs font-mono text-gray-400">4.3</span> OWNERSHIP OF USER-GENERATED CONTENT
      </h3>
      <p className="mb-6">To the extent you create, upload, submit, or contribute content to our platforms (such as forum posts, feedback, assignments, projects, or user-generated materials), the following terms apply:</p>
      
      <div className="space-y-6 pl-4 border-l-4 border-black">
        <p><strong>Your Ownership:</strong> You retain ownership of the content you create and submit.</p>
        
        <div>
          <p className="font-bold mb-3">License to Kattalyx Labs:</p>
          <p className="mb-4">By submitting content to our platforms, you grant Kattalyx Labs a non-exclusive, worldwide, perpetual, irrevocable license to:</p>
          <ul className="space-y-2 pl-4">
            <li className="flex gap-2 text-gray-500 italic"><span>-</span> <span>Store and maintain your content on our servers and backup systems.</span></li>
            <li className="flex gap-2 text-gray-500 italic"><span>-</span> <span>Display your content within the platform as part of service delivery.</span></li>
            <li className="flex gap-2 text-gray-500 italic"><span>-</span> <span>Use your content for educational, research, and service improvement purposes.</span></li>
            <li className="flex gap-2 text-gray-500 italic"><span>-</span> <span>Create derivative works from your content for platform improvements (if necessary).</span></li>
            <li className="flex gap-2 text-gray-500 italic"><span>-</span> <span>Analyze and process your content using analytics tools and machine learning algorithms.</span></li>
          </ul>
        </div>

        <p><strong>Educational Use and Attribution:</strong> We may use submissions as examples within educational contexts, with appropriate anonymization and attribution where feasible.</p>
        
        <p className="bg-black text-white p-4 text-xs">
          <strong>Limitation:</strong> This license does not grant Kattalyx Labs the right to sell your content, publicly publish your content outside the platform without permission, or use your personal information in marketing without consent.
        </p>
      </div>
    </div>

    {/* 4.4 THIRD-PARTY IP */}
    <div className="pt-8 border-t border-gray-100">
      <h3 className="font-bold text-black mb-4 uppercase tracking-tight">
        <span className="text-xs font-mono text-gray-400">4.4</span> THIRD-PARTY INTELLECTUAL PROPERTY
      </h3>
      <p className="text-gray-500 italic">
        Our platforms and services may include third-party content, components, or integrations licensed from external 
        providers. The intellectual property rights for these elements remain with their respective owners. Your use of 
        such third-party IP is governed by their respective licenses and terms.
      </p>
    </div>

  </div>
</section>


        {/* SECTION 5: USER CONDUCT AND PROHIBITED ACTIVITIES */}
        <section id="section5" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 5: USER CONDUCT AND PROHIBITED ACTIVITIES
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700">
            <p className="italic text-gray-500 underline underline-offset-4">
              By using Kattalyx Labs services, you agree to adhere to the highest standards of conduct and agree NOT to
              engage in any of the following prohibited activities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

              {/* 5.1 LEGAL AND ETHICAL */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.1 LEGAL AND ETHICAL CONDUCT VIOLATIONS</h3>
                <p className="mb-3 text-xs text-gray-400 font-mono italic">Users must not:</p>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300">
                  <li>Use our services for any illegal, fraudulent, or deceptive purpose.</li>
                  <li>Violate any applicable federal, state, or local laws, regulations, or ordinances.</li>
                  <li>Engage in any activity that facilitates illegal activities, including money laundering, human trafficking, drug trafficking, or terrorism financing.</li>
                  <li>Use services in any manner that violates court orders, government directives, or legal injunctions.</li>
                  <li>Participate in any form of fraud, impersonation, identity theft, or misrepresentation.</li>
                </ul>
              </div>

              {/* 5.2 HARASSMENT */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.2 HARASSMENT AND THREATENING CONDUCT</h3>
                <p className="mb-3 text-xs text-gray-400 font-mono italic">Users must not:</p>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300">
                  <li>Harass, bully, intimidate, threaten, or abuse any individual or group.</li>
                  <li>Send unwanted messages, make threatening calls, or engage in stalking behavior.</li>
                  <li>Discriminate against any individual or group based on protected characteristics including race, color, ethnicity, national origin, religion, caste, gender, sexual orientation, gender identity, disability, age, marital status, or veteran status.</li>
                  <li>Post hateful, defamatory, libelous, or slanderous content about any individual or group.</li>
                  <li>Incite or encourage violence, hatred, or discrimination against any individual or group.</li>
                </ul>
              </div>

              {/* 5.3 INTELLECTUAL PROPERTY VIOLATIONS */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.3 INTELLECTUAL PROPERTY AND CONTENT VIOLATIONS</h3>
                <p className="mb-3 text-xs text-gray-400 font-mono italic">Users must not:</p>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300">
                  <li>Reproduce, distribute, or publicly display copyrighted material without authorization.</li>
                  <li>Upload, post, or distribute content that infringes on third-party intellectual property rights.</li>
                  <li>Use trademarks, service marks, or brand names without authorization.</li>
                  <li>Plagiarize or misappropriate content from other sources and present it as original work.</li>
                  <li>Violate academic integrity standards by cheating, plagiarizing, or falsifying academic records.</li>
                </ul>
              </div>

              {/* 5.4 SECURITY AND SYSTEM INTEGRITY */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.4 SECURITY AND SYSTEM INTEGRITY VIOLATIONS</h3>
                <p className="mb-3 text-xs text-gray-400 font-mono italic">Users must not:</p>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300 text-[13px]">
                  <li>Attempt to gain unauthorized access to our systems, servers, databases, or networks.</li>
                  <li>Attempt to hack, crack, break, or circumvent any security measures or authentication systems.</li>
                  <li>Upload, distribute, or attempt to introduce viruses, malware, trojan horses, worms, or other malicious code.</li>
                  <li>Conduct denial-of-service (DoS) attacks or distributed denial-of-service (DDoS) attacks against our infrastructure.</li>
                  <li>Attempt to exploit vulnerabilities, loopholes, or bugs in our systems.</li>
                  <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of our software.</li>
                  <li>Perform port scanning, packet sniffing, or other network reconnaissance activities.</li>
                  <li>Use automated scripts, bots, crawlers (except standard search engine bots), or other automated tools to scrape data from our websites without explicit permission.</li>
                </ul>
              </div>

              {/* 5.5 PRIVACY */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.5 PRIVACY AND DATA PROTECTION VIOLATIONS</h3>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300">
                  <li>Collect or harvest personal information from other users without consent.</li>
                  <li>Share other users' personal information with third parties without authorization.</li>
                  <li>Use other users' account credentials or attempt to log in to other users' accounts.</li>
                  <li>Bypass privacy protections or access controls on our systems.</li>
                  <li>Sell, trade, or misuse personal information of other users.</li>
                </ul>
              </div>

              {/* 5.6 SPAM */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.6 SPAM AND UNWANTED COMMUNICATIONS</h3>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300">
                  <li>Send unsolicited email marketing, promotional materials, or commercial messages.</li>
                  <li>Post repetitive, irrelevant, or off-topic content intended as spam.</li>
                  <li>Send or distribute chain letters, pyramid schemes, or other fraudulent schemes.</li>
                  <li>Use our communication channels for mass distribution of unsolicited content.</li>
                </ul>
              </div>

              {/* 5.7 INAPPROPRIATE CONTENT */}
              <div className="bg-red-50/30 p-6 border border-red-100">
                <h3 className="font-bold text-red-900 mb-4 uppercase text-[13px] tracking-tight">5.7 INAPPROPRIATE CONTENT</h3>
                <ul className="space-y-2 pl-4 list-decimal marker:text-red-300">
                  <li>Post, upload, or distribute sexually explicit, pornographic, or adult content.</li>
                  <li>Distribute content involving minors in exploitative, abusive, or inappropriate situations.</li>
                  <li>Post gruesome, graphic violence or Gore content intended to shock or disturb.</li>
                  <li>Distribute content promoting self-harm, suicide, eating disorders, or dangerous behaviors.</li>
                </ul>
              </div>

              {/* 5.8 MISCONDUCT */}
              <div>
                <h3 className="font-bold text-black mb-4 uppercase text-[13px] tracking-tight border-b pb-1">5.8 COMPETITIVE AND COMMERCIAL MISCONDUCT</h3>
                <ul className="space-y-2 pl-4 list-decimal marker:text-gray-300">
                  <li>Access our services for intelligence gathering about competitors or competitive advantage.</li>
                  <li>Use our platforms to promote competing services or products without authorization.</li>
                  <li>Engage in bait-and-switch tactics, misleading advertising, or deceptive business practices.</li>
                  <li>Solicit funds or conduct unauthorized commercial transactions on our platform.</li>
                  <li>Use institutional access to benefit personal commercial ventures without authorization.</li>
                </ul>
              </div>
            </div>

            {/* 5.9 ENFORCEMENT AND CONSEQUENCES */}
            <div className="bg-black text-white p-10 mt-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-serif text-2xl mb-6 border-b border-gray-800 pb-2">5.9 ENFORCEMENT AND CONSEQUENCES</h3>
                <p className="mb-6 text-gray-400 italic">Violation of these conduct standards may result in:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none mb-8">
                  <li className="flex gap-2"><span>1.</span> <span>Immediate suspension of your account without advance notice or refund.</span></li>
                  <li className="flex gap-2"><span>2.</span> <span>Permanent termination of access to Kattalyx Labs services.</span></li>
                  <li className="flex gap-2"><span>3.</span> <span>Legal action including civil lawsuits and criminal prosecution where applicable.</span></li>
                  <li className="flex gap-2"><span>4.</span> <span>Reporting to law enforcement agencies for illegal activities.</span></li>
                  <li className="flex gap-2"><span>5.</span> <span>Banning from accessing our services under any account or identity.</span></li>
                  <li className="flex gap-2"><span>6.</span> <span>Forfeiture of any fees, credits, or service time paid.</span></li>
                </ul>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-center pt-6 border-t border-gray-800">
                  We reserve the right to investigate suspected violations, block accounts, and cooperate with law enforcement as necessary.
                </p>
              </div>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 rounded-full -mr-16 -mt-16 opacity-50"></div>
            </div>

          </div>
        </section>


        {/* SECTION 6: DETAILED LIMITATION OF LIABILITY AND DISCLAIMERS */}
<section id="section6" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
  <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
    SECTION 6: DETAILED LIMITATION OF LIABILITY AND DISCLAIMERS
  </h2>

  <div className="space-y-12 text-sm leading-relaxed">
    
    {/* 6.1 SERVICE PROVIDED AS-IS */}
    <div className="bg-gray-50 p-8 border border-gray-100">
      <h3 className="font-bold text-black mb-4 uppercase tracking-tight flex items-center gap-2">
        <span className="text-xs font-mono text-gray-400">6.1</span> SERVICE PROVIDED "AS-IS"
      </h3>
      <p className="mb-6 font-medium">
        Kattalyx Labs provides its website, applications, and services on an "AS-IS" and "AS-AVAILABLE" basis 
        without any express, implied, or statutory warranties of any kind, whether written or oral. To the maximum 
        extent permitted by applicable law, we disclaim all warranties, including but not limited to:
      </p>
      <ul className="space-y-3 pl-4">
        <li><span className="font-bold uppercase text-xs tracking-tighter">Warranties of MERCHANTABILITY:</span> We make no warranty that our services are fit for a particular purpose.</li>
        <li><span className="font-bold uppercase text-xs tracking-tighter">Warranties OF FITNESS FOR A PARTICULAR PURPOSE:</span> We do not guarantee that our services will meet your specific requirements or expectations.</li>
        <li><span className="font-bold uppercase text-xs tracking-tighter">Warranties OF NON-INFRINGEMENT:</span> We make no warranty that our services do not infringe on third-party intellectual property rights.</li>
        <li><span className="font-bold uppercase text-xs tracking-tighter">Warranties OF ACCURACY OR COMPLETENESS:</span> We do not warrant that content, information, or data provided through our services is accurate, complete, current, or reliable.</li>
        <li><span className="font-bold uppercase text-xs tracking-tighter">Warranties OF CONTINUOUS OR ERROR-FREE OPERATION:</span> We do not guarantee that our services will operate without interruption, delays, errors, or defects.</li>
        <li><span className="font-bold uppercase text-xs tracking-tighter">Warranties OF SECURITY:</span> While we implement security measures, we do not guarantee absolute security or freedom from unauthorized access.</li>
      </ul>
    </div>

    {/* 6.2 LIMITATION ON LIABILITY */}
    <div>
      <h3 className="font-bold text-black mb-6 uppercase tracking-tight flex items-center gap-2">
        <span className="text-xs font-mono text-gray-400">6.2</span> LIMITATION ON LIABILITY
      </h3>
      <div className="border-l-4 border-black pl-6 py-2 mb-6">
        <p className="font-black text-black text-[13px] leading-tight mb-6">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KATTALYX LABS, ITS DIRECTORS, 
          OFFICERS, EMPLOYEES, AGENTS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p><strong>Indirect Damages:</strong> Indirect, incidental, special, consequential, or punitive damages, even if we have been advised of the possibility of such damages.</p>
          <p><strong>Lost Profits or Business:</strong> Any loss of profits, loss of business, loss of revenue, loss of opportunity, or lost business goodwill arising from your use of or inability to use our services.</p>
          <p><strong>Lost Data:</strong> Loss of, corruption of, or inability to access personal data, documents, files, or information stored on or transmitted through our services, regardless of cause.</p>
          <p><strong>Interruption or Unavailability:</strong> Damages arising from service interruptions, unavailability, downtime, technical failures, or inability to access our services.</p>
          <p><strong>Third-Party Conduct:</strong> Damages arising from the actions, inactions, negligence, or conduct of third parties, including third-party service providers, payment processors, hosting providers, or other external parties.</p>
          <p><strong>Errors or Omissions:</strong> Damages arising from errors, omissions, inaccuracies, or incompleteness of information provided through our services.</p>
          <p className="md:col-span-2"><strong>Unauthorized Access:</strong> Damages arising from unauthorized access to your account, breach of account security, or misuse of your account by third parties, unless such breach results from our gross negligence.</p>
        </div>
      </div>
    </div>

    {/* 6.3 CAP ON LIABILITY */}
    <div className="p-8 bg-black text-white rounded-sm">
      <h3 className="font-bold mb-4 uppercase tracking-widest text-gray-400">6.3 CAP ON LIABILITY</h3>
      <p className="mb-4 text-sm leading-relaxed">
        Even if any claim against Kattalyx Labs succeeds in whole or in part, and even if the remedies provided in 
        these Terms fail of their essential purpose, the total aggregate liability of Kattalyx Labs to you shall not exceed 
        the amount you have paid to Kattalyx Labs in the twelve (12) months immediately preceding the event giving 
        rise to liability.
      </p>
      <div className="bg-gray-900 p-4 border-l-2 border-white mt-4 italic text-gray-300">
        In other words, the maximum amount Kattalyx Labs could be liable to you under any theory of liability (whether 
        contract, tort, breach of warranty, negligence, or otherwise) is limited to the amount you have paid us for 
        services in the past 12 months. If you have not paid Kattalyx Labs any fees, then our maximum liability is zero.
      </div>
    </div>

    {/* 6.4 SERVICE AVAILABILITY */}
    <div>
      <h3 className="font-bold text-black mb-4 uppercase tracking-tight">6.4 SERVICE AVAILABILITY AND INTERRUPTIONS</h3>
      <p className="mb-4">We strive to maintain uninterrupted service; however, we do not guarantee continuous, error-free, or uninterrupted access to our services. Service interruptions may occur due to:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-gray-600 italic">
        <li>- Scheduled maintenance and system upgrades</li>
        <li>- Server failures or technical issues</li>
        <li>- Network outages or internet provider failures</li>
        <li>- Power outages or infrastructure failures</li>
        <li>- Natural disasters, acts of God, or force majeure events</li>
        <li>- Cyberattacks, security incidents, or malicious activities</li>
        <li>- Government directives or regulatory actions</li>
        <li>- Third-party service provider outages</li>
      </div>
      <p className="mt-4 font-bold text-black underline">We are not liable for damages arising from any service interruption or unavailability, regardless of cause.</p>
    </div>

    {/* 6.5 EDUCATIONAL OUTCOMES */}
    <div className="border-y border-gray-100 py-8">
      <h3 className="font-bold text-black mb-4 uppercase tracking-tight">6.5 EDUCATIONAL OUTCOMES DISCLAIMER</h3>
      <p className="mb-6">Kattalyx Labs provides educational programs, training, and career services with the reasonable expectation that participants will benefit from such services. However, we explicitly disclaim any guarantee of educational outcomes, specific results, or professional success. Specifically:</p>
      <ul className="space-y-3 pl-4 border-l border-gray-200">
        <li className="flex gap-2"><span>-</span> <span>We do not guarantee that program participation will result in specific academic improvements or test score gains.</span></li>
        <li className="flex gap-2"><span>-</span> <span>We do not guarantee job placement, internship placements, or employment opportunities.</span></li>
        <li className="flex gap-2"><span>-</span> <span>We do not guarantee salary increases, promotions, or career advancement.</span></li>
        <li className="flex gap-2"><span>-</span> <span>Educational outcomes depend on individual effort, commitment, existing knowledge, and countless other factors beyond our control.</span></li>
        <li className="flex gap-2"><span>-</span> <span>Program effectiveness varies based on individual circumstances, learning styles, prior education, and personal dedication.</span></li>
        <li className="flex gap-2"><span>-</span> <span>While we provide quality instruction and resources, individual learning outcomes are ultimately the responsibility of the student.</span></li>
      </ul>
      <p className="mt-6 text-xs uppercase font-bold tracking-widest text-center py-2 bg-gray-50">Participation in our programs should be undertaken with realistic expectations about potential outcomes.</p>
    </div>

    {/* 6.6 THIRD-PARTY CONTENT */}
    <div>
      <h3 className="font-bold text-black mb-4 uppercase tracking-tight">6.6 THIRD-PARTY CONTENT AND SERVICES DISCLAIMER</h3>
      <p className="mb-4">Our platforms may contain or link to third-party content, products, services, and recommendations from external providers. We make no representations or warranties regarding:</p>
      <ul className="space-y-2 mb-6 italic text-gray-500">
        <li>• The accuracy, completeness, quality, or legality of third-party content.</li>
        <li>• The functionality, reliability, or security of third-party services and products.</li>
        <li>• The business practices, ethical standards, or professional credentials of third-party providers.</li>
        <li>• The terms, conditions, or policies of third-party platforms.</li>
      </ul>
      <p className="p-4 bg-red-50 text-red-900 text-xs border border-red-100">
        <strong>Warning:</strong> We do not endorse, recommend, or assume responsibility for third-party content, services, or providers. Your use of third-party services is entirely at your own risk and is governed by their terms and conditions.
      </p>
    </div>

  </div>
</section>


        {/* SECTION 7: PAYMENT METHODS CLEARLY LISTED (REPEATED FOR EMPHASIS) */}
        <section id="section7" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 7: PAYMENT METHODS CLEARLY LISTED (REPEATED FOR EMPHASIS)
          </h2>

          <div className="space-y-8 text-sm leading-relaxed text-gray-700">
            <p className="italic font-medium text-gray-500 bg-gray-50 p-4 border-l-4 border-gray-200">
              To ensure absolute clarity for regulatory compliance, our accepted payment methods are unambiguously listed
              here:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* RAZORPAY COLUMN */}
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="font-bold text-black mb-4 uppercase tracking-tighter text-xs border-b pb-2">RAZORPAY PAYMENT GATEWAY:</h3>
                <ul className="space-y-2 text-[13px]">
                  <li className="flex gap-2"><span>-</span> <span>Credit Cards (Visa, Mastercard, Amex)</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Debit Cards (Visa, Mastercard, RuPay)</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Net Banking (NEFT via all major Indian banks)</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Digital Wallets (Paytm, Google Pay, PhonePe, Amazon Pay)</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Unified Payments Interface - UPI (Google Pay, PhonePe, Paytm, BHIM, etc.)</span></li>
                  <li className="flex gap-2"><span>-</span> <span>EMI Options (for eligible credit cards)</span></li>
                </ul>
              </div>

              {/* BANK TRANSFER COLUMN */}
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="font-bold text-black mb-4 uppercase tracking-tighter text-xs border-b pb-2">BANK TRANSFER:</h3>
                <ul className="space-y-2 text-[13px]">
                  <li className="flex gap-2"><span>-</span> <span>Direct bank transfer to Kattalyx Labs Private Limited account</span></li>
                  <li className="flex gap-2"><span>-</span> <span>NEFT, RTGS, or IMPS transfers</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Account details provided during transaction</span></li>
                </ul>
              </div>

              {/* CHEQUE COLUMN */}
              <div className="border border-gray-200 p-6 rounded-sm bg-gray-50/50">
                <h3 className="font-bold text-black mb-4 uppercase tracking-tighter text-xs border-b pb-2">CHEQUE:</h3>
                <ul className="space-y-2 text-[13px]">
                  <li className="flex gap-2"><span>-</span> <span>Cheques payable to "Kattalyx Labs Private Limited"</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Mailed to registered address</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Payment effective upon clearance</span></li>
                </ul>
              </div>

            </div>

            <div className="w-full h-px bg-gray-100 mt-8"></div>
          </div>
        </section>


        {/* SECTION 8: TERMINATION OF SERVICES AND ACCOUNTS */}
        <section id="section8" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 8: TERMINATION OF SERVICES AND ACCOUNTS
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700">

            {/* 8.1 TERMINATION BY THE USER */}
            <div className="border-l-2 border-gray-200 pl-6">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">8.1</span> TERMINATION BY THE USER
              </h3>
              <p className="mb-4">You may terminate your account and cease using our services at any time by:</p>
              <ul className="space-y-4 pl-5 list-decimal marker:font-bold">
                <li>Submitting a written termination request to <span className="underline font-medium">kattalyxlabs@gmail.com</span>.</li>
                <li>Logging into your account and selecting the account deletion or termination option (if available).</li>
                <li>Upon termination, your access to your account and our services will cease immediately.</li>
                <li>Outstanding fees and charges remain due and payable even after account termination.</li>
                <li>Termination does not affect your obligations under this Agreement, including confidentiality, indemnification, and liability limitations.</li>
              </ul>
            </div>

            {/* 8.2 TERMINATION BY KATTALYX LABS */}
            <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">8.2</span> TERMINATION BY KATTALYX LABS
              </h3>
              <p className="mb-4 font-medium italic">Kattalyx Labs may terminate or suspend your account and access to services, with or without advance notice, if:</p>
              <ul className="space-y-3 pl-5 list-decimal marker:text-gray-400 mb-8">
                <li>You breach any material provision of these Terms.</li>
                <li>You violate applicable laws or regulations.</li>
                <li>You engage in conduct that we believe violates our community standards or acceptable use policies.</li>
                <li>You fail to pay for services as agreed.</li>
                <li>We receive complaints or evidence of illegal, fraudulent, or harmful conduct.</li>
                <li>You repeatedly violate our policies or terms.</li>
                <li>Your account is dormant or inactive for an extended period (generally 12+ months).</li>
                <li>We discontinue offering services or specific service features.</li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-bold text-black text-xs uppercase tracking-widest mb-4">Upon termination:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-gray-600">
                  <li className="flex gap-2"><span>-</span> <span>Your access to your account and services ceases immediately.</span></li>
                  <li className="flex gap-2"><span>-</span> <span>We may delete your account data in accordance with our data retention policies.</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Outstanding balances remain due and payable.</span></li>
                  <li className="flex gap-2"><span>-</span> <span>Prepaid service credits are forfeited unless otherwise required by law.</span></li>
                  <li className="flex gap-2"><span>-</span> <span>All licenses and rights granted to you terminate immediately.</span></li>
                </ul>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 9: AMENDMENTS AND MODIFICATIONS TO THESE TERMS */}
        <section id="section9" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 9: AMENDMENTS AND MODIFICATIONS TO THESE TERMS
          </h2>

          <div className="space-y-12 text-sm leading-relaxed">

            {/* 9.1 RIGHT TO MODIFY TERMS */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">9.1</span> RIGHT TO MODIFY TERMS
              </h3>
              <p className="mb-6">
                Kattalyx Labs reserves the right to modify, amend, or revise these Terms and Conditions at any time. When we
                make material changes to these Terms, we will:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Post the modified Terms on our website with a clearly visible notification.",
                  "Update the \"Last Updated\" date at the top of this document.",
                  "For material changes affecting your rights and obligations, we will provide advance notice via email.",
                  "For material changes, we may require you to affirmatively accept the modified Terms before continuing to use our services."
                ].map((step, index) => (
                  <div key={index} className="p-4 border border-gray-100 bg-gray-50/50 flex gap-4 items-start">
                    <span className="font-mono text-xs text-gray-400 mt-1">0{index + 1}</span>
                    <span className="text-[13px]">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 9.2 YOUR ACCEPTANCE OF MODIFICATIONS */}
            <div className="border-t border-gray-100 pt-10">
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">9.2</span> YOUR ACCEPTANCE OF MODIFICATIONS
              </h3>
              <div className="bg-black text-white p-6 rounded-sm">
                <p className="mb-4 leading-relaxed">
                  Your continued use of Kattalyx Labs services after modifications to these Terms constitutes your acceptance of
                  the modified Terms.
                </p>
                <p className="text-gray-400 text-xs italic border-l border-gray-700 pl-4">
                  If you do not accept the modified Terms, you must discontinue your use of our services
                  and request account termination.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 10: GOVERNING LAW AND DISPUTE RESOLUTION */}
        <section id="section10" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 10: GOVERNING LAW AND DISPUTE RESOLUTION
          </h2>

          <div className="space-y-12 text-sm leading-relaxed">

            {/* 10.1 GOVERNING LAW */}
            <div className="bg-gray-50 p-8 border-l-4 border-black">
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">10.1</span> GOVERNING LAW
              </h3>
              <p className="leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of
                India, specifically the state of Uttar Pradesh, without regard to its conflict of law principles. Any legal
                proceedings or disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts
                located in Uttar Pradesh.
              </p>
            </div>

            {/* 10.2 DISPUTE RESOLUTION PROCEDURES */}
            <div>
              <h3 className="font-bold text-black mb-6 uppercase tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">10.2</span> DISPUTE RESOLUTION PROCEDURES
              </h3>
              <p className="mb-8 italic text-gray-500">Before resorting to litigation, both parties agree to follow these dispute resolution procedures:</p>

              <div className="space-y-6 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-xs z-10">1</div>
                  <p className="font-bold text-black mb-1">Step 1 - Good Faith Negotiation:</p>
                  <p>Either party with a dispute shall first send a written notice clearly describing the dispute, the facts supporting the claim, and the desired resolution. The parties agree to negotiate in good faith for thirty (30) days to attempt to resolve the dispute.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-xs z-10">2</div>
                  <p className="font-bold text-black mb-1">Step 2 - Escalation to Senior Management:</p>
                  <p>If the dispute is not resolved through initial negotiation, the dispute shall be escalated to senior management of both parties for further negotiation.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center font-bold text-xs z-10">3</div>
                  <p className="font-bold text-black mb-1">Step 3 - Mediation (Optional):</p>
                  <p>If the parties agree, they may engage a mutually selected neutral mediator to facilitate resolution. Mediation costs shall be borne equally by both parties.</p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-9 h-9 bg-black border border-black rounded-full flex items-center justify-center font-bold text-xs text-white z-10">4</div>
                  <p className="font-bold text-black mb-1">Step 4 - Arbitration or Litigation:</p>
                  <p>If the dispute remains unresolved after the above steps, either party may pursue litigation in the courts of Uttar Pradesh as outlined above.</p>
                </div>
              </div>
            </div>

            {/* 10.3 ESCALATION TO CONSUMER PROTECTION */}
            <div className="pt-10 border-t border-gray-100">
              <h3 className="font-bold text-black mb-6 uppercase tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">10.3</span> ESCALATION TO CONSUMER PROTECTION AUTHORITIES
              </h3>
              <p className="mb-6">If the dispute remains unresolved through our internal procedures, you may pursue remedies through:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-100 hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[12px] uppercase mb-2">Consumer Protection Act, 2019</p>
                  <p className="text-[13px] text-gray-500">Filing a complaint with the appropriate consumer protection authority in your jurisdiction.</p>
                </div>
                <div className="p-4 border border-gray-100 hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[12px] uppercase mb-2">ADR Mechanisms</p>
                  <p className="text-[13px] text-gray-500">Government-facilitated ADR mechanisms available in your state.</p>
                </div>
                <div className="p-4 border border-gray-100 hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-[12px] uppercase mb-2">Legal Action</p>
                  <p className="text-[13px] text-gray-500">Filing a case in appropriate civil courts having jurisdiction.</p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 11: INDEMNIFICATION CLAUSE */}
        <section id="section11" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 11: INDEMNIFICATION CLAUSE
          </h2>
          <div className="space-y-6 text-sm leading-relaxed">
            <p className="font-medium italic">
              You agree to indemnify, defend, and hold harmless Kattalyx Labs Private Limited, its directors, officers,
              employees, agents, and representatives from and against any and all claims, damages, losses, costs, and
              expenses (including reasonable attorneys' fees) arising from or related to:
            </p>
            <ul className="space-y-3 pl-5 list-decimal marker:font-bold">
              <li>Your use of our services or any services accessed through our services.</li>
              <li>Your violation or breach of these Terms and Conditions.</li>
              <li>Your violation of any applicable law, regulation, or third-party right.</li>
              <li>Your intellectual property infringement or violation of third-party intellectual property rights.</li>
              <li>Your user-generated content, submissions, or materials provided to us.</li>
              <li>Any negligence, misconduct, or illegal activity on your part.</li>
              <li>Claims by third parties related to your actions or use of our services.</li>
            </ul>
            <p className="p-4 bg-gray-50 border-l-4 border-black text-xs uppercase font-bold tracking-tight">
              This indemnification obligation is continuous and survives termination of your account and these Terms.
            </p>
          </div>
        </section>

        {/* SECTION 12: CONTACT INFORMATION AND SUPPORT */}
        <section id="section12" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 12: CONTACT INFORMATION AND SUPPORT
          </h2>
          <div className="bg-white border border-gray-200 p-8 shadow-sm">
            <p className="mb-6 text-sm">For questions, disputes, support requests, or concerns regarding these Terms and Conditions or our services, please contact:</p>

            <div className="space-y-4 text-sm">
              <p className="font-bold text-lg text-black">Kattalyx Labs Private Limited</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-2">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest text-[10px]">Registered Address</p>
                  <p className="leading-relaxed">C/o Manish Jain, Nai Mandi, Baraut, Baghpat, Uttar Pradesh 250611, India</p>
                </div>
                <div className="space-y-2 text-right md:text-left">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest text-[10px]">Email Address</p>
                  <p className="font-medium underline">kattalyxlabs@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[10px] font-mono text-gray-400 uppercase">CIN</p>
                  <p className="font-mono text-xs font-bold text-black">U85500UP2025PTC239031</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 uppercase">PAN</p>
                  <p className="font-mono text-xs font-bold text-black">AAMCK4220H</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 uppercase">TAN</p>
                  <p className="font-mono text-xs font-bold text-black">MRTK09475E</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs italic text-gray-500 text-center py-2 bg-gray-50">
              We commit to responding to all inquiries, support requests, complaints, and dispute notices within seven (7) business days of receipt.
            </p>
          </div>
        </section>

        {/* SECTION 13: ENTIRE AGREEMENT AND SEVERABILITY */}
        <section id="section13" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 text-sm leading-relaxed">
          <h2 className="font-serif text-2xl mb-8 uppercase tracking-wider text-black">
            SECTION 13: ENTIRE AGREEMENT AND SEVERABILITY
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight">13.1 ENTIRE AGREEMENT</h3>
              <p className="mb-4">
                These Terms and Conditions, together with our Privacy Policy, Refund and Cancellation Policy, and any
                specific service agreements, constitute the entire agreement between you and Kattalyx Labs regarding your
                use of our services. These Terms supersede and replace any prior agreements, understandings, negotiations,
                and discussions, whether written or oral.
              </p>
              <p className="italic text-gray-500">No prior agreements, course of dealing, course of performance, or trade usage shall be considered to modify these Terms.</p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight">13.2 SEVERABILITY</h3>
              <p className="mb-4">
                If any provision of these Terms is found to be invalid, unenforceable, or illegal by a court of competent
                jurisdiction, that provision shall be severed or modified to the minimum extent necessary to make it
                enforceable, while preserving the intent of the provision. The remainder of these Terms shall remain in full
                force and effect.
              </p>
              <p className="bg-gray-50 p-4 border-l-2 border-gray-200">
                If a provision cannot be made enforceable, the parties shall negotiate in good faith to agree upon a
                replacement provision that achieves the original economic and legal objectives.
              </p>
            </div>
          </div>
        </section>

        {/* ACKNOWLEDGMENT AND AGREEMENT */}
        <section className="mb-24 p-10 bg-black text-white text-center rounded-sm">
          <h2 className="font-serif text-xl mb-8 tracking-[0.2em] uppercase">ACKNOWLEDGMENT AND AGREEMENT</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm text-gray-400">
            <p>By using Kattalyx Labs services, you acknowledge that:</p>
            <ul className="space-y-2 list-none">
              <li>1. You have read this entire Terms and Conditions document</li>
              <li>2. You understand all terms, conditions, and provisions</li>
              <li>3. You are legally bound by these Terms</li>
              <li>4. You accept all terms without reservation</li>
              <li>5. You have the authority to enter into this binding agreement</li>
            </ul>
            <p className="mt-10 pt-10 border-t border-gray-800 text-white font-bold tracking-widest text-xs uppercase">
              This Terms and Conditions is effective as of December 19, 2025.
            </p>
          </div>
        </section>

        {/* FOOTER - END OF DOCUMENT */}
        <footer className="mt-32 pb-16 text-center text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">
          <p className="mb-2">END OF TERMS AND CONDITIONS</p>
          <p>Last Updated: December 19, 2025 | Effective Date: December 19, 2025</p>
        </footer>

      </main>
    </div>
  );
};

export default TermsAndConditions;