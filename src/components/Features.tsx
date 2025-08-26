import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Clock, 
  Calculator, 
  HeadphonesIcon, 
  CheckCircle,
  FileText,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Быстрое решение",
      description: "Предварительное решение за 15 минут, окончательное — в течение дня"
    },
    {
      icon: Shield,
      title: "Надёжность",
      description: "Лицензия ЦБ РФ, участие в системе страхования вкладов"
    },
    {
      icon: Calculator,
      title: "Выгодные условия",
      description: "Низкие процентные ставки и гибкие условия погашения"
    },
    {
      icon: FileText,
      title: "Минимум документов",
      description: "Только паспорт и второй документ для получения кредита"
    },
    {
      icon: Smartphone,
      title: "Онлайн-заявка",
      description: "Подача заявки через сайт или мобильное приложение"
    },
    {
      icon: HeadphonesIcon,
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка и консультации"
    },
    {
      icon: CheckCircle,
      title: "Без скрытых комиссий",
      description: "Прозрачные условия без дополнительных платежей"
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Возможность досрочного погашения без комиссий"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 000 клиентов доверяют нам свои финансовые цели
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-lg w-fit group-hover:animate-pulse-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;