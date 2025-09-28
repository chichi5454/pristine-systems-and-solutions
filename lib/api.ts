const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
console.log('Using API base URL:', API_BASE_URL);

export const api = {
  // Contact Form Submission
  async submitContactForm(data: any) {
    try {
      console.log('Sending contact form data:', data);
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log('Contact form response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to submit contact form');
      }

      return responseData;
    } catch (error) {
      console.error('Error in submitContactForm:', error);
      throw error;
    }
  },

  // Newsletter Subscription
  async subscribeToNewsletter(email: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to subscribe to newsletter');
      }

      return await response.json();
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
  },

  // Unsubscribe from Newsletter
  async unsubscribeFromNewsletter(email: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/newsletter/unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to unsubscribe from newsletter');
      }

      return await response.json();
    } catch (error) {
      console.error('Error unsubscribing from newsletter:', error);
      throw error;
    }
  },

  // Quote Request
  async submitQuoteRequest(data: any) {
    try {
      console.log('Sending quote request data:', data);
      const response = await fetch(`${API_BASE_URL}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log('Quote request response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to submit quote request');
      }

      return responseData;
    } catch (error) {
      console.error('Error in submitQuoteRequest:', error);
      throw error;
    }
  },
};
