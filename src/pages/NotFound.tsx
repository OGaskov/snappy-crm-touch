
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Страница не найдена</h2>
        <p className="text-muted-foreground mb-6">
          Извините, запрашиваемая страница не найдена. Пожалуйста, проверьте URL или вернитесь на панель управления.
        </p>
        <Button asChild>
          <Link to="/">Вернуться на панель управления</Link>
        </Button>
      </div>
    </div>
  );
}
