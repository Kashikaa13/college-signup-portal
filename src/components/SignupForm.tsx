import { useState } from 'react'
import Button from './ui/Button'
import Input from './ui/Input'

const SignupForm = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Student Registration</h1>
        <p className="text-gray-500 mt-2">Join our prestigious institution</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          required
        />
        <Button type="submit" loading={loading}>
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignupForm
