import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Предприниматель",
      rating: 5,
      text: "Получила кредит на развитие бизнеса за один день. Очень удобно и без лишних документов. Рекомендую всем!",
      city: "Москва"
    },
    {
      name: "Михаил Сидоров", 
      role: "IT-специалист",
      rating: 5,
      text: "Взял ипотеку по очень выгодной ставке. Менеджеры помогли со всеми документами и подобрали лучшие условия.",
      city: "Санкт-Петербург"
    },
    {
      name: "Елена Козлова",
      role: "Учитель",
      rating: 5,
      text: "Потребительский кредит на ремонт квартиры. Всё оформили быстро, ставка оказалась ниже, чем в других банках.",
      city: "Казань"
    },
    {
      name: "Дмитрий Волков",
      role: "Менеджер",
      rating: 5,
      text: "Автокредит на покупку машины. Отличные условия, быстрое рассмотрение заявки. Очень доволен сервисом!",
      city: "Новосибирск"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже получил кредит
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.city}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 bg-secondary/50 rounded-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15k+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Одобрений</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;