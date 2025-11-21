import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, LogOut, User } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/auth");
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error || !data?.onboarding_completed) {
      navigate("/onboarding");
      return;
    }

    setProfile(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Dumbbell className="w-16 h-16 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            FitClub
          </h1>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => navigate("/personal")}>
              <User className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Olá! Bora treinar? 💪</h2>
          <p className="text-muted-foreground">
            Seu treino personalizado está pronto e te esperando
          </p>
        </div>

        <div className="grid gap-6">
          {/* Profile Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Seu Perfil</CardTitle>
              <CardDescription>Informações do seu treino personalizado</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nível</p>
                <p className="font-semibold capitalize">{profile?.fitness_level}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Objetivo</p>
                <p className="font-semibold capitalize">{profile?.goals}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dias por semana</p>
                <p className="font-semibold">{profile?.days_per_week} dias</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Peso</p>
                <p className="font-semibold">{profile?.weight} kg</p>
              </div>
            </CardContent>
          </Card>

          {/* Workout Card */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-secondary-foreground">Treino de Hoje</CardTitle>
              <CardDescription className="text-secondary-foreground/80">
                Treino A - Peito e Tríceps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="w-full bg-gradient-hero text-primary-foreground mb-4"
                onClick={() => navigate("/workout")}
              >
                Iniciar Treino
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => toast.info("Gerando novo treino... (em breve)")}
              >
                Mudar Treino
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="hover:shadow-card transition-shadow cursor-pointer" onClick={() => toast.info("Histórico em breve!")}>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Histórico de Treinos</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe sua evolução
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer" onClick={() => navigate("/personal")}>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Falar com Personal</h3>
                <p className="text-sm text-muted-foreground">
                  Tire suas dúvidas com Jhon Due
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
