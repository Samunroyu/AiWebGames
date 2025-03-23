// 可按分类扩展
const GAMES_DATA = {
    action: [
      {
        id: "game1",
        title: "Zombie Shooter",
        description: "Survival shooter game",
        thumbnail: "/images/action1.jpg",
        path: "/categories/action/game1.html",
        tags: ["shooter", "zombie"]
      },
      // 更多游戏...
    ],
    puzzle: [
      // 数据结构同上
    ]
  };
  
  // 按分类获取游戏
  export const getGamesByCategory = (category) => GAMES_DATA[category] || [];
  
  // 搜索功能
  export const searchGames = (keyword) => {
    return Object.values(GAMES_DATA)
      .flat()
      .filter(game => 
        game.title.toLowerCase().includes(keyword) || 
        game.tags.some(tag => tag.includes(keyword))
      );
  };