"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function QuoteForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		projectDetails: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSuccess("");
		setError("");
		try {
			const res = await fetch("http://localhost:5000/api/quote", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (res.ok) {
				setSuccess("Quote request sent!");
				setForm({ name: "", email: "", phone: "", company: "", projectDetails: "" });
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
			<Input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
			<Input name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
			<Textarea name="projectDetails" placeholder="Project Details" value={form.projectDetails} onChange={handleChange} />
			<Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? "Sending..." : "Send Quote"}</Button>
			{success && <p className="text-green-600">{success}</p>}
			{error && <p className="text-red-600">{error}</p>}
		</form>
	);
}
// Quote form will be re-implemented here
