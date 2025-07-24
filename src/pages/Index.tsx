import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { id: 1, name: "🧩 Логические задачи", color: "bg-dusty", count: 12 },
    { id: 2, name: "🎨 Творческие задания", color: "bg-olive", count: 8 },
    { id: 3, name: "🔢 Математика", color: "bg-stone", count: 15 },
    { id: 4, name: "😊 Хорошее настроение", color: "bg-dusty", count: 20 },
    { id: 5, name: "🎭 Игры и развлечения", color: "bg-olive", count: 10 }
  ];

  const featuredTasks = [
    {
      id: 1,
      title: "Собери пиксельную картинку",
      description: "Создай красивый рисунок из блоков, как в Minecraft!",
      difficulty: "Легко",
      time: "10 мин",
      category: "🎨 Творческие",
      color: "bg-dusty"
    },
    {
      id: 2,
      title: "Математический лабиринт",
      description: "Реши примеры и найди выход из лабиринта",
      difficulty: "Средне",
      time: "15 мин", 
      category: "🔢 Математика",
      color: "bg-olive"
    },
    {
      id: 3,
      title: "Добрые дела дня",
      description: "Сделай что-то хорошее и поделись с друзьями!",
      difficulty: "Легко",
      time: "5 мин",
      category: "😊 Настроение",
      color: "bg-stone"
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal font-minecraft">
      {/* Header */}
      <header className="border-b-4 border-charcoal p-4 shadow-pixel bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#05050500]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-charcoal animate-pixel-bounce bg-[#cbadfb] rounded-full"></div>
            <h1 className="text-2xl font-bold text-[#ffffff]">улыбашка.ру</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-dusty hover:bg-dusty/80 text-charcoal border-2 border-charcoal shadow-pixel font-minecraft px-6"
            >
              Войти
            </Button>
            <Button 
              className="bg-olive hover:bg-olive/80 text-white border-2 border-charcoal shadow-pixel font-minecraft px-6"
            >
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto bg-[#ffffff00]">
        {/* Sidebar */}
        <aside className="w-80 bg-stone min-h-screen border-r-4 border-charcoal p-6 px-[30px] py-[25px] mx-0 my-0 rounded-3xl">
          <h2 className="text-xl font-bold text-charcoal mb-6 border-b-2 border-charcoal pb-2"></h2>
          <div className="space-y-4">
            {categories.map(category => (
              <Card 
                key={category.id} 
                className={`${category.color} border-2 border-charcoal shadow-pixel hover:shadow-lg transition-all cursor-pointer hover:scale-105`}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-charcoal text-sm">{category.name}</span>
                    <span className="bg-charcoal text-white px-2 py-1 rounded-pixel text-xs">
                      {category.count}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-olive border-2 border-charcoal rounded-lg shadow-pixel">
            <h3 className="font-bold text-white mb-2">🏆 Твой прогресс</h3>
            <div className="space-y-2 text-white text-sm">
              <div>Выполнено: 23 задания</div>
              <div>Очки: 1,250 ⭐</div>
              <div className="w-full bg-charcoal rounded-pixel h-2">
                <div className="bg-dusty h-2 rounded-pixel w-3/4"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-stone px-10 rounded-3xl">
          {/* Hero Section */}
          <div className="border-4 border-charcoal p-8 mb-8 shadow-pixel bg-[#9e83cbc2] rounded-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-charcoal mb-4">
                Добро пожаловать в мир заданий! 🎮
              </h1>
              <p className="text-xl text-charcoal/80 mb-6">
                Решай задачки, развивайся и поднимай настроение вместе с нами!
              </p>
              <Button 
                className="bg-olive hover:bg-olive/80 text-white border-2 border-charcoal shadow-pixel font-minecraft px-8 py-3 text-lg"
              >
                Начать приключение! 🚀
              </Button>
            </div>
          </div>

          {/* Featured Tasks */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <Icon name="Star" className="mr-2 text-olive" />
              Популярные задания
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTasks.map(task => (
                <Card 
                  key={task.id}
                  className={`${task.color} border-2 border-charcoal shadow-pixel hover:shadow-lg transition-all cursor-pointer hover:scale-105`}
                >
                  <CardHeader>
                    <CardTitle className="text-charcoal text-lg">{task.title}</CardTitle>
                    <div className="flex gap-2">
                      <span className="bg-charcoal text-white px-2 py-1 rounded-pixel text-xs">
                        {task.difficulty}
                      </span>
                      <span className="bg-charcoal text-white px-2 py-1 rounded-pixel text-xs">
                        {task.time}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-charcoal/80 text-sm mb-3">{task.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-charcoal/60">{task.category}</span>
                      <Button 
                        size="sm" 
                        className="bg-charcoal hover:bg-charcoal/80 text-white border border-charcoal shadow-pixel"
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
            <Card className="bg-olive border-2 border-charcoal shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white">145</div>
                <div className="text-white/80 text-sm">Всего заданий</div>
              </CardContent>
            </Card>
            <Card className="bg-dusty border-2 border-charcoal shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-charcoal">1,234</div>
                <div className="text-charcoal/80 text-sm">Активных игроков</div>
              </CardContent>
            </Card>
            <Card className="bg-stone border-2 border-charcoal shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-charcoal">★ 4.9</div>
                <div className="text-charcoal/80 text-sm">Рейтинг</div>
              </CardContent>
            </Card>
            <Card className="bg-olive border-2 border-charcoal shadow-pixel">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white">🏆 23</div>
                <div className="text-white/80 text-sm">Твои достижения</div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;