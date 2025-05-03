'use client';

import { Mail, PhoneCall, Linkedin, Facebook, Github} from 'lucide-react';
import ContactForm from '@/Component/contactform';
import Container from '@/Component/Shared/Container';

const Contact = () => {
  return (
    <Container><div className="mt-20 mx-auto px-4 max-w-6xl">
  <h2 className="text-6xl lg:text-8xl my-10 text-transparent
     stroke-purple-500 stroke-1 uppercase font-extrabold
      tracking-widest">
        Contact Me
    </h2>

    <div className="flex flex-wrap justify-center gap-6 border p-6 rounded-md">
      <ContactLink icon={<PhoneCall size={40} />} title="Whatsapp" detail="+8801629252634" href="tel:+8801629252634" />
      <ContactLink icon={<Mail size={40} />} title="Email" detail="njahanpritom65@gmail.com" href="mailto:njahanpritom65@gmail.com" />
      <ContactLink icon={<Linkedin size={40} />} title="LinkedIn" detail="Nilima Jahan Pritom" href="https://www.linkedin.com/in/nilima-jahan-pritom" />
      <ContactLink icon={<Github size={40} />} title="Github" detail="Pritom003" href="https://github.com/Pritom003" />
      <ContactLink icon={<Facebook size={40} />} title="Facebook" detail="Nilima Jahan" href="https://www.facebook.com/profile.php?id=100078328218649" />
    </div>

    <div className="mt-20 flex justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Let’s Talk</h2>
        <ContactForm />
      </div>
    </div>
  </div></Container>
  );
};

type ContactLinkProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
};

const ContactLink = ({ icon, title, detail, href }: ContactLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 hover:text-[#b370b3] transition-all group">
    <div className="text-[#913391]  group-hover:opacity-70">{icon}</div>
    <div>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-sm">{detail}</p>
    </div>
  </a>
);

export default Contact;
