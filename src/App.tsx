import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <SignupForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
