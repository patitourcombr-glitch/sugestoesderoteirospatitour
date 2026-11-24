import { useEffect, useState } from 'react';
import { ItineraryCategory, ItineraryItem } from '../types';
import { getDefaultItinerariesByCategory } from '../data/defaultItineraries';
import { subscribeItineraries } from '../services/itinerariesService';

export function useCategoryItineraries(category: ItineraryCategory) {
  const [items, setItems] = useState<ItineraryItem[]>(() =>
    getDefaultItinerariesByCategory(category)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeItineraries(
      (allItems, isEmptyInFirestore) => {
        if (isEmptyInFirestore) {
          setItems(getDefaultItinerariesByCategory(category));
        } else {
          setItems(allItems.filter((item) => item.category === category));
        }
        setLoading(false);
      },
      () => {
        setItems(getDefaultItinerariesByCategory(category));
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [category]);

  return { items, loading };
}
