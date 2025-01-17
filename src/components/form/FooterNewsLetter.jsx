"use client";
import React from 'react';
import { toast } from 'react-toastify';

const FooterNewsLetter = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8405ef09-25b7-4594-a12d-3921d401c6c3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });
    
            const result = await response.json();
    
            if (result.success) {
                toast.success("Thank you for reaching out! We’ll get back to you shortly.");
                event.target.reset(); // Reset the form only on success
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error submitting the form. Please check your connection.");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </>
    );
};

export default FooterNewsLetter;