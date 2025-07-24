import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { id: 1, name: "🧩 Логические задачи", count: 12 },
    { id: 2, name: "🎨 Творческие задания", count: 8 },
    { id: 3, name: "🔢 Математика", count: 15 },
    { id: 4, name: "😊 Хорошее настроение", count: 20 },
    { id: 5, name: "🎭 Игры и развлечения", count: 10 }
  ];

  const featuredTasks = [
    {
      id: 1,
      title: "Собери пиксельную картинку",
      description: "Создай красивый рисунок из блоков, как в Minecraft!",
      difficulty: "Легко",
      time: "10 мин",
      category: "🎨 Творческие",
      category: "🎨 Творческие"
    },
    {
      id: 2,
      title: "Математический лабиринт",
      description: "Реши примеры и найди выход из лабиринта",
      difficulty: "Средне",
      time: "15 мин", 
      category: "🔢 Математика"
    },
    {
      id: 3,
      title: "Добрые дела дня",
      description: "Сделай что-то хорошее и поделись с друзьями!",
      difficulty: "Легко",
      time: "5 мин",
      category: "😊 Настроение"
    }
  ];

  return (
    <div className="min-h-screen bg-mc-dark font-minecraft text-mc-light minecraft-text">
      {/* Header */}
      <header className="bg-mc-dark border-b-4 border-mc-light p-4 shadow-pixel">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-mc-accent border-2 border-mc-light animate-pixel-bounce"></div>
            <h1 className="text-2xl font-bold text-mc-light">КубЗадания</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-mc-success hover:bg-mc-success/80 text-mc-dark border-2 border-mc-light shadow-pixel font-minecraft px-6"
            >
              Войти
            </Button>
            <Button 
              className="bg-mc-accent hover:bg-mc-accent/80 text-mc-light border-2 border-mc-light shadow-pixel font-minecraft px-6"
            >
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-80 bg-mc-dark min-h-screen border-r-4 border-mc-light p-6">
          <h2 className="text-xl font-bold text-mc-light mb-6 border-b-2 border-mc-light pb-2">
            📚 Категории заданий
          </h2>
          <div className="space-y-4">
            {categories.map(category => (
              <Card 
                key={category.id} 
                className="bg-mc-dark border-2 border-mc-light shadow-pixel hover:shadow-lg transition-all cursor-pointer hover:scale-105 hover:bg-mc-light hover:text-mc-dark"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{category.name}</span>
                    <span className="bg-mc-accent text-mc-light px-2 py-1 rounded-pixel text-xs border border-mc-light">
                      {category.count}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-mc-dark border-2 border-mc-accent rounded-lg shadow-pixel">
            <h3 className="font-bold text-mc-accent mb-2">🏆 Твой прогресс</h3>
            <div className="space-y-2 text-mc-light text-sm">
              <div>Выполнено: 23 задания</div>
              <div>Очки: 1,250 ⭐</div>
              <div className="w-full bg-mc-light rounded-pixel h-2">
                <div className="bg-mc-success h-2 rounded-pixel w-3/4"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-mc-dark">
          {/* Hero Section */}
          <div className="bg-mc-dark border-4 border-mc-light rounded-lg p-8 mb-8 shadow-pixel">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-mc-light mb-4">щалалаща</h1>
              <p className="text-xl text-mc-light/80 mb-6">
                Решай задачки, развивайся и поднимай настроение вместе с нами!
              </p>
              <Button 
                className="bg-mc-success hover:bg-mc-success/80 text-mc-dark border-2 border-mc-light shadow-pixel font-minecraft px-8 py-3 text-lg"
              >
                Начать приключение! 🚀
              </Button>
            </div>
          </div>

          {/* Featured Tasks */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-mc-light mb-6 flex items-center">
              <Icon name="Star" className="mr-2 text-mc-warning" />
              Популярные задания
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTasks.map(task => (
                <Card 
                  key={task.id}
                  className="bg-mc-dark border-2 border-mc-light shadow-pixel hover:shadow-lg transition-all cursor-pointer hover:scale-105 hover:border-mc-accent"
                >
                  <CardHeader>
                    <CardTitle className="text-mc-light text-lg">{task.title}</CardTitle>
                    <div className="flex gap-2">
                      <span className="bg-mc-success text-mc-dark px-2 py-1 rounded-pixel text-xs border border-mc-light">
                        {task.difficulty}
                      </span>
                      <span className="bg-mc-warning text-mc-dark px-2 py-1 rounded-pixel text-xs border border-mc-light">
                        {task.time}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-mc-light/80 text-sm mb-3">{task.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-mc-light/60">{task.category}</span>
                      <Button 
                        size="sm" 
                        className="bg-mc-accent hover:bg-mc-accent/80 text-mc-light border border-mc-light shadow-pixel"
                      >
                        Играть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-mc-dark border-2 border-mc-success shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-mc-success">145</div>
                <div className="text-mc-light/80 text-sm">Всего заданий</div>
              </CardContent>
            </Card>
            <Card className="bg-mc-dark border-2 border-mc-accent shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-mc-accent">1,234</div>
                <div className="text-mc-light/80 text-sm">Активных игроков</div>
              </CardContent>
            </Card>
            <Card className="bg-mc-dark border-2 border-mc-warning shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-mc-warning">★ 4.9</div>
                <div className="text-mc-light/80 text-sm">Рейтинг</div>
              </CardContent>
            </Card>
            <Card className="bg-mc-dark border-2 border-mc-danger shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-mc-danger">🏆 23</div>
                <div className="text-mc-light/80 text-sm">Твои достижения</div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;