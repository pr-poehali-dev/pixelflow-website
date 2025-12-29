import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/PixelFlow.png" 
                alt="PixelFlow" 
                className="h-14 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('team')} className="text-muted-foreground hover:text-primary transition-colors">
                Команда
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Создаем цифровые<br />решения будущего
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Веб-студия PixelFlow — ваш партнер в создании современных сайтов, которые работают на результат
            </p>
            <Button 
              size="lg" 
              className="font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection('contacts')}
            >
              Начать проект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-muted-foreground">
              Комплексные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name="Palette" size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Веб-дизайн</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Создаем уникальный и современный дизайн, который отражает философию вашего бренда и привлекает целевую аудиторию
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name="Code2" size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">Разработка сайтов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Разрабатываем быстрые и надежные сайты с использованием современных технологий и лучших практик индустрии
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name="TrendingUp" size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">SEO-оптимизация</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Продвигаем ваш сайт в топ поисковых систем, увеличиваем органический трафик и привлекаем новых клиентов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-muted-foreground">
              Профессионалы, которые создают ваш успех
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2ca8b8da-bdde-4bb5-b2c9-16fb0ec73d8c/files/0f461bf5-d8c3-43be-aba4-dc6b5e8fa00f.jpg" 
                  alt="Анна Иванова"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="font-heading font-bold text-xl mb-1">Анна Иванова</h3>
                <p className="text-primary font-semibold mb-3">Веб-дизайнер</p>
                <p className="text-sm text-muted-foreground">
                  7 лет опыта в создании UI/UX дизайна. Работала с крупными брендами и стартапами
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2ca8b8da-bdde-4bb5-b2c9-16fb0ec73d8c/files/082d3682-5fae-4a52-9512-d0d18ac74ed3.jpg" 
                  alt="Михаил Петров"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="font-heading font-bold text-xl mb-1">Михаил Петров</h3>
                <p className="text-primary font-semibold mb-3">Fullstack разработчик</p>
                <p className="text-sm text-muted-foreground">
                  10+ лет в разработке. Эксперт по React, Node.js и современным веб-технологиям
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/2ca8b8da-bdde-4bb5-b2c9-16fb0ec73d8c/files/1f1b8cd7-2bf8-4609-954a-576859f6f7f7.jpg" 
                  alt="Дмитрий Соколов"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="font-heading font-bold text-xl mb-1">Дмитрий Соколов</h3>
                <p className="text-primary font-semibold mb-3">SEO-специалист</p>
                <p className="text-sm text-muted-foreground">
                  5 лет успешного продвижения сайтов. Увеличил трафик клиентов в среднем на 300%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовы обсудить ваш проект? Мы на связи!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15, офис 301</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">info@pixelflow.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </Card>

              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Aabc123&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  title="Карта"
                />
              </div>
            </div>

            <Card className="p-8">
              <h3 className="font-heading font-bold text-2xl mb-6">Форма обратной связи</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/PixelFlow.png" 
                alt="PixelFlow" 
                className="h-14 w-auto mix-blend-lighten"
              />
            </div>
            <p className="text-white/70">© 2024 PixelFlow. Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;