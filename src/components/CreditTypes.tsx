import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Car, GraduationCap, ShoppingBag, Building, Briefcase } from "lucide-react";

const CreditTypes = () => {
  const creditTypes = [
    {
      icon: Home,
      title: "Ипотека",
      rate: "от 8.5%",
      amount: "до 30 млн ₽",
      term: "до 30 лет",
      description: "Покупка квартиры, дома или коммерческой недвижимости",
      popular: true
    },
    {
      icon: Car,
      title: "Автокредит",
      rate: "от 7.9%",
      amount: "до 5 млн ₽",
      term: "до 7 лет",
      description: "Новые и подержанные автомобили с господдержкой"
    },
    {
      icon: ShoppingBag,
      title: "Потребительский",
      rate: "от 9.9%",
      amount: "до 3 млн ₽",
      term: "до 5 лет",
      description: "На любые цели без справок и поручителей"
    },
    {
      icon: GraduationCap,
      title: "Образование",
      rate: "от 6.5%",
      amount: "до 2 млн ₽",
      term: "до 10 лет",
      description: "Обучение в ВУЗах и курсы повышения квалификации"
    },
    {
      icon: Building,
      title: "Рефинансирование",
      rate: "от 8.0%",
      amount: "до 10 млн ₽",
      term: "до 25 лет",
      description: "Объединение кредитов с выгодной ставкой"
    },
    {
      icon: Briefcase,
      title: "Бизнес-кредит",
      rate: "от 12%",
      amount: "до 50 млн ₽",
      term: "до 5 лет",
      description: "Развитие и пополнение оборотных средств"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Виды кредитования
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тип кредита для достижения ваших целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creditTypes.map((credit, index) => (
            <Card 
              key={credit.title} 
              className={`relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border ${
                credit.popular ? 'ring-2 ring-primary shadow-purple' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {credit.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-lg w-fit">
                  <credit.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{credit.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">{credit.rate}</div>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сумма:</span>
                    <span className="font-semibold">{credit.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-semibold">{credit.term}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm">
                  {credit.description}
                </p>
                
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-purple transition-all duration-300"
                >
                  Подать заявку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditTypes;