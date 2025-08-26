import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Подача заявки",
      description: "Заполните онлайн-заявку на сайте или в мобильном приложении за 5 минут",
      time: "5 минут"
    },
    {
      icon: CreditCard,
      number: "02", 
      title: "Рассмотрение",
      description: "Наши специалисты рассматривают заявку и принимают решение",
      time: "15 минут"
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Получение денег",
      description: "Подписание договора и зачисление средств на ваш счёт",
      time: "В тот же день"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Как получить кредит
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простой процесс в три шага — от заявки до получения денег
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border relative overflow-hidden">
                <CardContent className="p-8 text-center relative z-10">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                    {step.number}
                  </div>
                  
                  <div className="mx-auto mb-6 p-4 bg-gradient-primary rounded-xl w-fit group-hover:animate-float transition-all duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {step.time}
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-purple px-12 py-4 text-lg font-semibold group transition-all duration-300"
          >
            Начать процесс
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;