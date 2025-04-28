import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#1E1B3C] text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">AUCA FAQ</h1>
          <p className="text-gray-300">Find answers to commonly asked questions about our services</p>
        </div>
      </div>
      <FAQ />
    </main>
  )
}
