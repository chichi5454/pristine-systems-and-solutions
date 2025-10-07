"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function SimpleContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", terms: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms) {
      setError("You must consent to the Privacy Policy.");
      return;
    }
    setIsSubmitting(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Message sent!");
        setForm({ name: "", email: "", message: "", terms: false });
      } else {
        setError("Failed to send. Try again.");
      }
    } catch {
      setError("Failed to send. Try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4">
      <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <Textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
      <div className="flex items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={form.terms}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label htmlFor="terms" className="text-sm">
          I consent to the terms and conditions stated in the{' '}
          <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>
        </label>
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? "Sending..." : "Send Message"}</Button>
      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
