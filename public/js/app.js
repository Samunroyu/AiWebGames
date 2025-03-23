import { getGamesByCategory, searchGames } from './games.js';

// 初始化分类导航
function loadCategories() {
  const nav = document.getElementById('categories');
  const categories = Object.keys(GAMES_DATA);
  
  categories.forEach(cat => {
    const button = document.createElement('button');
    button.className = 'bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg';
    button.textContent = cat.toUpperCase();
    button.dataset.category = cat;
    button.addEventListener('click', () => loadGames(cat));
    nav.appendChild(button);
  });
}

// 加载游戏卡片
function loadGames(category) {
  const container = document.getElementById('gameGrid');
  container.innerHTML = '';
  
  getGamesByCategory(category).forEach(game => {
    const card = `
      <div class="bg-gray-800 rounded-lg overflow-hidden">
        <img src="${game.thumbnail}" 
             alt="${game.title}" 
             class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl mb-2">${game.title}</h3>
          <p class="text-gray-400 mb-4">${game.description}</p>
          <a href="${game.path}" 
             class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg block text-center">
            Play Now
          </a>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
  });
}

// 搜索功能
document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const keyword = document.getElementById('gameSearch').value.toLowerCase();
  const results = searchGames(keyword);
  // 类似 loadGames 的逻辑展示结果
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadCategories();
  loadGames('action'); // 默认加载第一个分类
});