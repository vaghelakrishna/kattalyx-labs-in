
const PrivacyPolicy = () => {

  return (
    <div className="flex min-h-screen bg-[#FCFCFC] font-sans text-gray-900  justify-center items-center">


      {/* MAIN CONTENT AREA */}
      <main className="flex-1  p-6 md:p-12 lg:p-20 max-w-5xl">

        {/* DOCUMENT HEADER */}
        <header className="mb-20 border-b border-gray-100 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-6 uppercase tracking-tight">
            Privacy and Policy
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-gray-500">
            <span>Effective Date: December 19, 2025</span>
            <span>Last Updated: December 19, 2025</span>
          </div>
        </header>

        {/* INTRODUCTION SECTION */}
        <section id="intro" className="mb-24 scroll-mt-20">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider">
            INTRODUCTION AND COMMITMENT TO PRIVACY
          </h2>
          <div className="space-y-6 text-sm leading-relaxed text-justify text-gray-700">
            <p>
              Kattalyx Labs Private Limited, a company incorporated under the Companies Act, 2013, with Corporate
              Identity Number (CIN) U85500UP2025PTC239031, is deeply committed to protecting the privacy and security
              of all personal information entrusted to us by our users, clients, students, schools, and institutional partners.
              This comprehensive Privacy Policy (hereinafter referred to as "Policy") outlines the complete scope of
              information we collect, how we process and utilize that information, with whom we share such information, how
              we protect it, and what rights and choices you have regarding your personal data. 
            </p>

            <p>The registered office of Kattalyx Labs Private Limited is located at C/o Manish Jain, Nai Mandi, Baraut,
              Baghpat, Uttar Pradesh 250611, India.
              Our Permanent Account Number (PAN) is AAMCK4220H, and our Tax Deduction and Collection Account
              Number (TAN) is MRTK09475E.
              Our primary contact email address is kattalyxlabs@gmail.com.</p>

            <p>
              By accessing or using any of our services, platforms, websites, applications, or engaging with Kattalyx Labs in
              any capacity, you acknowledge that you have read, understood, and agree to the terms and conditions of this
              Privacy Policy. If you do not agree with our privacy practices, please discontinue your use of our services
              immediately.
            </p>
          </div>
        </section>


        {/* SECTION 1: TYPES OF INFORMATION WE COLLECT */}
        <section id="section1" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 1: TYPES OF INFORMATION WE COLLECT
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700">
            <p className="text-justify italic text-gray-500">
              Kattalyx Labs collects various categories of personal information from our users and clients through multiple
              channels and touchpoints. We take great care to collect only information that is necessary for the provision of
              our services and to enhance your experience.
            </p>

            {/* 1.1 INFORMATION PROVIDED DIRECTLY BY YOU */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">1.1</span> INFORMATION PROVIDED DIRECTLY BY YOU
              </h3>
              <p className="mb-6">
                When you interact with Kattalyx Labs through our website, mobile applications, email communications,
                telephone conversations, or in-person meetings, you may voluntarily provide the following personal
                information:
              </p>

              <div className="space-y-6 border-l border-gray-100 pl-6">
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Personal Identification Information:</span>
                  <p>Your full legal name, date of birth, age, gender, and national identification details (such as Aadhar number or PAN, if required for service purposes).</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Contact Information:</span>
                  <p>Your primary email address, secondary email addresses, mobile phone number, landline telephone number, and mailing address (including street address, city, state, postal code, and country).</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Educational Information:</span>
                  <p>Details about your educational background, including school name, board affiliation (CBSE, ICSE, State Board, etc.), class or grade level, academic performance metrics, areas of interest, and learning objectives. For institutional clients, we may collect information about student enrollment numbers, grade structures, curriculum details, and educational infrastructure.</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">School and Institutional Details:</span>
                  <p>If you represent a school or educational institution, we collect the institution's legal name, registration number, number of students enrolled, type of institution (government, private, aided), geographic location, contact person details, administrative hierarchy, and facility information.</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Payment and Financial Information:</span>
                  <p>Details necessary for processing payments, including banking information, payment card details (which are processed securely through Razorpay and are not stored directly by Kattalyx Labs), invoice preferences, billing address, and any other financial data required for transaction processing.</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Program and Service Registration:</span>
                  <p>When you enroll in our programs, workshops, internships, or other services, we collect information such as the program name, enrollment date, program duration, participation details, performance metrics, attendance records, completion status, and any certifications earned.</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Career and Professional Information:</span>
                  <p>Your current job title, years of professional experience, professional goals, resume or curriculum vitae, professional achievements, industry experience, and career interests, particularly when applying for internship placements or consulting services.</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Inquiry and Communication Data:</span>
                  <p>Any messages, questions, feedback, suggestions, complaints, or other communications you send to us through contact forms, email, telephone, chat functions, or social media channels. This includes the content of your inquiry, attachments, and any follow-up correspondence.</p>
                </div>
                <div>
                  <span className="font-bold text-black block mb-1 uppercase text-[12px]">Demographic and Preference Information:</span>
                  <p>Your preferred language, communication preferences, content interests, learning style preferences, career interests, and any other demographic information you choose to provide.</p>
                </div>
              </div>
            </div>

            {/* 1.2 INFORMATION AUTOMATICALLY COLLECTED */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">1.2</span> INFORMATION AUTOMATICALLY COLLECTED THROUGH TECHNOLOGY
              </h3>
              <p className="mb-6 italic text-gray-500">As you navigate our website and digital platforms, certain information is automatically collected through various technological means:</p>
              <ul className="space-y-4">
                <li><strong className="text-black uppercase text-[11px] tracking-wider block">Web Server and Log Information:</strong> Your IP address, browser software type, operating system, visit date/time, accessed features, and time spent on pages.</li>
                <li><strong className="text-black uppercase text-[11px] tracking-wider block">Cookie and Tracking Technology Data:</strong> We use cookies and web beacons to recognize you and gather analytics. This includes session-based and persistent cookies.</li>
                <li><strong className="text-black uppercase text-[11px] tracking-wider block">Device Information:</strong> Device model, manufacturer, OS version, unique device identifiers (IDFA/Android Advertising ID), and hardware specifications.</li>
                <li><strong className="text-black uppercase text-[11px] tracking-wider block">Location Information:</strong> Approximate geographic location based on IP. Precision GPS data is collected only with explicit permission.</li>
                <li><strong className="text-black uppercase text-[11px] tracking-wider block">Usage Analytics:</strong> Records of interactions, features used, and navigation patterns (aggregated and anonymized).</li>
                <li><strong className="text-black uppercase text-[11px] tracking-wider block">Performance Metrics:</strong> Data regarding loading speeds, error rates, and technical issues.</li>
              </ul>
            </div>

            {/* 1.3 INFORMATION FROM THIRD PARTIES */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">1.3</span> INFORMATION RECEIVED FROM THIRD PARTIES AND EXTERNAL SOURCES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-gray-100 shadow-sm">
                  <p className="font-bold text-black mb-2 text-xs uppercase">Educational Partners</p>
                  <p className="text-xs text-gray-500 italic">Schools and colleges may provide student information, institutional details, and academic records.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm">
                  <p className="font-bold text-black mb-2 text-xs uppercase">Payment Processors</p>
                  <p className="text-xs text-gray-500 italic">Razorpay shares transaction verification data and fraud detection signals.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm">
                  <p className="font-bold text-black mb-2 text-xs uppercase">Social Media Platforms</p>
                  <p className="text-xs text-gray-500 italic">Google, Facebook, or LinkedIn may provide profile data via SSO/Login permissions.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm">
                  <p className="font-bold text-black mb-2 text-xs uppercase">Analytics & Referrers</p>
                  <p className="text-xs text-gray-500 italic">Google Analytics insights and contact details from person-to-person referrals.</p>
                </div>
                <div className="p-5 bg-white border border-gray-100 shadow-sm md:col-span-2">
                  <p className="font-bold text-black mb-2 text-xs uppercase">Regulatory Bodies</p>
                  <p className="text-xs text-gray-500 italic">Legal or government-mandated data sharing in compliance with court orders.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2: DETAILED PURPOSES FOR COLLECTING AND USING YOUR INFORMATION */}
        <section id="section2" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 2: DETAILED PURPOSES FOR COLLECTING AND USING YOUR INFORMATION
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700">
            <p className="text-justify italic text-gray-500">
              We use the personal information we collect for a comprehensive range of business purposes, all of which are
              clearly outlined below. We take great care to use your information only for legitimate, necessary, and disclosed
              purposes.
            </p>

            {/* 2.1 PRIMARY SERVICE DELIVERY PURPOSES */}
            <div className="bg-white border border-gray-100 p-8 shadow-sm">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">2.1</span> PRIMARY SERVICE DELIVERY PURPOSES
              </h3>
              <div className="space-y-6">
                <p><strong>Service Provision and Performance:</strong> The fundamental purpose of collecting personal information is to provide you with the services you have requested. This includes delivering educational programs, maintaining the EliteVerse ERP system, facilitating internship placements, providing mentoring services, and delivering any other service you have enrolled in or purchased.</p>
                <p><strong>Account Creation and Management:</strong> We collect information necessary to create and maintain your account with us, verify your identity, manage your login credentials, track your service usage, and provide you with account-related support.</p>
                <p><strong>Personalization and Customization:</strong> We use your information to personalize your experience, customize content recommendations based on your interests and learning style, and tailor our communications to your specific goals.</p>
                <p><strong>Student Placement and Career Services:</strong> For students using our internship services, we use your information to match you with opportunities, facilitate job placements, and manage interview scheduling. This may include sharing your resume with prospective employers with your explicit consent.</p>
                <p><strong>Program Administration and Delivery:</strong> We use your information to track attendance, assess academic performance, provide feedback, issue certificates, and manage program logistics.</p>
              </div>
            </div>

            {/* 2.2 COMMUNICATION AND CUSTOMER SERVICE PURPOSES */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">2.2</span> COMMUNICATION AND CUSTOMER SERVICE PURPOSES
              </h3>
              <ul className="space-y-4 pl-6 border-l border-gray-200">
                <li><strong>Customer Support:</strong> Responding to inquiries, troubleshooting technical issues, and providing assistance to ensure your issue is resolved to your satisfaction.</li>
                <li><strong>Administrative Communications:</strong> Sending essential account emails like password resets, service updates, policy changes, and billing notifications. These are sent regardless of preferences as they are necessary for service operation.</li>
                <li><strong>Marketing and Promotional:</strong> With your consent, we may send newsletters, new service announcements, and special offers. You have the right to opt out at any time.</li>
                <li><strong>Event Invitations:</strong> Sending invitations to webinars, workshops, and competitions relevant to your interests or current enrollment.</li>
                <li><strong>Feedback and Surveys:</strong> Periodically requesting your feedback to help us improve our platform functionality and user experience.</li>
              </ul>
            </div>

            {/* 2.3 BUSINESS OPERATIONS AND ANALYTICS PURPOSES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-100 bg-[#FBFBFB]">
                <h4 className="font-bold text-black mb-3 uppercase text-[11px] tracking-widest">Analytics & Optimization</h4>
                <p className="text-xs text-gray-600">Analyzing user interaction data, traffic sources, and performance metrics to identify areas for improvement and ensure service reliability.</p>
              </div>
              <div className="p-6 border border-gray-100 bg-[#FBFBFB]">
                <h4 className="font-bold text-black mb-3 uppercase text-[11px] tracking-widest">Security & Fraud Prevention</h4>
                <p className="text-xs text-gray-600">Detecting and responding to security threats, unauthorized access, and fraudulent transactions to protect both parties and maintain data integrity.</p>
              </div>
              <div className="p-6 border border-gray-100 bg-[#FBFBFB]">
                <h4 className="font-bold text-black mb-3 uppercase text-[11px] tracking-widest">Compliance & Legal</h4>
                <p className="text-xs text-gray-600">Complying with applicable laws, tax regulations, and data protection requirements, as well as establishing or defending legal claims.</p>
              </div>
              <div className="p-6 border border-gray-100 bg-[#FBFBFB]">
                <h4 className="font-bold text-black mb-3 uppercase text-[11px] tracking-widest">Strategic Planning</h4>
                <p className="text-xs text-gray-600">Analyzing aggregated and anonymized information to identify market trends and inform our strategic business direction.</p>
              </div>
            </div>

            {/* 2.4 INTERNAL BUSINESS OPERATIONS */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">2.4</span> INTERNAL BUSINESS OPERATIONS
              </h3>
              <div className="space-y-4 text-[13px]">
                <p><strong>Quality Assurance and Training:</strong> Using redacted communications for staff training and service improvement initiatives.</p>
                <p><strong>Product Development:</strong> Applying machine learning to anonymized behavioral patterns to develop new features and products that meet user needs.</p>
                <p><strong>Corporate Records:</strong> Maintaining records for accounting, financial audits, and document retention policies in accordance with legal requirements.</p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: DETAILED INFORMATION SHARING PRACTICES */}
        <section id="section3" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 3: DETAILED INFORMATION SHARING PRACTICES
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700 text-justify">
            <p className="italic text-gray-500 bg-gray-50 p-4 border-l border-gray-200">
              We take the privacy of your information very seriously and do not sell, rent, or disclose your personal
              information to unrelated third parties for their independent use. However, there are specific circumstances and
              categories of service providers with whom we must share certain information to provide you with our services
              and comply with legal obligations.
            </p>

            {/* 3.1 ESSENTIAL SERVICE PROVIDERS AND PARTNERS */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">3.1</span> ESSENTIAL SERVICE PROVIDERS AND PARTNERS
              </h3>
              <div className="space-y-6 pl-6 border-l border-gray-100">
                <p><strong>Payment Processing Provider - Razorpay:</strong> We share payment information, including transaction amounts, billing address, and email address, with Razorpay, a licensed PSP in India. We strictly do not store your credit card details directly; they remain encrypted and managed solely by Razorpay.</p>
                <p><strong>Banking and Financial Institutions:</strong> Sharing information with banks to process transactions, verify details, and comply with anti-money laundering requirements.</p>
                <p><strong>Email and Communication Providers:</strong> Using third-party platforms to send newsletters and transactional emails. We share minimal identifying information like email addresses.</p>
                <p><strong>Cloud Infrastructure and Hosting:</strong> Storing data on secure platforms like AWS or Google Cloud. All data is encrypted both in transit and at rest.</p>
                <p><strong>Website Analytics:</strong> Using Google Analytics to analyze traffic and performance. These third parties operate under strict data processing agreements.</p>
                <p><strong>CRM Systems:</strong> Using platforms to manage customer interactions and improve service delivery, protected by comprehensive security measures.</p>
              </div>
            </div>

            {/* 3.2 PROGRAM AND SERVICE-SPECIFIC SHARING */}
            <div className="bg-[#F9F9F9] p-8 border border-gray-100">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">3.2</span> PROGRAM AND SERVICE-SPECIFIC SHARING
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <p className="font-bold text-[11px] uppercase mb-2">Educational Institutions</p>
                  <p className="text-[13px]">Sharing program participation and performance metrics with your referring school or institution for reporting and coordination.</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] uppercase mb-2">Employers & Placement</p>
                  <p className="text-[13px]">With your explicit consent, sharing resumes and qualifications with potential employers for internship and career placements.</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] uppercase mb-2">Industry Speaker Network</p>
                  <p className="text-[13px]">Sharing contact details with external mentors or guest lecturers to facilitate program delivery and industry interaction.</p>
                </div>
                <div>
                  <p className="font-bold text-[11px] uppercase mb-2">Co-Branded Partners</p>
                  <p className="text-[13px]">Sharing necessary info with organizations we partner with for specific service delivery, governed by clear privacy agreements.</p>
                </div>
              </div>
            </div>

            {/* 3.3 LEGAL AND COMPLIANCE-RELATED SHARING */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">3.3</span> LEGAL AND COMPLIANCE-RELATED SHARING
              </h3>
              <ul className="space-y-4 pl-6 list-disc marker:text-black">
                <li><strong>Law Enforcement:</strong> Disclosing info to judicial authorities if legally required by subpoena, court order, or warrant to prevent fraud or protect legal rights.</li>
                <li><strong>Regulatory Bodies:</strong> Sharing with the Ministry of Corporate Affairs, income tax authorities, and consumer protection agencies as required by law.</li>
                <li><strong>Litigation:</strong> Sharing relevant information with legal counsel and courts during legal disputes or claims.</li>
              </ul>
            </div>

            {/* 3.4 BUSINESS TRANSACTION-RELATED SHARING */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">3.4</span> BUSINESS TRANSACTION-RELATED SHARING
              </h3>
              <div className="space-y-4 text-[13px]">
                <p><strong>Merger or Acquisition:</strong> In case of a merger, reorganization, or sale of assets, your personal information may be transferred. We will provide notice of any such change in ownership.</p>
                <p><strong>Contractors & Service Providers:</strong> Engaging consultants and freelancers for business functions like marketing or data analysis. They are strictly bound by confidentiality obligations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DATA RETENTION AND STORAGE PRACTICES */}
        <section id="section4" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 4: DATA RETENTION AND STORAGE PRACTICES
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-gray-700 text-justify">
            <p className="italic text-gray-500">
              We understand the importance of retaining your personal information only for as long as is necessary. Our
              data retention practices are designed to balance your privacy with our operational and legal needs.
            </p>

            {/* 4.1 RETENTION DURATION */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">4.1</span> RETENTION DURATION FOR DIFFERENT INFORMATION CATEGORIES
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-gray-300 group-hover:text-black transition-colors uppercase">Account Duration</div>
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Active Account Information</p>
                  <p className="text-[13px]">Retained for the duration of your account existence and active service usage to provide continuous service and maintain preferences.</p>
                </div>

                <div className="p-5 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-gray-300 group-hover:text-black transition-colors uppercase">Up to 2 Years</div>
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Post-Service Retention</p>
                  <p className="text-[13px]">After account closure, we retain certain info for up to two (2) years to handle disputes, inquiries, and maintain business records.</p>
                </div>

                <div className="p-5 border border-gray-100 relative overflow-hidden group bg-gray-50/50">
                  <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-gray-400 uppercase">Min. 5 Years</div>
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Financial & Transaction Records</p>
                  <p className="text-[13px]">Records related to payments and GST are retained for minimum 5 years as required by Indian taxation laws (Income Tax Act).</p>
                </div>

                <div className="p-5 border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 font-mono text-[10px] text-gray-300 group-hover:text-black transition-colors uppercase">Up to 3 Years</div>
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Communication Records</p>
                  <p className="text-[13px]">Email and chat logs are retained for up to three (3) years to ensure service continuity for returning customers.</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-[13px] pl-2 border-l-2 border-gray-100">
                <p><strong>Legal and Compliance Records:</strong> Retained for the duration of any legal proceeding or as required by law, which may extend beyond standard periods.</p>
                <p><strong>Analytics and Aggregated Data:</strong> Anonymized data used for service improvement is retained indefinitely as it cannot identify individuals.</p>
                <p><strong>Marketing and Communication:</strong> Preferences and opt-in/out status are retained for the duration of our relationship or as required for compliance.</p>
              </div>
            </div>

            {/* 4.2 DATA DELETION AND ERASURE PROCEDURES */}
            <div className="bg-black text-white p-8 rounded-sm shadow-xl">
              <h3 className="font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-500">4.2</span> DATA DELETION AND ERASURE PROCEDURES
              </h3>
              <p className="mb-6 text-gray-400">You have the right to request deletion via <span className="text-white underline underline-offset-4">kattalyxlabs@gmail.com</span>. Our process includes:</p>

              <ol className="space-y-4 mb-8 list-decimal pl-5 marker:font-mono marker:text-gray-500">
                <li>Verify your identity to ensure the request is legitimate</li>
                <li>Assess the request against our legal obligations and retention requirements</li>
                <li>Delete or anonymize your information where legally permissible</li>
                <li>Notify you of any information we are unable to delete due to legal requirements</li>
                <li>Complete the deletion process and confirm with you within thirty (30) days</li>
              </ol>

              <div className="pt-6 border-t border-gray-800 text-[12px] text-gray-500 italic">
                <p className="mb-2 uppercase font-bold tracking-widest text-gray-400 text-[10px]">Exceptions to Deletion:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>- Legal tax/accounting obligations</li>
                  <li>- Defense against legal claims</li>
                  <li>- Ongoing investigations</li>
                  <li>- Protecting platform security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        {/* SECTION 5: COMPREHENSIVE SECURITY MEASURES */}
        <section id="section5" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 5: COMPREHENSIVE SECURITY MEASURES
          </h2>

          <div className="space-y-12 text-sm leading-relaxed text-justify">
            <p className="italic text-gray-500">
              Protecting the security of your personal information is a paramount concern for Kattalyx Labs. We implement a
              multi-layered security framework that employs industry-standard technologies and practices to prevent
              unauthorized access, use, alteration, or disclosure of your data.
            </p>

            {/* 5.1 TECHNICAL SECURITY MEASURES */}
            <div>
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">5.1</span> TECHNICAL SECURITY MEASURES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-gray-100 bg-white">
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Encryption Technology</p>
                  <p className="text-[13px]">All sensitive information is encrypted using 256-bit Secure Socket Layer (SSL) technology. Payment info is never stored in unencrypted form.</p>
                </div>
                <div className="p-5 border border-gray-100 bg-white">
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Secure Infrastructure</p>
                  <p className="text-[13px]">Servers are housed in access-controlled data centers with biometric controls, surveillance, and environmental protections.</p>
                </div>
                <div className="p-5 border border-gray-100 bg-white">
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Network Protection</p>
                  <p className="text-[13px]">Enterprise-grade firewalls and intrusion detection systems (IDS) monitor all traffic to block malware and unauthorized access.</p>
                </div>
                <div className="p-5 border border-gray-100 bg-white">
                  <p className="font-bold text-black mb-2 uppercase text-[11px]">Security Testing</p>
                  <p className="text-[13px]">Regular third-party audits, penetration testing, and OWASP-compliant secure coding reviews are conducted.</p>
                </div>
              </div>
            </div>

            {/* 5.2 ADMINISTRATIVE AND OPERATIONAL */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-bold text-black mb-6 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">5.2</span> ADMINISTRATIVE AND OPERATIONAL SECURITY MEASURES
              </h3>
              <ul className="space-y-4">
                <li><strong>Access Control:</strong> Strict authorization ensures employees only access data necessary for their job functions. All access is logged.</li>
                <li><strong>Employee Training:</strong> Mandatory privacy training and strict confidentiality agreements that survive termination of employment.</li>
                <li><strong>Incident Response:</strong> Dedicated security team and protocols for containment, investigation, and notification in case of a breach.</li>
                <li><strong>Vendor Assessment:</strong> Rigorous security audits and Data Processing Agreements (DPA) for all third-party service providers.</li>
              </ul>
            </div>

            {/* 5.3 LIMITATIONS AND DISCLAIMER */}
            <div className="p-6 border-2 border-dashed border-gray-200 rounded-lg bg-white">
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight">5.3 LIMITATIONS AND DISCLAIMER</h3>
              <p className="text-xs text-gray-600 mb-4 uppercase font-bold tracking-widest">Important Security Note:</p>
              <p className="mb-4">Despite our measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security against advanced cyber attacks or zero-day vulnerabilities.</p>
              <p className="p-4 bg-black text-white text-xs">
                USER RESPONSIBILITY: You are responsible for maintaining the confidentiality of your account credentials. Do not share your login information.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: YOUR PRIVACY RIGHTS AND CHOICES */}
        <section id="section6" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-12 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 6: YOUR PRIVACY RIGHTS AND CHOICES
          </h2>

          <div className="space-y-10">
            {/* Rights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">

              {/* 6.1 Access & Portability */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase tracking-tighter">6.1 Access & Data Portability</h3>
                <p>You have the right to request a copy of your data in a structured format (CSV/JSON). We will respond within thirty (30) days via <span className="underline font-mono">kattalyxlabs@gmail.com</span>.</p>
              </div>

              {/* 6.2 Correction */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase tracking-tighter">6.2 Correction & Rectification</h3>
                <p>You may update inaccurate info directly through account settings or by sending a detailed request with supporting documentation.</p>
              </div>

              {/* 6.3 Erasure */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase tracking-tighter">6.3 Erasure (Right to be Forgotten)</h3>
                <p>You can request deletion when data is no longer necessary. Exceptions apply for active accounts, legal holds, or tax/GST compliance.</p>
              </div>

              {/* 6.4 Restriction */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase tracking-tighter">6.4 Right to Restrict Processing</h3>
                <p>Request restriction if you dispute data accuracy or believe processing is unlawful but prefer restriction over deletion.</p>
              </div>

              {/* 6.5 Withdrawal of Consent */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase tracking-tighter">6.5 Withdrawal of Consent</h3>
                <p>Opt-out of marketing via "Unsubscribe" links. Note: Administrative emails necessary for account operation cannot be opted out of.</p>
              </div>

              {/* 6.6 Objection */}
              <div className="space-y-4">
                <h3 className="font-bold text-black uppercase tracking-tighter">6.6 Right to Object</h3>
                <p>Object to profiling, automated decision-making, or processing based on legitimate interests. We will respond within 30 days.</p>
              </div>

            </div>

            {/* 6.7 Complaint */}
            <div className="mt-12 p-8 bg-gray-900 text-white">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-gray-400">6.7 Right to Lodge a Complaint</h3>
              <p className="text-sm leading-relaxed">
                If you believe your rights are violated, you may file a complaint with the relevant data protection authority in your jurisdiction
                (Consumer Protection framework in India) or contact us directly at <span className="text-blue-400">kattalyxlabs@gmail.com</span>.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 7: COOKIES, TRACKING TECHNOLOGIES, AND ONLINE BEHAVIORAL TRACKING */}
        <section id="section7" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700 text-justify">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 7: COOKIES, TRACKING TECHNOLOGIES, AND ONLINE BEHAVIORAL TRACKING
          </h2>

          <div className="space-y-10 text-sm leading-relaxed">
            <p className="italic text-gray-500">
              To enhance your experience and gather insights about how users interact with our services, we use cookies,
              web beacons, pixels, and other similar tracking technologies. This section provides detailed information about
              how these technologies work and your options for controlling them.
            </p>

            {/* 7.1 WHAT ARE COOKIES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <h3 className="font-bold text-black mb-4 flex items-center gap-2 uppercase tracking-tight">
                  <span className="text-xs font-mono text-gray-400">7.1</span> WHAT ARE COOKIES
                </h3>
                <p>Cookies are small text files stored on your device that contain a unique identifier allowing our servers to recognize your device on subsequent visits, remember preferences, and maintain login sessions.</p>
              </div>

              <div className="p-5 border border-gray-100 bg-[#F9F9F9]">
                <p className="font-bold text-[10px] uppercase mb-2 tracking-widest text-black">Session Cookies</p>
                <p className="text-[13px]">Automatically deleted when you close your browser. Used to maintain your current session and navigation context.</p>
              </div>
              <div className="p-5 border border-gray-100 bg-[#F9F9F9]">
                <p className="font-bold text-[10px] uppercase mb-2 tracking-widest text-black">Persistent Cookies</p>
                <p className="text-[13px]">Remain on your device until they expire or are deleted. Used to remember login info and preferences for future visits.</p>
              </div>
            </div>

            {/* 7.2 OTHER TECHNOLOGIES */}
            <div className="space-y-6">
              <h3 className="font-bold text-black mb-4 flex items-center gap-2 uppercase tracking-tight">
                <span className="text-xs font-mono text-gray-400">7.2</span> TYPES OF TRACKING TECHNOLOGIES
              </h3>
              <div className="space-y-4 pl-6 border-l border-gray-200">
                <p><strong>Web Beacons and Pixels:</strong> Transparent image files that create a log of your visit when you view a page or email.</p>
                <p><strong>Log File Analysis:</strong> Automatically generated files recording IP address, pages visited, and time spent.</p>
                <p><strong>Device Fingerprinting:</strong> Analyzing device attributes (browser type, OS, resolution) to create a unique identifier.</p>
                <p><strong>Cross-Device Tracking:</strong> Linking information across different devices you use to create a complete interaction profile.</p>
              </div>
            </div>

            {/* 7.3 PURPOSE */}
            <div className="bg-gray-50 p-8">
              <h3 className="font-bold text-black mb-6 uppercase tracking-tight italic">7.3 PURPOSE OF COOKIES AND TRACKING</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[13px]">
                <li><span className="font-bold block uppercase text-[10px] mb-1">Essential</span> Strictly necessary for login sessions, shopping carts, and security.</li>
                <li><span className="font-bold block uppercase text-[10px] mb-1">Preferences</span> Remembering language, display settings, and accessibility choices.</li>
                <li><span className="font-bold block uppercase text-[10px] mb-1">Analytics</span> Understanding navigation patterns and identifying technical problems.</li>
                <li><span className="font-bold block uppercase text-[10px] mb-1">Marketing</span> Delivering targeted ads and measuring marketing campaign effectiveness.</li>
              </ul>
            </div>

            {/* 7.4 CONTROL */}
            <div className="p-6 border border-black/5 bg-white">
              <h3 className="font-bold text-black mb-4 uppercase tracking-tight">7.4 YOUR CONTROL OVER COOKIES</h3>
              <div className="space-y-4">
                <p><strong>Browser Settings:</strong> You can refuse cookies or receive warnings via your browser's help documentation.</p>
                <p><strong>Implications:</strong> Disabling cookies may prevent you from logging in, checking out items, or saving preferences.</p>
                <p><strong>Do Not Track:</strong> We respect your preferences, but currently do not respond to "Do Not Track" signals due to lack of standardization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: THIRD-PARTY LINKS AND EXTERNAL WEBSITES */}
        <section id="section8" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 8: THIRD-PARTY LINKS AND EXTERNAL WEBSITES
          </h2>

          <div className="space-y-8 text-sm leading-relaxed">
            <div className="p-6 bg-red-50/30 border border-red-100">
              <h3 className="font-bold text-black mb-3 uppercase tracking-tighter text-xs">8.1 DISCLAIMER OF LIABILITY</h3>
              <p>Kattalyx Labs is not responsible for the privacy practices, security measures, content accuracy, or operations of any third-party websites or services. We do not endorse these external websites and are not liable for any information or transactions occurring on these platforms.</p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-3 uppercase tracking-tighter text-xs">8.2 THIRD-PARTY PRIVACY POLICIES</h3>
              <p>Before visiting any linked website, we strongly encourage you to review their privacy policy. You should assume that any information you provide on third-party websites is governed by their privacy policies and not this Policy.</p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-4 uppercase tracking-tighter text-xs">8.3 EXAMPLES OF LINKED WEBSITES</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono uppercase text-gray-500">
                <li className="p-3 border border-gray-100 italic">Educational Institutions</li>
                <li className="p-3 border border-gray-100 italic">Razorpay (Payment)</li>
                <li className="p-3 border border-gray-100 italic">Social Media Platforms</li>
                <li className="p-3 border border-gray-100 italic">Partner Organizations</li>
                <li className="p-3 border border-gray-100 italic">Event Registration</li>
                <li className="p-3 border border-gray-100 italic">Content Repositories</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9: CHILDREN'S PRIVACY AND PARENTAL PROTECTIONS */}
        <section id="section9" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700 text-justify">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 9: CHILDREN'S PRIVACY AND PARENTAL PROTECTIONS
          </h2>

          <div className="space-y-8 text-sm leading-relaxed">
            <p>
              Kattalyx Labs is committed to the safety and privacy of children and complies with all applicable laws
              protecting children's online privacy, including the Children's Online Privacy Protection Act (COPPA) equivalent
              regulations in India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-black mb-2 uppercase text-[11px] tracking-widest">9.1 Age Restrictions</h3>
                <p className="text-[13px]">Our services are not directed to children under thirteen (13). We do not knowingly collect personal information from children under 13.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100">
                <h3 className="font-bold text-black mb-2 uppercase text-[11px] tracking-widest">9.2 Parental Involvement</h3>
                <p className="text-[13px]">For students aged 13-18, we strongly encourage parental involvement. We may request parental contact info to send progress updates.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-black uppercase text-xs">9.3 Verifiable Parental Consent</h3>
              <p>For any services offered to children under 18, we may implement verification procedures via email, postal mail, or telephone to obtain authorization before data collection.</p>
            </div>

            <div className="p-6 border-l-4 border-red-500 bg-red-50/30">
              <h3 className="font-bold text-red-700 mb-3 uppercase text-xs italic">9.4 Child Safety Protocol</h3>
              <p className="text-red-900 font-medium">If we inadvertently collect data from a child under 13, we will immediately cease collection, delete the information from our systems, and notify the parent if contact info is available.</p>
            </div>
          </div>
        </section>

        {/* SECTION 10: INTERNATIONAL DATA TRANSFERS */}
        <section id="section10" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 10: INTERNATIONAL DATA TRANSFERS
          </h2>
          <div className="space-y-6 text-sm leading-relaxed">
            <p>Your personal information may be transferred to and processed in countries other than India (USA, Singapore, Australia, Europe) where our cloud partners and service providers operate.</p>

            <div className="flex flex-wrap gap-3">
              {["Standard Contractual Clauses (SCCs)", "Data Processing Agreements", "Adequacy Decisions", "Explicit User Consent"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-mono uppercase text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs italic text-gray-500">You have the right to request info about specific safeguards implemented for your international data transfer.</p>
          </div>
        </section>

        {/* SECTION 11: UPDATES AND AMENDMENTS */}
        <section id="section11" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-16 font-sans text-gray-700">
          <h2 className="font-serif text-2xl mb-8 border-l-4 border-black pl-4 uppercase tracking-wider text-black">
            SECTION 11: UPDATES AND AMENDMENTS
          </h2>
          <div className="space-y-6 text-sm">
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-bold text-black mb-2 uppercase text-xs tracking-widest">Material Changes</h3>
              <p>We will post the updated date, send an email notification, and may require affirmative acceptance before you continue using our services.</p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-2 uppercase text-xs tracking-widest">Minor Changes</h3>
              <p>For non-material updates, we will update the "Last Updated" date at the top of this Policy without individual notifications.</p>
            </div>
          </div>
        </section>

        {/* SECTION 12: CONTACT & GRIEVANCE REDRESSAL */}
        <section id="section12" className="mb-24 scroll-mt-20 border-2 border-black p-10 font-sans">
          <h2 className="font-serif text-3xl mb-8 uppercase tracking-tighter text-black">
            SECTION 12: CONTACT INFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
            <div className="space-y-4">
              <p className="font-bold text-black uppercase tracking-widest text-[10px]">Entity Details</p>
              <div className="space-y-2 text-gray-600 font-mono text-[13px]">
                <p><strong>Kattalyx Labs Private Limited</strong></p>
                <p>CIN: U85500UP2025PTC239031</p>
                <p>PAN: AAMCK4220H | TAN: MRTK09475E</p>
                <p className="mt-4 text-black not-italic">C/o Manish Jain, Nai Mandi, Baraut, Baghpat, Uttar Pradesh 250611, India</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-black uppercase tracking-widest text-[10px]">Privacy Support</p>
              <p className="text-2xl font-serif text-black underline decoration-1 underline-offset-8">kattalyxlabs@gmail.com</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs uppercase font-bold text-black mb-2 tracking-widest">Response Commitment</p>
                <p className="text-[12px] italic text-gray-500">We respond to all inquiries and complaints within thirty (30) days. Complex requests may take up to sixty (60) days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACKNOWLEDGMENT & FOOTER */}
        <div className="max-w-4xl mx-auto pt-20 ">
          <h3 className="font-serif text-xl mb-10 uppercase tracking-[0.3em] text-black italic">Acknowledgment of Policy</h3>
          <div className="grid grid-cols-1 gap-4 text-[15px] font-mono uppercase tracking-widest text-gray-400 mb-16">
            <p>
              By accessing or using Kattalyx Labs services, you acknowledge that: <br/>
              1. You have read and understood this comprehensive Privacy Policy<br/>
              2. You agree to the collection, use, and disclosure of your personal information as described in this Policy<br />
              3. You understand your rights and choices regarding your personal information<br />
           </p>
          </div>

          <p className="text-[11px] font-mono text-gray-300 uppercase tracking-[0.5em]">
            End of Privacy Policy — Kattalyx Labs 2025
          </p>
        </div>


      </main>
    </div>
  );
};

export default PrivacyPolicy;