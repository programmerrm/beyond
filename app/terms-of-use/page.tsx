import Link from "next/link";

export default function TermsOfUse() {
    return (
        <>
            <section className="pt-30 sm:pt-40 lg:pt-50 pb-8 sm:pb-16 lg:pb-32.5">
                <div className="container">
                    <div className="w-full max-w-312.75 mx-auto space-y-4 sm:space-y-7.5">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-14 mb-2.5 sm:mb-5 text-white">Terms of Use</h1>
                            <p>Last updated: 29 March 2026</p>
                            <p>Welcome to Beyond Code!</p>
                            <p>These Terms of Use outline the rules and regulations for using Beyond Code’s websites and services, accessible at: www.beyondcode.ae</p>
                            <p>Beyond Code is an MVP design and development agency operating in Abu Dhabi (UAE), London (UK), and Dhaka (Bangladesh).</p>
                            <p>By accessing or using our Website or Services, You agree to be bound by these Terms of Use. If You do not agree with any part of these terms, please do not use our Website or Services.</p>
                        </div>
                        <div>
                            <h5>Interpretation and Definitions</h5>
                            <p className="m-3 sm:mt-4">The following terminology applies to these Terms of Use, Privacy Policy, Disclaimer Notice, and all Agreements:</p>
                            <ul className="list-disc pl-6 mt-1">
                                <li>“Client,” “You,” and “Your” refers to the individual or legal entity accessing this Website and complying with these Terms.</li>
                                <li>“Company,” “Beyond Code,” “We,” “Us,” and “Our” refers to Beyond Code.</li>
                                <li>“Party” or “Parties” refers to both the Client and Beyond Code.</li>
                            </ul>
                            <p className="m-3 sm:mt-4">Any use of the above terminology in the singular, plural, capitalization, or gender is taken as interchangeable.</p>
                        </div>
                        <div>
                            <h5>Use of the Website</h5>
                            <p className="my-3 sm:my-4">By using this Website, You warrant that You are at least 18 years of age or accessing the Website under the supervision of a legal guardian, and that You will use the Website in compliance with all applicable laws and regulations. You agree not to use the Website for any unlawful or prohibited purpose.</p>
                        </div>
                        <div>
                            <h5>Cookies</h5>
                            <p className="my-3 sm:my-4">We use cookies and similar technologies to enhance user experience and website functionality. By accessing Beyond Code, You agree to the use of cookies in accordance with our Privacy Policy. Some third-party partners or service providers may also use cookies.</p>
                        </div>
                        <div>
                            <h5>Intellectual Property Rights</h5>
                            <p className="my-3 sm:my-4">Unless otherwise stated, Beyond Code and/or its licensors own all intellectual property rights for all content, materials, designs, text, graphics, and software available on the Website.</p>
                            <p className="my-3 sm:my-4">All intellectual property rights are reserved. You may access the Website for Your personal or internal business use, subject to the restrictions set out in these Terms.</p>
                            <h6 className="text-sm sm:text-base sm:leading-5 text-white font-bold my-3 sm:my-4">You must not:</h6>
                            <ul className="list-disc pl-6 mt-1">
                                <li>Republish material from Beyond Code</li>
                                <li>Sell, rent, or sub-license material from Beyond Code</li>
                                <li>Reproduce, duplicate, or copy material from Beyond Code</li>
                                <li>Redistribute content from Beyond Code without prior written permission</li>
                            </ul>
                            <p className="mt-3 sm:mt-4">This Agreement shall begin on the date You first access the Website.</p>
                        </div>

                        <div>
                            <h5>Hyperlinking to Our Content</h5>
                            <p className="my-3 sm:my-4">Organizations may link to Beyond Code’s Website provided that the link:</p>
                            <ul className="list-disc pl-6 mt-1">
                                <li>Is not deceptive or misleading</li>
                                <li>Does not falsely imply sponsorship, endorsement, or approval</li>
                                <li>Fits within the context of the linking party’s site</li>
                            </ul>
                            <p className="my-3 sm:my-4">We may approve link requests from:</p>
                            <ul className="list-disc pl-6 mt-1">
                                <li>Commonly known consumer or business information sources</li>
                                <li>Online communities and directories</li>
                                <li>Charitable organizations and associations</li>
                                <li>Educational institutions and trade associations</li>
                                <li>Professional service firms (e.g., legal, accounting, consulting)</li>
                            </ul>
                            <p className="my-3 sm:my-4">Approved organizations may hyperlink to our Website by:</p>
                            <ul className="list-disc pl-6 mt-1">
                                <li>Using our corporate name, or</li>
                                <li>Using the URL being linked to, or</li>
                                <li>Using a description that reasonably fits the context of the linking site</li>
                            </ul>
                            <p className="mt-3 sm:mt-4">No use of Beyond Code’s logo or brand assets is permitted without prior written trademark or brand license approval.</p>
                        </div>
                        <div>
                            <h5>iFrames</h5>
                            <p className="mt-3 sm:mt-4">Without prior written permission, You may not create frames around our Webpages that alter the visual presentation or appearance of the Website.</p>
                        </div>
                        <div>
                            <h5>Content Liability</h5>
                            <p className="mt-3 sm:mt-4">We shall not be held responsible for any content that appears on Your Website. You agree to indemnify and defend Beyond Code against all claims arising from content on Your Website.</p>
                            <p>No link(s) should appear on any Website that may be interpreted as defamatory, obscene, illegal, or that infringes or violates any third-party rights.</p>
                        </div>
                        <div>
                            <h5>Reservation of Rights</h5>
                            <p className="mt-3 sm:mt-4">We reserve the right to request removal of any links to our Website. You agree to remove such links immediately upon request.</p>
                            <p>We also reserve the right to amend these Terms of Use and our linking policy at any time. Continued use of the Website constitutes acceptance of any changes.</p>
                        </div>
                        <div>
                            <h5>Removal of Links from Our Website</h5>
                            <p className="mt-3 sm:mt-4">If You find any link on our Website offensive or inappropriate, You may contact us at any time. While we will review such requests, we are not obligated to remove links or respond directly.</p>
                        </div>
                        
                        <div>
                            <h5>Accuracy of Information</h5>
                            <p className="my-3 sm:my-4">We do not guarantee that the information on this Website is accurate, complete, or up to date. We do not warrant that the Website will always be available or that its content will remain current.</p>
                        </div>
                        <div>
                            <h5>Disclaimer</h5>
                            <p className="my-3 sm:my-4">To the maximum extent permitted by applicable law, Beyond Code excludes all representations, warranties, and conditions relating to the Website and its use.</p>
                            <p className="my-3 sm:my-4">Nothing in this Disclaimer shall:</p>
                            <ul className="list-disc pl-6 mt-1">
                                <li>Limit or exclude liability for fraud or fraudulent misrepresentation</li>
                                <li>Limit liabilities in any way not permitted by applicable law</li>
                                <li>Exclude liabilities that cannot be excluded under applicable law</li>
                            </ul>
                            <p>The limitations of liability apply to all claims arising under contract, tort, or statutory duty.</p>
                            <p>As long as the Website and its information are provided free of charge, Beyond Code shall not be liable for any loss or damage of any nature.</p>
                        </div>
                        <div>
                            <h5>Governing Law</h5>
                            <p className="my-3 sm:my-4">These Terms of Use shall be governed by and construed in accordance with applicable laws relevant to Beyond Code’s operating jurisdictions, without regard to conflict of law principles.</p>
                        </div>
                        <div>
                            <h5>Changes to These Terms</h5>
                            <p className="my-3 sm:my-4">We may revise these Terms of Use at any time. Updates will be posted on this page with an updated “Last updated” date. Continued use of the Website after changes constitutes acceptance of the revised terms.</p>
                        </div>

                        <div>
                            <h5>Contact Us</h5>
                            <p className="mt-3 sm:mt-4">If You have any questions or concerns about these Terms of Use, please contact us:</p>
                            <p>Email: <Link href="mailto:info@beyondcode.ae">info@beyondcode.ae</Link></p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


