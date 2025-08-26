import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Остались вопросы?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или оставьте заявку
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">
                  Быстрая заявка на кредит
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Input 
                    placeholder="Телефон" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                
                <Input 
                  placeholder="Email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Желаемая сумма" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                  <Input 
                    placeholder="Цель кредита" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                
                <Textarea 
                  placeholder="Дополнительная информация" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[100px]"
                />
                
                <Button 
                  className="w-full bg-white text-primary hover:bg-white/90 py-4 text-lg font-semibold group transition-all duration-300"
                >
                  Отправить заявку
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-xs text-white/70 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Телефон
                      </h3>
                      <p className="text-white/90 text-lg">8 (800) 123-45-67</p>
                      <p className="text-white/70 text-sm">Бесплатно по России</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Email
                      </h3>
                      <p className="text-white/90">info@creditbank.ru</p>
                      <p className="text-white/70 text-sm">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Время работы
                      </h3>
                      <p className="text-white/90">Пн-Пт: 9:00 - 21:00</p>
                      <p className="text-white/90">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Офисы
                      </h3>
                      <p className="text-white/90">Москва, Санкт-Петербург</p>
                      <p className="text-white/90">и 150 городов России</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;