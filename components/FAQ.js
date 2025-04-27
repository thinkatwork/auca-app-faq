'use client'

import { useState } from 'react'
// import Image from 'next/image'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqData = [
    {
      id: 1,
      question: "What services does AUCA provide?",
      answer: "AUCA is a national vehicle aggregator connecting motor trade buyers with vehicles from auction and wholesale platforms across the UK."
    },
    {
      id: 2,
      question: "How can I find vehicles on AUCA?",
      answer: "Register on the platform to search over 10,000 vehicles. You can check specifications, view detailed reports, and manage bids all in one place."
    },
    {
      id: 3,
      question: "Who are AUCA's partners?",
      answer: "AUCA partners with various companies including MotorCheck, NextGear Capital, and Invent Partners. We are also members of the Vehicle Remarketing Association."
    },
    {
      id: 4,
      question: "How does AUCA help me evaluate vehicles?",
      answer: "The platform allows you to check vehicle specifications and view detailed reports, helping you evaluate potential purchases efficiently."
    },
    {
      id: 5,
      question: "Is there a subscription required?",
      answer: "Yes, AUCA operates on a subscription model. One subscription gives you access to search, evaluate, and bid on vehicles from multiple sources."
    },
    {
      id: 6,
      question: "How do I register as a buyer?",
      answer: "You can register directly on the auca.com website to request early access and start searching for vehicles."
    },
    {
      id: 7,
      question: "What if I want to sell vehicles through AUCA?",
      answer: "Sellers can book a demo through the website to learn about listing their stock and connecting with AUCA's network of buyers."
    }
  ]

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const filteredFaqData = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

      <div className="space-y-6">
        {filteredFaqData.length > 0 ? (
          filteredFaqData.map((faq) => (
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
                <div className="px-6 pt-4 pb-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">No matching FAQs found.</p>
        )}
      </div>
    </div>
  )
} 