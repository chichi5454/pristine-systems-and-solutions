'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { api } from "@/lib/api"
import { toast } from "sonner"

type QuoteFormData = {
  firstName: string
  lastName: string
  email: string
  company?: string
  phone?: string
  projectDetails: string
}

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitted, touchedFields } 
  } = useForm<QuoteFormData>({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      projectDetails: ''
    }
  })

  const onSubmit = async (data: QuoteFormData) => {
    try {
      setIsSubmitting(true);
      
      // Prepare the form data to match the backend's expected format
      const formData = {
        name: `${data.firstName.trim()} ${data.lastName.trim()}`,
        email: data.email.trim(),
        phone: data.phone?.trim() || '',
        company: data.company?.trim() || '',
        service: 'Other', // Default service
        message: data.projectDetails.trim(),
        budget: 'Not sure', // Default budget
        timeframe: 'No specific deadline' // Default timeframe
      };
      
      await api.submitQuoteRequest(formData);
      
      // Show success message
      toast.success('Quote request submitted successfully!', {
        description: 'Our team will review your request and get back to you shortly.'
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error('Error submitting quote:', error);
      
      // Show error message
      toast.error('Failed to submit quote request', {
        description: error instanceof Error ? error.message : 'Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Request A Quote</h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your digital transformation journey? Get in touch with us today.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-primary">Get Your Custom Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Enter your first name" 
                    className={errors.firstName && (isSubmitted || touchedFields.firstName) ? 'border-red-500' : ''}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && (isSubmitted || touchedFields.firstName) && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Enter your last name" 
                    className={errors.lastName && (isSubmitted || touchedFields.lastName) ? 'border-red-500' : ''}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && (isSubmitted || touchedFields.lastName) && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className={errors.email && (isSubmitted || touchedFields.email) ? 'border-red-500' : ''}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (isSubmitted || touchedFields.email) && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className={errors.phone && (isSubmitted || touchedFields.phone) ? 'border-red-500' : ''}
                    {...register('phone', {
                      pattern: {
                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: 'Please enter a valid phone number'
                      }
                    })}
                  />
                  {errors.phone && (isSubmitted || touchedFields.phone) && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Enter your company name" 
                    className={errors.company && (isSubmitted || touchedFields.company) ? 'border-red-500' : ''}
                    {...register('company', {
                      minLength: {
                        value: 3,
                        message: 'Company name must be at least 3 characters'
                      }
                    })}
                  />
                  {errors.company && (isSubmitted || touchedFields.company) && (
                    <p className="text-sm text-red-500">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="projectDetails">Project Details *</Label>
                  <Textarea 
                    id="projectDetails" 
                    placeholder="Tell us about your project..." 
                    className={`min-h-[120px] ${errors.projectDetails && (isSubmitted || touchedFields.projectDetails) ? 'border-red-500' : ''}`}
                    {...register('projectDetails', { 
                      required: 'Project details are required',
                      minLength: {
                        value: 20,
                        message: 'Please provide more details about your project (at least 20 characters)'
                      }
                    })}
                  />
                  {errors.projectDetails && (isSubmitted || touchedFields.projectDetails) && (
                    <p className="text-sm text-red-500">{errors.projectDetails.message}</p>
                  )}
                </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
