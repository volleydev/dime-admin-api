export interface Availability {
  days: number[]; // 1 - Monday, ...
  time: [string, string]; // ["8:00", "18:00"]
}

type Base = {
  userId: string;
  id: string;
  title: string;
  description: string;
};

export type User = {
  id: string;
  email: string;
};

// As saved in DB.extras
export type Extra = Base & {
  ingredients: string[];
};

// Extra in Menu Link, as saved in DB.menuExtras
export type MenuExtra = {
  menuId: string;
  extraId: string;

  price: number;
};

// As saved in DB.items
export type Item = Base & {
  ingredients: string[];
};

// Item in Menu Link, as saved in DB.menuItems
export type MenuItem = {
  menuId: string;
  itemId: string;

  extraIds: string[];
  availability: Availability[];
  price: number;
};

// As saved in DB.menus
export type Menu = Base & {
  availability: Availability[];
};
