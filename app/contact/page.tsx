
'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useForm, Controller } from "react-hook-form"
import { useState } from "react"
import { api } from "@/lib/api"
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  country: string
  enquiryType: string
  message: string
  terms: boolean,
  agreedToTerms: boolean
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { 
    register, 
    handleSubmit, 
    reset, 
    control,
    setValue,
    formState: { errors, isSubmitted } 
  } = useForm<ContactFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      enquiryType: '',
      message: '',
      terms: false,
      agreedToTerms: false
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (!data.terms) {
        toast.error('Please agree to the terms and conditions');
        return;
      }
      
      setIsSubmitting(true);
      
      // Prepare the form data to match the backend's expected format
      const formData = {
        name: `${data.firstName.trim()} ${data.lastName.trim()}`,
        email: data.email.trim(),
        phone: data.phone?.trim() || '',
        company: data.company?.trim() || '',
        country: data.country,
        enquiryType: data.enquiryType || 'General Inquiry',
        message: data.message.trim(),
        agreedToTerms: data.terms
      };
      
      console.log('Submitting contact form with data:', formData);
      
      // Submit the form data
      await api.submitContactForm(formData);
      
      // Show success message
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.'
      });
      
      // Reset the form
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        enquiryType: '',
        message: '',
        terms: false,
        agreedToTerms: false
      });
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast.error('Failed to send message', {
        description: error instanceof Error ? error.message : 'Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          {/* Header Section */}
          <div className="text-center mb-16 bg-[#696DCB] rounded-lg py-8 px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch!</h1>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Have questions or need a hand? Our team is here to assist and make sure you get the support you need!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Info Cards */}
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a helping hand?</h3>
                  <p className="text-gray-600">Our support experts are always available to assist.</p>
                </div>

                <div className="bg-green-50 border-l-4 border-[#696DCB] p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to streamline your HR functions?</h3>
                  <p className="text-gray-600">
                    Chat with a Product Expert to get your questions answered and see how our platform perfectly fits your unique needs!
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Want pricing info?</h3>
                  <p className="text-gray-600">
                    Discover pricing options that align with your business size and goals.
                  </p>
                </div>

                {/* Added Contact Info Section */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact & Support</h3>
                  <p className="text-gray-600 mb-2">Feel free to talk to our online representative at any time you please using our Live Chat system on our website or one of the below instant messaging programs.</p>
                  <p className="text-gray-600 mb-2">(24/7 Support!)</p>
                  <p className="text-gray-600 mb-2">Phone General Inquiries: <br/>+254 20 4409583, <br/>+254 743 814321, <br/>+254 720 402260</p>
                  <p className="text-gray-600 mb-2">Email: <a href="mailto:info@pristinesystems.ke" className="text-blue-600 underline">info@pristinesystems.ke</a></p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      placeholder="First name" 
                      className={`w-full bg-white text-gray-700 ${errors.firstName ? 'border-red-500' : ''}`} 
                      {...register('firstName', { 
                        required: 'First name is required',
                        minLength: { value: 2, message: 'First name must be at least 2 characters' }
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      placeholder="Last name" 
                      className={`w-full bg-white text-gray-700 ${errors.lastName ? 'border-red-500' : ''}`} 
                      {...register('lastName', { 
                        required: 'Last name is required',
                        minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <Input 
                      id="email" 
                      placeholder="your.email@example.com" 
                      className={`w-full bg-white text-gray-700 ${errors.email ? 'border-red-500' : ''}`} 
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: 'Please enter a valid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className={`min-h-[120px] w-full bg-white text-gray-700 ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                      {...register('terms', { required: 'You must accept the terms and conditions' })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I consent to the terms and conditions stated in the{' '}
                      <a href="/privacy-policy" className="text-blue-600 hover:text-blue-500 underline">
                        Privacy Policy
                      </a>
                    </label>
                    {errors.terms && (
                      <p className="text-sm text-red-500 mt-1">{errors.terms.message}</p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#696DCB] hover:bg-[#5a5fb8] text-white py-6 text-base font-medium transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
