import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'princejmaurya10@gmail.com', href: 'mailto:princejmaurya10@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Nagpur, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ThePrinceM', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prince-maurya-037a9829a', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:princejmaurya10@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="neo-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="neo-card p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl neo-card flex items-center justify-center hover:border-primary/50 hover:shadow-[0_0_20px_hsl(185_85%_55%/0.2)] transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="neo-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted/30 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 shadow-[0_0_30px_hsl(185_85%_55%/0.3)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
