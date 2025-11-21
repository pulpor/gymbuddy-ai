import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import trainerPhoto from "@/assets/trainer-photo.jpg";

const Personal = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Vim pelo FitClub e gostaria de tirar algumas dúvidas sobre meu treino.", "_blank");
  };

  const handleCalendly = () => {
    window.open("https://calendly.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Contato Personal
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary">
              <img
                src={trainerPhoto}
                alt="Jhon Due - Personal Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="text-3xl">Jhon Due</CardTitle>
            <CardDescription className="text-base">
              Personal Trainer • CREF 123456-G/SP
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground">
                Olá! Sou o Jhon, seu personal trainer dedicado. Com mais de 10 anos de experiência, 
                estou aqui para te ajudar a alcançar seus objetivos de forma segura e eficiente.
              </p>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-gradient-accent text-accent-foreground"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleCalendly}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
            </div>

            <Card className="bg-muted">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Especialidades</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hipertrofia e ganho de massa muscular</li>
                  <li>• Emagrecimento e definição</li>
                  <li>• Treino funcional</li>
                  <li>• Reabilitação pós-lesão</li>
                  <li>• Preparação física para esportes</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>Disponível de Segunda a Sexta, das 6h às 22h</p>
              <p>Sábados das 8h às 14h</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Personal;
