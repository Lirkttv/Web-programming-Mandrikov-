/* ═══════════════════════════════════════════════════
   КАТАЛОГ ТОВАРОВ — ЛАБОРАТОРНАЯ №6
   ═══════════════════════════════════════════════════ */

// === ЭТАП 1: МАССИВ ИЗ 15 ОБЪЕКТОВ ===
const servicesCatalog = [
    { id: 1, name: "Разработка логотипа", category: "branding", price: 45000, rating: 5, image: "images/c1.jpg", description: "Уникальный логотип, который выделит ваш бренд среди конкурентов. 3 концепции на выбор." },
    { id: 2, name: "Фирменный стиль", category: "branding", price: 85000, rating: 5, image: "images/c2.jpg", description: "Полный брендбук: цвета, шрифты, паттерны, правила использования айдентики." },
    { id: 3, name: "Дизайн лендинга", category: "web", price: 55000, rating: 5, image: "images/c3.jpg", description: "Продающий одностраничник с продуманной структурой и высокой конверсией." },
    { id: 4, name: "Многостраничный сайт", category: "web", price: 120000, rating: 4, image: "images/c4.jpg", description: "Корпоративный сайт до 10 страниц с адаптивной вёрсткой и CMS." },
    { id: 5, name: "UI/UX дизайн приложения", category: "web", price: 95000, rating: 5, image: "images/c5.jpg", description: "Проектирование интерфейсов для мобильных и веб-приложений с фокусом на пользователя." },
    { id: 6, name: "Веб-разработка", category: "development", price: 150000, rating: 5, image: "images/c6.jpg", description: "Вёрстка и программирование сайта на React/Webflow с оптимизацией скорости." },
    { id: 7, name: "Интернет-магазин", category: "development", price: 180000, rating: 4, image: "images/c7.jpg", description: "Полноценный e-commerce проект с каталогом, корзиной и онлайн-оплатой." },
    { id: 8, name: "Анимация интерфейсов", category: "development", price: 45000, rating: 5, image: "images/c8.jpg", description: "Микроанимации, переходы и интерактивные элементы для улучшения UX." },
    { id: 9, name: "Иллюстрации для бренда", category: "branding", price: 35000, rating: 4, image: "images/c9.jpg", description: "Уникальные иллюстрации в фирменном стиле для сайта, соцсетей и презентаций." },
    { id: 10, name: "Презентации и питч-деки", category: "branding", price: 40000, rating: 5, image: "images/c10.jpg", description: "Эффектные презентации для инвесторов, клиентов и внутренних встреч." },
    { id: 11, name: "SMM и контент", category: "marketing", price: 35000, rating: 4, image: "images/c11.jpg", description: "Оформление соцсетей, создание контента и ведение аккаунтов." },
    { id: 12, name: "SEO-оптимизация", category: "marketing", price: 30000, rating: 4, image: "images/c12.jpg", description: "Продвижение сайта в топ Google и Яндекс. Технический аудит и оптимизация." },
    { id: 13, name: "Редизайн сайта", category: "web", price: 75000, rating: 5, image: "images/c13.jpg", description: "Обновление устаревшего дизайна с сохранением SEO-позиций и улучшением UX." },
    { id: 14, name: "Брендинг упаковки", category: "branding", price: 65000, rating: 5, image: "images/c14.jpg", description: "Дизайн упаковки, который продаёт на полке и создаёт эмоциональную связь." },
    { id: 15, name: "Дизайн-консалтинг", category: "consulting", price: 15000, rating: 4, image: "images/c15.jpg", description: "Часовая консультация по дизайну, брендингу или UX вашего проекта." }
  ];
  
  // Глобальные переменные
  let currentProducts = [...servicesCatalog];
  let activeCategory = 'all';
  let activeMethod = null;
  
  // === ФУНКЦИЯ ОТРИСОВКИ КАРТОЧЕК ===
  function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (products.length === 0) {
      noResults.style.display = 'block';
      return;
    }
    noResults.style.display = 'none';
    
    products.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22200%22 viewBox=%220 0 280 200%22%3E%3Crect fill=%22%231a1a1a%22 width=%22280%22 height=%22200%22/%3E%3Ctext fill=%22%23444%22 font-family=%22sans-serif%22 font-size=%2214%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22>No Image</text%3E%3C/svg%3E'">
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-meta">
            <span class="product-price">${product.price.toLocaleString('ru-RU')} ₽</span>
            <span class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  // === ФУНКЦИЯ ОБНОВЛЕНИЯ КАТАЛОГА ===
  function updateCatalog() {
    let result = [...servicesCatalog];
    
    // Фильтр по категории
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Поиск
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Сортировка
    const sortBy = document.getElementById('sortSelect')?.value || 'default';
    switch(sortBy) {
      case 'price-asc': result.sort((a,b) => a.price - b.price); break;
      case 'price-desc': result.sort((a,b) => b.price - a.price); break;
      case 'name-asc': result.sort((a,b) => a.name.localeCompare(b.name, 'ru')); break;
      case 'name-desc': result.sort((a,b) => b.name.localeCompare(a.name, 'ru')); break;
      case 'rating-desc': result.sort((a,b) => b.rating - a.rating); break;
    }
    
    // Применение метода массива
    if (activeMethod) {
      result = applyArrayMethod(result, activeMethod);
    }
    
    renderProducts(result);
  }
  
  // === ЭТАП 2: 10 МЕТОДОВ МАССИВОВ ===
  function applyArrayMethod(arr, method) {
    switch(method) {
      case 'filter-premium':
        return arr.filter(p => p.rating === 5);
        
      case 'map-names':
        return arr.map(p => ({...p, name: `${p.name} — ${p.price}₽`, description: '✨ Premium выбор'}));
        
      case 'sort-cheapest':
        return [...arr].sort((a,b) => a.price - b.price).slice(0, 7);
        
      case 'reduce-total':
        const avg = arr.reduce((sum, p) => sum + p.price, 0) / arr.length;
        return arr.filter(p => p.price < avg);
        
      case 'find-fast':
        const web = arr.find(p => p.category === 'web');
        return web ? arr.filter(p => p.category === web.category) : arr;
        
      case 'some-highrate':
        return arr.some(p => p.rating === 5) ? arr.filter(p => p.rating === 5) : arr;
        
      case 'every-hasimg':
        return arr.every(p => p.image) ? arr : [];
        
      case 'slice-first5':
        return arr.slice(0, 5);
        
      case 'concat-new':
        return arr.concat([
          { id: 999, name: "🎁 БОНУС: Аудит сайта", category: "consulting", price: 0, rating: 5, image: "images/c1.jpg", description: "Бесплатный экспресс-аудит при заказе любой услуги!" },
          { id: 998, name: "🚀 СТАРТ: Пакет новичка", category: "branding", price: 19900, rating: 4, image: "images/c2.jpg", description: "Логотип + визитка + гайдлайн по минимальной цене." }
        ]);
        
      case 'reset':
        activeMethod = null;
        return arr;
        
      default: return arr;
    }
  }
  
  // === ИНИЦИАЛИЗАЦИЯ КАТАЛОГА ===
  function initCatalog() {
    if (!document.getElementById('productsGrid')) return;
    
    renderProducts(currentProducts);
    
    // Поиск
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        activeMethod = null;
        updateCatalog();
      });
    }
    
    // Сортировка
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        activeMethod = null;
        updateCatalog();
      });
    }
    
    // Категории
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
          categoryFilter.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');
          activeCategory = e.target.dataset.category;
          activeMethod = null;
          updateCatalog();
        }
      });
    }
    
    // Кнопки методов
    document.querySelectorAll('.method-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        activeMethod = btn.dataset.method;
        updateCatalog();
        
        if (activeMethod === 'reduce-total') {
          const avg = servicesCatalog.reduce((sum, p) => sum + p.price, 0) / servicesCatalog.length;
          setTimeout(() => alert(`💡 Средняя цена услуг: ${Math.round(avg).toLocaleString('ru-RU')} ₽\nПоказаны услуги ниже среднего`), 100);
        }
      });
    });
  }
  
  // Запуск после загрузки DOM
  document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
  });