import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Minus, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Mock data - será substituído pela API real
const mockExercises = [
  {
    id: 1,
    name: "Supino Reto com Barra",
    muscleGroup: ["peito"],
    sets: 4,
    reps: 10,
    weight: 60,
    completed: false,
    gifUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400",
    description: "Deite no banco com os pés apoiados no chão. Segure a barra com as mãos um pouco mais largas que os ombros.",
  },
  {
    id: 2,
    name: "Supino Inclinado com Halteres",
    muscleGroup: ["peito superior"],
    sets: 3,
    reps: 12,
    weight: 24,
    completed: false,
    gifUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
    description: "No banco inclinado a 45°, segure os halteres com os braços estendidos acima do peito.",
  },
  {
    id: 3,
    name: "Tríceps Testa com Barra",
    muscleGroup: ["tríceps"],
    sets: 3,
    reps: 12,
    weight: 30,
    completed: false,
    gifUrl: "https://images.unsplash.com/photo-1583454122625-4a3368b0e9b5?w=400",
    description: "Deitado no banco, segure a barra com pegada fechada e desça em direção à testa.",
  },
];

const Workout = () => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState(mockExercises);

  const updateExercise = (id: number, field: string, value: any) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, [field]: value } : ex
    ));
  };

  const toggleComplete = (id: number) => {
    const exercise = exercises.find(ex => ex.id === id);
    updateExercise(id, "completed", !exercise?.completed);
    
    if (!exercise?.completed) {
      toast.success("Exercício concluído! 💪");
    }
  };

  const finishWorkout = () => {
    const completedCount = exercises.filter(ex => ex.completed).length;
    if (completedCount === exercises.length) {
      toast.success("Treino completo! Parabéns! 🎉");
      navigate("/dashboard");
    } else {
      toast.error(`Complete todos os exercícios! Faltam ${exercises.length - completedCount}`);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-secondary-foreground">Treino A</h1>
              <p className="text-sm text-secondary-foreground/80">Peito e Tríceps</p>
            </div>
          </div>
          <Badge variant="outline" className="text-sm">
            {exercises.filter(ex => ex.completed).length}/{exercises.length}
          </Badge>
        </div>
      </header>

      {/* Exercises List */}
      <main className="container mx-auto px-4 py-6 space-y-4">
        {exercises.map((exercise) => (
          <Card 
            key={exercise.id} 
            className={`transition-all ${exercise.completed ? 'opacity-60 border-accent' : ''}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    {exercise.name}
                    {exercise.completed && (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    )}
                  </CardTitle>
                  <CardDescription className="capitalize">
                    {exercise.muscleGroup.join(", ")}
                  </CardDescription>
                </div>
                <Button
                  size="sm"
                  variant={exercise.completed ? "outline" : "default"}
                  className={exercise.completed ? "" : "bg-gradient-accent"}
                  onClick={() => toggleComplete(exercise.id)}
                >
                  {exercise.completed ? "Desmarcar" : "Concluir"}
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Exercise Image/GIF */}
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {exercise.description}
              </p>

              {/* Sets and Reps Controls */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Séries</label>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateExercise(exercise.id, "sets", Math.max(1, exercise.sets - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={exercise.sets}
                      onChange={(e) => updateExercise(exercise.id, "sets", parseInt(e.target.value) || 1)}
                      className="text-center h-8"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateExercise(exercise.id, "sets", exercise.sets + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Reps</label>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateExercise(exercise.id, "reps", Math.max(1, exercise.reps - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={exercise.reps}
                      onChange={(e) => updateExercise(exercise.id, "reps", parseInt(e.target.value) || 1)}
                      className="text-center h-8"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateExercise(exercise.id, "reps", exercise.reps + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Carga (kg)</label>
                  <Input
                    type="number"
                    value={exercise.weight}
                    onChange={(e) => updateExercise(exercise.id, "weight", parseFloat(e.target.value) || 0)}
                    className="text-center h-8"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
        <div className="container mx-auto">
          <Button
            size="lg"
            className="w-full bg-gradient-hero text-primary-foreground"
            onClick={finishWorkout}
          >
            Finalizar Treino
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
