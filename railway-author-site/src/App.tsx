import { useState } from 'react'

// Placeholder data for books
const books = [
  {
    id: 1,
    title: "Indian Railway Track",
    summary: "A comprehensive treatise on railway track technology for Permanent Way Engineers, covering maintenance and modernization.",
    cover: "/images/indian-railway-track.jpg",
    pdf: "/books/indian-railway-track.pdf"
  },
  {
    id: 2,
    title: "Railway Works Engineering",
    summary: "A complete guide to works & bridge engineering as well as construction project management for field engineers.",
    cover: "/images/cover-engineering.jpg",
    pdf: "/books/railway-works.pdf"
  },
  {
    id: 3,
    title: "Indian Railway Safety",
    summary: "A pictorial guide detailing various accidents, their causes, and remedial measures to prevent future incidents.",
    cover: "/images/cover-safety.jpg",
    pdf: "/books/track-monitoring.pdf"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary tracking-tight">M. M. Agarwal</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#bio" className="text-slate-600 hover:text-accent transition-colors font-medium">About</a>
              <a href="#books" className="text-slate-600 hover:text-accent transition-colors font-medium">Books</a>
              <a href="#contact" className="text-slate-600 hover:text-accent transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-primary focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#bio" className="block px-3 py-2 text-slate-600 hover:text-accent font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#books" className="block px-3 py-2 text-slate-600 hover:text-accent font-medium" onClick={() => setIsMenuOpen(false)}>Books</a>
              <a href="#contact" className="block px-3 py-2 text-slate-600 hover:text-accent font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Dedicated to Indian Railway Engineering & Safety
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Sharing over three decades of experience in track modernization and safety through technical literature and service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#books" 
              className="inline-block bg-accent hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-orange-600/20"
            >
              View Books & Downloads
            </a>
            <a 
              href="#bio" 
              className="inline-block bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Read Biography
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="bio" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <img 
                src="/images/author_dp.jpeg" 
                alt="M. M. Agarwal" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-primary mb-6">About M. M. Agarwal</h2>
              <div className="prose prose-slate text-slate-600 leading-relaxed">
                <p className="mb-6">
                  M. M. Agarwal served for <strong>33 years in the Railway Service</strong>, retiring as Chief Engineer of Indian Railways. A distinguished engineer, he holds a B.Sc. and B.E. (First Division & First Position) and an MBA. His career has been defined by a focus on track modernization, safety protocols, and engineering education.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mb-3">Professional Highlights</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>International Experience:</strong> Served 1 year in Germany studying the "Modernisation of German Railways" and 5 years in Zambia as Senior Engineer for Way & Works.</li>
                  <li><strong>Leadership:</strong> Served as Director of the Indian Railway Housing Organisation (IRWO) for 4 years and Executive Director of the Institution of Permanent Way Engineers (IPWE) for 7 years.</li>
                  <li><strong>Project Management:</strong> Supervised a World Bank-aided rehabilitation project of national importance valued at over $250 million.</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary mb-3 mt-6">Awards & Recognition</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>National Award:</strong> Railway Minister's Medal for special work on Track Modernisation.</li>
                  <li><strong>President's Award:</strong> 'Indira Gandhi RajBhasa Award' for the best original book written in Rajbhasha for professionals.</li>
                  <li><strong>Lal Bahadur Shashtri Raj Bhasa Award:</strong> For best professional book in Raj Bhasa for Railway Engineers.</li>
                  <li><strong>Vishwa Vidalaya Gaurav Ratna Award:</strong> For special services to society and the Nation.</li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Professional Memberships</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Fellow of Institution of Engineers (FIE)",
                      "Fellow of Permanent Way Engineering (FIPWE)",
                      "Fellow of Institution of Railway Transportation (FIRT)",
                      "Fellow of Indian Council of Arbitration (FICA)",
                      "Fellow of Institution of Valuers (FIV)"
                    ].map((item, i) => (
                      <span key={i} className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-sm text-slate-500 italic">
                  <p>
                    Author of over 60 technical articles in professional journals in India & abroad, and multiple standard textbooks including 
                    "Indian Railway Track" and "Objective Railway Engineering".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Technical Books & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[3/4] bg-slate-200 relative">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{book.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{book.summary}</p>
                  <div className="space-y-3 mt-auto">
                    <a 
                      href={book.pdf} 
                      download 
                      className="block w-full text-center bg-primary hover:bg-slate-800 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                      Download PDF (Free)
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Contact</h2>
          
          <div className="mb-8 space-y-2">
            <h3 className="text-xl font-bold text-primary">PRABHA & CO.</h3>
            <p className="text-slate-600">Address: C-157, Anand Vihar, Delhi-110092</p>
            <div className="text-slate-600">
              <p>Ph: 011-22153586</p>
              <p>Ph: +91 9971806810</p>
            </div>
          </div>

          <a 
            href="mailto:sanjay@aravalis.in" 
            className="text-2xl md:text-3xl font-bold text-accent hover:text-orange-700 transition-colors"
          >
            sanjay@aravalis.in
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            Copyright © {new Date().getFullYear()} PRABHA & CO. All Rights Reserved.
          </div>
          <div>
            <a 
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
              Creative Commons License (CC BY-NC-ND)
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
