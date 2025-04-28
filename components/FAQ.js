'use client'

import { useState } from 'react'
// import Image from 'next/image'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // New data structure based on the markdown file
  const groupedFaqData = [
    {
      groupTitle: "General Questions",
      items: [
        {
          id: "g1",
          question: "What is Auca?",
          answer: "Auca is a game-changing B2B platform built for professional car buyers in the UK. It aggregates vehicle listings from a variety of large and specialist auction houses, letting you search, filter, evaluate, and bid from a single, intuitive interface. No more juggling multiple auction house logins—Auca delivers convenience, accuracy, and business intelligence to help you stay ahead in the motor trade."
        },
        {
          id: "g2",
          question: "Who is Auca for?",
          answer: "Auca is designed for professional buyers in the motor trade, including independent dealers, large and small dealerships, and trade resellers. Whether you're sourcing vehicles for retail or trade-on sales, Auca streamlines your process with powerful tools tailored to your needs."
        },
        {
          id: "g3",
          question: "Why should I use Auca instead of bidding directly with auction houses?",
          answer: "Auca brings the entire UK auction market to your fingertips. With custom filters, evaluation tools, and proxy bidding, you can find the right vehicles faster and make informed decisions. Our integration with MotorCheck, bidding analytics, and whole-market view—spanning large and specialist auction houses—give you an edge that individual auction platforms can't match. It's about saving time and boosting profitability."
        },
        {
          id: "g4",
          question: "What makes Auca different?",
          answer: "Auca isn't just a tool—it's an innovative partner for professional buyers. By aggregating listings from a variety of auction houses, we offer unmatched regional and vehicle-type coverage. Our seamless workflow (Inbox, Evaluate, and Bid Lanes), MotorCheck integration, and upcoming features like Business Intelligence Modules set us apart. Built by motor auction experts and backed by elite partners, Auca is on a high-tempo journey to redefine how you buy cars."
        },
        {
          id: "g5",
          question: "Where does Auca operate?",
          answer: "Auca is currently focused on the UK, connecting you to a variety of large and specialist auction houses for comprehensive market coverage. We're already planning to expand beyond the UK—watch this space!"
        }
      ]
    },
    {
      groupTitle: "Getting Started",
      items: [
        {
          id: "gs1",
          question: "How do I sign up for Auca?",
          answer: "Signing up is quick and self-serve! Visit our website, enter your company details, and choose a subscription: £149/month (ex VAT) for a single user, with additional users at £99/month (ex VAT). Pay via card, direct debit, or contact us for corporate terms. Once your payment is confirmed, you'll get instant access to start exploring thousands of vehicles."
        },
        {
          id: "gs2",
          question: "What do I need to bid on vehicles?",
          answer: "To bid, you must be a member of at least one auction house partnered with Auca. This membership allows you to move vehicles from the Inbox Lane to the Evaluate and Bid Lanes. If you're not a member of an auction house, you can apply to join directly through Auca. Auction houses handle their own vetting, ensuring you meet their eligibility criteria (e.g., trade licenses)."
        },
        {
          id: "gs3",
          question: "Can I try Auca before committing?",
          answer: "Auca operates on a flexible subscription model with no free trial, but you can cancel anytime and retain access until the end of your paid month. We're confident that Auca's value will shine through from day one. Keep an eye out for future promotions or demos!"
        },
        {
          id: "gs4",
          question: "What happens if I cancel my subscription?",
          answer: "No strings attached! If you cancel, you'll keep full access to Auca until the end of the month you've paid for (e.g., cancel in mid-March, use Auca until March 31). Manage cancellations easily in the Billing section of your Auca Accounts page."
        }
      ]
    },
    {
      groupTitle: "Using Auca",
      items: [
        {
          id: "ua1",
          question: "How does Auca's search and filtering work?",
          answer: "Auca's search is your shortcut to the perfect vehicle. Create custom filters based on criteria like vehicle type (e.g., hatchback, van), transmission, age, mileage, estimated value, and more—tailored to your buying strategy. Your Inbox Lane auto-populates with vehicles from our partnered auction houses that match your filters. Set up multiple filter profiles for different needs and apply secondary filters (e.g., vehicles with images or in specific locations) for extra precision."
        },
        {
          id: "ua2",
          question: "What are the Inbox, Evaluate, and Bid Lanes?",
          answer: "These lanes guide your workflow like a well-oiled machine:\n\n*   **Inbox Lane**: Your starting point, filled with vehicles matching your filters from our variety of auction houses.\n*   **Evaluate Lane**: Move vehicles here for deeper analysis. You must be a member of the auction house selling the vehicle. Run MotorCheck Condition Reports (£1 ex VAT, billed with your subscription), view Auction House reports, and assess the vehicle's potential.\n*   **Bid Lane**: Ready to act? Place, update, or cancel proxy bids directly with the auction house. Post-auction, Auca auto-updates the bid status, showing if you won, lost, or the sale price if you didn't win."
        },
        {
          id: "ua3",
          question: "How do I join an auction house through Auca?",
          answer: "Spot a vehicle from an auction house you're not a member of? No problem. From the Inbox Lane, select the vehicle and follow Auca's prompts to apply for membership with that auction house. Once approved, you can move the vehicle to the Evaluate Lane and start bidding."
        },
        {
          id: "ua4",
          question: "What reports can I access for vehicle evaluation?",
          answer: "Auca integrates with MotorCheck to provide:\n\n*   **Condition Reports**: £1 ex VAT per report, added to your next monthly invoice.\n*   **Service History and Specification Checks**: Run these using your MotorCheck Membership Token under your own MotorCheck account. Charges are billed directly by MotorCheck at your agreed rate, with no Auca fees.\n*   You can also view Auction House reports in the Evaluate Lane for a complete picture."
        },
        {
          id: "ua5",
          question: "How does proxy bidding work on Auca?",
          answer: "In the Bid Lane, place a proxy bid by setting your maximum offer, which Auca submits directly to the auction house. You can update or cancel the bid anytime before the auction ends. After the auction, Auca automatically updates the bid status, showing if you won, lost, or the final sale price. It's hassle-free and keeps you informed."
        },
        {
          id: "ua6",
          question: "What bidding analytics does Auca offer?",
          answer: "Auca tracks your bidding activity, letting you analyze how your proxy bids compare to sale prices, broken down by auction house and vehicle type. This insight helps you refine your strategy and spot opportunities. Exciting news: our next major release in late summer 2025 will introduce advanced Business Intelligence Reports for even deeper performance tracking!"
        },
        {
          id: "ua7",
          question: "Which auction houses does Auca work with?",
          answer: "Auca partners with a variety of large and specialist auction houses, ensuring broad regional coverage and diverse vehicle types. Check out our Partnerships page on the Auca website for the full list. This mix gives you a whole-market view, from mainstream to niche vehicles."
        }
      ]
    },
    {
      groupTitle: "Integrations and Account Management",
      items: [
        {
          id: "iam1",
          question: "How do I set up integrations with MotorCheck and auction houses?",
          answer: "In the Integration section of your Auca Accounts page, you can:\n\n*   **Store your MotorCheck Membership Token**: Used for Condition Reports, Service History, and Specification Checks. Guided prompts make it easy to add.\n*   **Enter Auction House Membership Tokens**: These validate your ability to bid with partnered auction houses. The process is simple, with clear instructions provided.\n*   These integrations connect your existing memberships to Auca for a seamless experience."
        },
        {
          id: "iam2",
          question: "How do I manage my billing and invoices?",
          answer: "The Billing section of your Auca Accounts page puts you in control. You can:\n\n*   Download invoices for your records.\n*   Update payment methods (card, direct debit, or contact us for corporate terms).\n*   View upcoming invoices, including any £1 (ex VAT) MotorCheck report charges.\n*   Cancel your subscription with one click.\n*   It's designed for transparency and ease."
        },
        {
          id: "iam3",
          question: "What support does Auca offer?",
          answer: "Auca provides customer-led email support, with dedicated tiers for business process, billing, and technical queries. Every support request is logged, prioritized, and followed through to resolution. As an innovative platform, we actively listen to your feedback to evolve and improve, ensuring you get the most out of Auca."
        }
      ]
    },
    {
      groupTitle: "Pricing and Costs",
      items: [
        {
          id: "pc1",
          question: "How much does Auca cost?",
          answer: "Auca's pricing is straightforward:\n\n*   £149/month (ex VAT) for a single user.\n*   £99/month (ex VAT) per additional user.\n*   £1 (ex VAT) per MotorCheck Condition Report, added to your next invoice.\n*   Service History and Specification Checks via MotorCheck are billed directly by MotorCheck at your agreed rate. There are no other Auca fees."
        },
        {
          id: "pc2",
          question: "Are there any additional costs?",
          answer: "Nope! The subscription, additional user fees, and MotorCheck Condition Reports are the only costs from Auca (all ex VAT). Auction house fees (e.g., buyer's premiums) apply separately when you bid or win vehicles, as set by the auction house."
        },
        {
          id: "pc3",
          question: "Can I pay annually instead of monthly?",
          answer: "Auca currently offers monthly billing for flexibility. Contact our team to discuss corporate terms if you're interested in alternative arrangements."
        }
      ]
    },
    {
      groupTitle: "Why Choose Auca?",
      items: [
        {
          id: "wca1",
          question: "Why is Auca the right choice for professional buyers?",
          answer: "Auca empowers you to work smarter. Our platform aggregates listings from a variety of auction houses, giving you a whole-market view with regional and vehicle-type diversity. Custom filters, MotorCheck integration, and bidding analytics streamline your workflow, while our innovative approach ensures constant improvements. Whether you're an independent dealer or a large dealership, Auca helps you source vehicles with confidence and efficiency."
        },
        {
          id: "wca2",
          question: "What's next for Auca?",
          answer: "Since our launch in May 2025, Auca has been on a high-tempo mission to innovate. Our roadmap for late summer 2025 and beyond includes exciting features like Bulk Bidding, advanced Business Intelligence Modules, native mobile apps, and Integrated Funding options. As we grow, we're listening closely to users to evolve our platform and deliver even more value. Join us on this journey!"
        },
        {
          id: "wca3",
          question: "How does Auca stay innovative?",
          answer: "Auca is built on best-of-breed technology, backed by elite partners, and founded by motor auction industry experts. We're not just keeping up—we're setting the pace. By actively incorporating user feedback and rolling out new features, we ensure Auca remains your go-to platform for smarter car buying."
        }
      ]
    },
    {
      groupTitle: "Still Have Questions?",
      items: [
        {
          id: "shq1",
          question: "Still Have Questions?",
          answer: "Drop us a line via our email support at Hello@Auca.com. Auca is more than a platform—it's your partner in navigating the UK car auction market with innovation and insight. Sign up today and be part of an exciting journey that's transforming how professional buyers source vehicles!"
        }
      ]
    }
  ]

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Filter logic remains the same, but needs to check across all groups
  const filteredFaqData = groupedFaqData.map(group => ({
    ...group,
    items: group.items.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0); // Keep groups that have matching items

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Logo Section - Commented out for now
      <div className="flex justify-center mb-12">
        <img 
          src="/auca-logo.png" 
          alt="AUCA Logo" 
          className="h-20 w-auto"
        />
      </div>
      */}

      {/* Search Bar */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      {/* FAQ List - Now iterating through groups */}
      <div className="space-y-10">
        {filteredFaqData.length > 0 ? (
          filteredFaqData.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{group.groupTitle}</h2>
              <div className="space-y-6">
                {group.items.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <button
                      className="w-full px-6 py-5 text-left text-gray-800 bg-white hover:bg-gray-50 flex justify-between items-center transition duration-150 ease-in-out"
                      onClick={() => toggleQuestion(faq.id)}
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      <span className="ml-6 text-blue-600 text-xl font-semibold">
                        {openQuestion === faq.id ? '−' : '+'}
                      </span>
                    </button>
                    {openQuestion === faq.id && (
                      <div className="px-6 pt-4 pb-5 bg-gray-50 border-t border-gray-200 whitespace-pre-line">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">No matching FAQs found for "{searchQuery}".</p>
        )}
      </div>
    </div>
  )
} 