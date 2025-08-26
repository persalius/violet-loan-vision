import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Percent } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Кредиты
            <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              Без переплат
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Получите деньги на любые цели с минимальной процентной ставкой 
            и гибкими условиями погашения
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-purple group transition-all duration-300"
            >
              Получить кредит
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Рассчитать платёж
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Percent className="h-8 w-8 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold">от 5%</div>
                <div className="text-sm opacity-90">годовых</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold">15 мин</div>
                <div className="text-sm opacity-90">решение</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">безопасно</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;