
'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SimpleContactForm from "@/components/simple-contact-form"
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
                  <p className="text-gray-600 mb-2">Phone General Inquiries: <br/>+254 714 133304</p>
                  <p className="text-gray-600 mb-2">Email: <a href="mailto:info@pristinesystems.ke" className="text-blue-600 underline">info@pristinesystems.ke</a></p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-black mb-6">Send us a message</h2>
              <SimpleContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
