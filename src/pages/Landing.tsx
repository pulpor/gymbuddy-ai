import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Target, Calendar, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-gym.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Bem-vindo ao <span className="bg-gradient-hero bg-clip-text text-transparent">FitClub</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Treinos personalizados que se adaptam aos seus objetivos. Resultados reais, quando e onde você quiser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all text-lg px-8 py-6"
              onClick={() => navigate("/auth")}
            >
              Começar Agora 💪
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-secondary/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-secondary/30 text-lg px-8 py-6"
              onClick={() => navigate("/auth")}
            >
              Já tenho conta
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Por que escolher o FitClub?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:shadow-card transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Treinos Personalizados</h3>
                <p className="text-muted-foreground">
                  Gerados automaticamente com base nos seus objetivos e nível físico
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-card transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exercícios em Vídeo</h3>
                <p className="text-muted-foreground">
                  Demonstrações em gif e vídeo para execução perfeita
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-card transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Totalmente Flexível</h3>
                <p className="text-muted-foreground">
                  Mude o treino a qualquer momento ou ajuste cargas e repetições
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-card transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Suporte Personal</h3>
                <p className="text-muted-foreground">
                  Contato direto via WhatsApp e agendamento simplificado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-6">
            Pronto para transformar seu corpo?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já alcançaram seus objetivos com o FitClub
          </p>
          <Button 
            size="lg"
            className="bg-gradient-hero text-primary-foreground hover:shadow-glow transition-all text-lg px-8 py-6"
            onClick={() => navigate("/auth")}
          >
            Começar Gratuitamente
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
