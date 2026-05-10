
const REFUNDANDCANCELLATION = () => {

  return (
    <div className="flex min-h-screen bg-[#FCFCFC] font-sans text-gray-900  justify-center items-center">


      {/* MAIN CONTENT AREA */}
      <main className="flex-1  p-6 md:p-12 lg:p-20 max-w-5xl">

        {/* DOCUMENT HEADER */}
        <header className="mb-20 border-b border-gray-100 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-6 uppercase tracking-tight">
            REFUND AND CANCELLATION POLICY
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-gray-500">
            <span>Effective Date: December 19, 2025</span>
            <span>Last Updated: December 19, 2025</span>
          </div>
        </header>

        {/* INTRODUCTION SECTION */}
        <section id="intro" className="mb-24 scroll-mt-20">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider">
            INTRODUCTION AND POLICY OVERVIEW
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-justify text-gray-700">
            <p>
              This comprehensive Refund and Cancellation Policy ("Policy") establishes the detailed framework governing
              refund eligibility, refund processing procedures, cancellation rights, and service termination terms for all
              customers, students, and institutional clients of Kattalyx Labs Private Limited. 
            </p>
            <p>Kattalyx Labs Private Limited, a company incorporated under the Companies Act, 2013 with Corporate Identity
              Number U85500UP2025PTC239031, is committed to ensuring customer satisfaction, fair dealing, and
              transparent financial practices. We believe that clear refund policies protect both our customers and our
              business by establishing mutual expectations and responsibilities. </p>
            
            <p>This Policy applies to all services provided by Kattalyx Labs, including but not limited to real-world learning
              programs, educational courses, EliteVerse ERP system subscriptions, internship services, career counseling,
              event registrations, training modules, school branding services, and any other products or services offered by
              Kattalyx Labs.
            </p>

            <div className="bg-gray-50 p-6 border border-gray-100 font-mono text-xs leading-loose">
              <p className="font-bold mb-2 underline text-black">Our contact information for all refund-related inquiries is:</p>
              Email: kattalyxlabs@gmail.com <br />
              Registered Address: C/o Manish Jain, Nai Mandi, Baraut, Baghpat, Uttar Pradesh 250611, India <br />
              Corporate Identity Number (CIN): U85500UP2025PTC239031<br />
              Permanent Account Number (PAN): AAMCK4220H<br />
            </div>

          </div>
        </section>


        {/* SECTION 1: COMPREHENSIVE REFUND ELIGIBILITY CRITERIA */}
        <section id="section1" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 1: COMPREHENSIVE REFUND ELIGIBILITY CRITERIA
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-justify">
            {/* 1.1 ELIGIBLE */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight text-xs">
                1.1 SERVICES ELIGIBLE FOR REFUND
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Non-Delivery", desc: "Payment received but service not initiated or commenced." },
                  { title: "Technical Errors", desc: "Overcharges, double-charges, or system billing malfunctions." },
                  { title: "Duplicate Transactions", desc: "Multiple charges due to payment gateway failures." },
                  { title: "Unauthorized Transactions", desc: "Charges made without consent, pending verification." },
                  { title: "Material Non-Performance", desc: "Service not delivered as described in marketing materials." },
                  { title: "Company Cancellation", desc: "Kattalyx Labs cancels or discontinues a contracted service." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-gray-100 bg-white">
                    <p className="font-bold text-black mb-1 uppercase text-[10px] tracking-wide">{item.title}</p>
                    <p className="text-[12px] text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.2 NOT ELIGIBLE */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-bold text-red-700 mb-6 flex items-center gap-2 uppercase tracking-tight text-xs italic">
                1.2 SERVICES AND CIRCUMSTANCES NOT ELIGIBLE FOR REFUND
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[13px]">
                <li>• <strong>Digital Content:</strong> Once accessed, downloaded, or viewed.</li>
                <li>• <strong>Online Courses:</strong> After commencement or any activity participation.</li>
                <li>• <strong>Internships:</strong> Immediately upon placement or commencement.</li>
                <li>• <strong>Custom Work:</strong> Once development or creative work has begun.</li>
                <li>• <strong>Personal Changes:</strong> Change of mind, loss of interest, or personal scheduling.</li>
                <li>• <strong>Late Requests:</strong> Claims submitted 30 days beyond the refund window.</li>
              </ul>
              <p className="mt-6 pt-4 border-t border-gray-200 text-[11px] uppercase font-bold text-gray-400">
                Strict Policy: Non-use of a service does not warrant a refund.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: DETAILED REFUND WINDOWS BY SERVICE CATEGORY */}
        <section id="section2" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 2: DETAILED REFUND WINDOWS BY SERVICE CATEGORY
          </h2>

          <div className="space-y-16">
            {/* 2.1 & 2.2 Learning Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-xs tracking-widest">2.1 Real-World Learning & Workshops</h3>
                <p className="text-sm font-bold text-blue-600">Full Refund: 7 Calendar Days from purchase.</p>
                <p className="text-[12px] leading-relaxed">Conditions: Program must not have commenced; no attendance; no resource access. 50% partial refund available after 7 days but before commencement.</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-xs tracking-widest">2.2 Online & E-Learning</h3>
                <p className="text-sm font-bold text-blue-600">10% Access Rule</p>
                <p className="text-[12px] leading-relaxed">Pro-rata refund available only if &lt;10% of content is accessed. Non-refundable once a certificate is issued or &gt;10% content is viewed.</p>
              </div>
            </div>

            {/* 2.3 EliteVerse ERP */}
            <div className="p-8 border-2 border-black bg-white">
              <h3 className="font-bold text-black mb-4 uppercase text-xs">2.3 EliteVerse ERP & Software Solutions</h3>
              <div className="space-y-4 text-[13px]">
                <p><strong>Institutional Trial:</strong> 30 Days from activation (Must be in unused state).</p>
                <p><strong>Annual Subscriptions:</strong> 14 Days from payment (No production data configured).</p>
                <p><strong>Monthly Subscriptions:</strong> <span className="text-red-600 font-bold uppercase text-[11px]">Strictly Non-Refundable.</span> Cancel renewals to prevent future charges.</p>
              </div>
            </div>

            {/* 2.4 - 2.7 Specialized Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[13px]">
              <div className="space-y-2">
                <p className="font-bold uppercase text-[10px] text-gray-400">2.4 Internships</p>
                <p><strong>Zero Day Window:</strong> Once placed or introduced to an employer, refund eligibility terminates immediately. Early withdrawal forfeits all fees.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold uppercase text-[10px] text-gray-400">2.5 Custom Development</p>
                <p>Phased eligibility: Full refund before work begins; 50% during planning; 0% once active development starts.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold uppercase text-[10px] text-gray-400">2.6 Branding Services</p>
                <p>Once designs are presented for approval, the service is non-refundable. Revisions are permitted per agreement.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold uppercase text-[10px] text-gray-400">2.7 Consultations</p>
                <p>7-day pre-service window. Missed appointments without prior cancellation are non-refundable.</p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: DETAILED REFUND REQUEST PROCEDURES AND PROCESSES */}
        <section id="section3" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 3: DETAILED REFUND REQUEST PROCEDURES AND PROCESSES
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-justify">
            <p className="italic text-gray-500">We have implemented a structured refund request process to ensure fair, transparent, and efficient handling of all refund claims.</p>

            {/* 3.1 STEP-BY-STEP */}
            <div className="space-y-6">
              <h3 className="font-bold text-black uppercase text-xs tracking-widest">3.1 STEP-BY-STEP REFUND REQUEST PROCEDURE</h3>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {[
                  { step: "1", title: "Initiate Request", desc: "Email kattalyxlabs@gmail.com with subject: 'REFUND REQUEST - [Order Number]'." },
                  { step: "2", title: "Required Info", desc: "Include Name, Transaction ID, Amount (INR), Order Number, and reason with invoice copy." },
                  { step: "3", title: "Verification", desc: "We verify the request against the specific service's refund window deadline." },
                  { step: "4", title: "Investigation", desc: "Our team checks account activity to verify if service/content was accessed." },
                  { step: "5", title: "Determination", desc: "We notify you if the request is APPROVED, PARTIALLY APPROVED, or DENIED with reasons." },
                  { step: "6", title: "Processing", desc: "If approved, refund is initiated via the original payment method with a confirmation ID." }
                ].map((item) => (
                  <div key={item.step} className="relative">
                    <span className="absolute -left-[41px] top-0 w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center font-mono rounded-full">
                      {item.step}
                    </span>
                    <p className="font-bold text-black uppercase text-[11px] mb-1">{item.title}</p>
                    <p className="text-[12px] text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.3 PAYMENT METHOD TIMELINES */}
            <div className="bg-gray-900 text-white p-8">
              <h3 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">3.3 REFUND TIMELINES BY METHOD</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[11px]">
                <div className="border-l border-gray-700 pl-4">
                  <p className="text-blue-400 mb-2 uppercase">Razorpay (UPI/Cards/NetBanking)</p>
                  <p>Total: 5-10 Business Days</p>
                  <p className="text-gray-500 mt-1">(1 day Company + 2 days Gateway + 7 days Bank)</p>
                </div>
                <div className="border-l border-gray-700 pl-4">
                  <p className="text-blue-400 mb-2 uppercase">Net Banking / NEFT</p>
                  <p>Total: 2-3 Business Days from approval.</p>
                </div>
                <div className="border-l border-gray-700 pl-4">
                  <p className="text-blue-400 mb-2 uppercase">Wallets & UPI</p>
                  <p>Total: 1-2 Business Days from approval.</p>
                </div>
                <div className="border-l border-gray-700 pl-4">
                  <p className="text-blue-400 mb-2 uppercase">Cheque Refunds</p>
                  <p>Total: 12-18 Business Days (Mailed to registered address).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: REFUND DEDUCTIONS AND ADJUSTMENTS */}
        <section id="section4" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 4: REFUND DEDUCTIONS AND ADJUSTMENTS
          </h2>

          <div className="space-y-10 text-sm leading-relaxed">
            {/* 4.1 ADMIN FEES */}
            <div className="p-6 border border-gray-100 bg-gray-50">
              <h3 className="font-bold text-black mb-4 uppercase text-xs">4.1 ADMINISTRATIVE PROCESSING FEES</h3>
              <p className="mb-4">A standard processing fee of <strong>Up to ₹500</strong> per request may be deducted to cover investigation and payment overhead.</p>
              <p className="text-[11px] text-gray-500 uppercase font-bold italic">Waiver: Fee is waived if the error is by Kattalyx Labs or if the refund exceeds ₹10,000.</p>
            </div>

            {/* 4.2 UTILIZATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-xs">4.2 SERVICE UTILIZATION DEDUCTIONS</h3>
                <p className="text-[13px]">Refunds are reduced proportional to the value of service consumed.
                  <br /><span className="font-mono bg-gray-100 px-1 italic">Calculation: (Original Cost) - (Service Utilized %) × (Original Cost)</span></p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-xs">4.3 GATEWAY & THIRD-PARTY CHARGES</h3>
                <p className="text-[13px]">Razorpay or Bank gateway charges (typically 1-3%) and any non-refundable partner payments made on your behalf will be deducted from the final amount.</p>
              </div>
            </div>

            {/* 4.4 SERVICE CREDITS */}
            <div className="p-6 border-2 border-dashed border-gray-200">
              <h3 className="font-bold text-black mb-2 uppercase text-xs italic text-center">4.4 SERVICE CREDITS OPTION</h3>
              <p className="text-center text-[13px]">Instead of a cash refund, you may elect to receive a **Service Credit** valid for twelve (12) months, which often includes bonus value for higher-priced services.</p>
            </div>
          </div>
        </section>



        {/* SECTION 5: SPECIFIC NON-REFUNDABLE SCENARIOS AND CLARIFICATIONS */}
        <section id="section5" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 5: SPECIFIC NON-REFUNDABLE SCENARIOS
          </h2>

          <div className="space-y-12 text-sm leading-relaxed">
            <p className="italic text-gray-500">To avoid ambiguity, the following specific scenarios are clarified as strictly non-refundable:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* 5.1 Digital Products */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-[11px] tracking-widest border-b border-gray-100 pb-2">5.1 Digital Products & Content</h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>• <strong>Downloaded Resources:</strong> Ebooks, workbooks, or templates once saved to your device.</li>
                  <li>• <strong>Accessed Courses:</strong> Any login or viewing of online course platform content.</li>
                  <li>• <strong>Video Lectures:</strong> Once recorded lectures have been watched or downloaded.</li>
                  <li>• <strong>IP Transfer:</strong> Digital content represents intellectual property transfer; once transferred, refunds are void.</li>
                </ul>
              </div>

              {/* 5.2 Attended Events */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-[11px] tracking-widest border-b border-gray-100 pb-2">5.2 Attended Events & Sessions</h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>• <strong>Physical/Virtual Participation:</strong> Any session attended or participated in.</li>
                  <li>• <strong>Partial Attendance:</strong> No pro-rata refunds for attending only a portion of a program.</li>
                  <li>• <strong>Missed Sessions:</strong> Failure to attend a live session while having access.</li>
                  <li>• <strong>Recorded Access:</strong> Accessing a recording of a missed session after-the-fact.</li>
                </ul>
              </div>

              {/* 5.3 Credentials */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-[11px] tracking-widest border-b border-gray-100 pb-2">5.3 Credentials & Certifications</h3>
                <p className="text-[13px]">Once a completion certificate, digital badge, or professional certification is issued, the program is definitively non-refundable. This includes instances where academic credits or transcripts have been recorded.</p>
              </div>

              {/* 5.4 Consulting */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase text-[11px] tracking-widest border-b border-gray-100 pb-2">5.4 Consulting & Advisory</h3>
                <p className="text-[13px]">One-on-one coaching, mentoring, and personalized roadmaps are non-refundable once the session has been conducted or the customized plan has been provided.</p>
              </div>
            </div>

            {/* 5.5 Services Declined */}
            <div className="p-6 bg-red-50/30 border border-red-100 rounded-sm">
              <h3 className="font-bold text-red-800 uppercase text-[10px] tracking-[0.2em] mb-3">5.5 User-Side Scenarios (Non-Refundable)</h3>
              <p className="text-[12px] text-red-900/70 leading-relaxed">
                Refunds are NOT available for: Non-utilization of service, personal circumstance changes (job change, relocation), lost interest, or simple change of mind. Refunds require material non-performance by Kattalyx Labs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: CANCELLATION OF ONGOING SERVICES AND SUBSCRIPTIONS */}
        <section id="section6" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 6: CANCELLATION & SUBSCRIPTIONS
          </h2>

          <div className="space-y-10 text-sm leading-relaxed">
            {/* 6.1 Procedures */}
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="font-bold text-black mb-4 uppercase text-xs">6.1 SERVICE CANCELLATION PROCEDURES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-bold text-[11px] mb-2 uppercase">Self-Service:</p>
                  <ol className="list-decimal pl-4 space-y-1 text-[13px] text-gray-500">
                    <li>Log into account settings</li>
                    <li>Select 'Cancel Subscription'</li>
                    <li>Confirm via email notification</li>
                  </ol>
                </div>
                <div>
                  <p className="font-bold text-[11px] mb-2 uppercase">Manual Request:</p>
                  <p className="text-[13px] text-gray-500">Email <span className="text-black underline font-mono">kattalyxlabs@gmail.com</span> with account email and service name.</p>
                </div>
              </div>
            </div>

            {/* 6.3 Early Termination */}
            <div className="p-8 bg-gray-900 text-white">
              <h3 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400 italic">6.3 EARLY TERMINATION PENALTIES (ANNUAL)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-700">
                  <p className="text-blue-400 font-bold mb-1">20% PENALTY</p>
                  <p className="text-[11px] uppercase tracking-tighter">Cancellation in First Half of Year</p>
                  <p className="text-[10px] text-gray-500 mt-2">Example: Cancellation of ₹12,000 plan after 6 months forfeits ₹2,400 penalty.</p>
                </div>
                <div className="p-4 border border-gray-700">
                  <p className="text-blue-400 font-bold mb-1">10% PENALTY</p>
                  <p className="text-[11px] uppercase tracking-tighter">Cancellation in Second Half of Year</p>
                </div>
              </div>
            </div>

            {/* 6.4 Reactivation */}
            <div className="p-6 border border-gray-100 font-mono text-[11px] uppercase tracking-widest text-center text-gray-400">
              6.4 Reactivation: Subject to 30-day grace period for original pricing. Beyond 30 days, current rates apply.
            </div>
          </div>
        </section>


        {/* SECTION 7: SPECIAL CIRCUMSTANCES AND EXCEPTIONS */}
        <section id="section7" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 7: SPECIAL CIRCUMSTANCES AND EXCEPTIONS
          </h2>

          <div className="space-y-10 text-sm leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 7.1 Service Failures */}
              <div className="p-6 bg-blue-50/30 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 uppercase text-[11px] tracking-widest">7.1 Kattalyx Labs Service Failures</h3>
                <p className="text-[13px] mb-4">If technical failures or outages ( `{'>'}`7 days) prevent access, you are entitled to access restoration or a **Full Refund** with no deductions.</p>
                <p className="text-[11px] italic text-blue-800/70 underline underline-offset-4">Note: Evidence (screenshots/error logs) is required for processing.</p>
              </div>

              {/* 7.2 Force Majeure */}
              <div className="p-6 bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-black mb-3 uppercase text-[11px] tracking-widest">7.2 Force Majeure</h3>
                <p className="text-[13px] mb-2">For natural disasters, lockdowns, or major telecom outages, we offer:</p>
                <ul className="text-[12px] space-y-1 list-disc pl-4 text-gray-500">
                  <li>Full Refund or Service Deferment</li>
                  <li>Alternative Service Substitution</li>
                  <li>Service Credit for future use</li>
                </ul>
              </div>
            </div>

            {/* 7.3 Institutional Clients */}
            <div className="border-l-2 border-black pl-6 py-2">
              <h3 className="font-bold text-black mb-2 uppercase text-xs">7.3 Institutional Client Special Handling</h3>
              <p className="text-[13px]">Multi-year contracts may have specialized terms that override this Policy. Refunds for volume discounts will be recalculated based on discounted unit prices.</p>
            </div>
          </div>
        </section>

        {/* SECTION 8: REFUND DISPUTES AND APPEALS */}
        <section id="section8" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 8: REFUND DISPUTES AND APPEALS
          </h2>

          <div className="space-y-8 text-sm leading-relaxed">
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="font-bold text-black mb-6 uppercase text-xs tracking-widest text-center">8.1 Appeal Procedure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[11px] uppercase">
                <div className="space-y-2">
                  <p className="text-black font-bold">Step 1: Written Appeal</p>
                  <p className="text-gray-400">Within 14 days of denial to kattalyxlabs@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <p className="text-black font-bold">Step 2: Senior Review</p>
                  <p className="text-gray-400">Reviewed by management not involved in original decision.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-black font-bold">Step 3: Response</p>
                  <p className="text-gray-400">Final determination sent within 10 business days.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-red-100 bg-red-50/20">
              <h3 className="font-bold text-red-900 mb-3 uppercase text-xs">8.2 Escalation to Consumer Protection</h3>
              <p className="text-[13px] text-red-900/70">If unsatisfied, you may escalate to the Consumer Protection Authority (Consumer Protection Act, 2019) or pursue ADR. Legal suits are subject to the jurisdiction of courts in Uttar Pradesh.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9 & 10: CONTACT & UPDATES */}
        <section id="section9" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="font-serif text-xl uppercase tracking-widest text-black border-b pb-2">Section 9: Contact & Support</h2>
              <div className="space-y-4 text-[13px] font-mono">
                <p className="text-lg text-black lowercase font-sans font-bold">kattalyxlabs@gmail.com</p>
                <p className="text-gray-500 uppercase leading-relaxed">
                  Kattalyx Labs Private Limited<br />
                  C/o Manish Jain, Nai Mandi, Baraut,<br />
                  Baghpat, Uttar Pradesh 250611, India
                </p>
                <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400">
                  <p>CIN: U85500UP2025PTC239031</p>
                  <p>PAN: AAMCK4220H | TAN: MRTK09475E</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl uppercase tracking-widest text-black border-b pb-2">Section 10: Amendments</h2>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Kattalyx Labs reserves the right to modify this Policy at any time. Material changes will be notified via email or website updates. Continued use of services after updates constitutes acceptance.
              </p>
              <div className="p-4 bg-gray-50 font-mono text-[10px] uppercase text-gray-400">
                Policy Effective: Dec 19, 2025
              </div>
            </div>
          </div>
        </section>

        {/* FINAL ACKNOWLEDGMENT */}
        <section className="mt-20 pt-20 border-t-2 border-black text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl mb-8 uppercase tracking-[0.2em] text-black">Acknowledgment</h3>
          <p className="text-xs font-mono uppercase tracking-[0.1em] text-gray-400 leading-loose mb-12">
            By using Kattalyx Labs services and making any payment, you acknowledge that you have read, understood,
            and accepted all refund windows, conditions, and procedures outlined in this policy.
          </p>

          <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-gray-300">
            <span>Last Updated: Dec 19, 2025</span>
            <span>End of Policy</span>
            <span>Kattalyx Labs Pvt Ltd</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default REFUNDANDCANCELLATION;