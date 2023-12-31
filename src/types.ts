export type ChildrenProviderProps = {
  children: React.ReactNode;
};

export type MenuContextType = {
  open: boolean;
  toggleMenu: () => void;
};

export type VantaEffectType = {
  destroy: () => void;
};
