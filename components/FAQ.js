'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqData = [
    {
      id: 1,
      question: "What services does AUCA provide?",
      answer: "AUCA provides comprehensive educational services including undergraduate and graduate programs, research opportunities, and professional development courses."
    },
    {
      id: 2,
      question: "How can I apply to AUCA?",
      answer: "You can apply to AUCA through our online application portal. Visit our admissions page for detailed requirements and deadlines."
    },
    {
      id: 3,
      question: "What are the fees?",
      answer: "Basic plan starts at £149 per month for one users, additional users are only £99 per month"
    }
  ]

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {faqData.map((faq) => (
          <div key={faq.id} className="border rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
              onClick={() => toggleQuestion(faq.id)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="ml-6">
                {openQuestion === faq.id ? '−' : '+'}
              </span>
            </button>
            {openQuestion === faq.id && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 