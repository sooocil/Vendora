import { create } from 'zustand';

type Store = {
  storeId: string;
  name: string;
  address?: string;
  phone?: string;
  // Add more fields as needed
};

type StoreState = {
  stores: Store[];
  addStore: (store: Store) => void;
  removeStore: (storeId: string) => void;
  updateStore: (storeId: string, updated: Partial<Store>) => void;
  getStoreById: (storeId: string) => Store | undefined;
};

export const useStoreIdStore = create<StoreState>((set, get) => ({
  stores: [
    { storeId: '1', name: 'Bunk.clo', address: '123 Main St', phone: '555-1234' },
    { storeId: '2', name: 'Freaky.clo', address: '456 Side Ave', phone: '555-5678' },
    // Add more dummy stores if needed
  ],
  addStore: (store) =>
    set((state) => ({
      stores: [...state.stores, store],
    })),
  removeStore: (storeId) =>
    set((state) => ({
      stores: state.stores.filter((s) => s.storeId !== storeId),
    })),
  updateStore: (storeId, updated) =>
    set((state) => ({
      stores: state.stores.map((s) =>
        s.storeId === storeId ? { ...s, ...updated } : s
      ),
    })),
  getStoreById: (storeId) => get().stores.find((s) => s.storeId === storeId),
}));