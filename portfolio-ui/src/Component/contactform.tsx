'use client';

import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm('service_s2a846p', 'template_ux5y98d', formRef.current, 'xg_it34Ban1qLoOoC')
      .then((result) => {
        if (result.text.toLowerCase() === 'ok') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message has been successfully sent to Pritom',
            showConfirmButton: false,
            timer: 1500,
          });
          reset(); // React Hook Form reset
        } else {
          toast.error('Failed to send email. Please try again.');
        }
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send email. Please try again.');
      });
  };

  return (
   <div>
     <div className=" border-2 m-10 border-[#b641b6] p-4 max-w-[500px] mx-auto rounded-lg shadow-lg">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register('user_email', { required: 'Email is required' })}
            className="w-full p-2 rounded border"
          />
          {errors.user_email?.message && (
            <p className="text-red-200 text-sm">{String(errors.user_email.message)}</p>
          )}
        </div>

       
        <div>
          <label className="block text-white font-medium mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Your message"
            {...register('message', { required: 'Message is required' })}
            className="w-full p-2 rounded border"
          />
          {errors.message && <p className="text-red-200 text-sm">{String(errors.message.message)}</p>}
        </div>

        <button
          type="submit"
          className="bg-[#e6b7e6] hover:bg-[#1D7B84] text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
   </div>
  );
};

export default ContactForm;
