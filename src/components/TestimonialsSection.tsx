import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO, Tech Startup',
    content: 'Outstanding work! Delivered the project on time with exceptional quality. The attention to detail and problem-solving skills are remarkable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'A true professional who understands both technical and business requirements. Communication was excellent throughout the project.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CTO, Innovation Labs',
    content: 'Exceptional developer with a great eye for design. The code quality and architecture decisions were top-notch.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about my work
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="glass-card-hover p-8 md:p-12 rounded-2xl text-center relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6 mt-4">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
              "{currentTestimonial.content}"
            </p>

            {/* Author */}
            <div>
              <h4 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h4>
              <p className="text-primary text-sm">{currentTestimonial.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="glass-card border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="glass-card border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
