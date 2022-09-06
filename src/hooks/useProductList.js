import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useProductList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  // const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const db = getDatabase();
      const productRef = ref(db, "products"); // videos== key name in database
      const productQuery = query(
        productRef,
        orderByKey()
      );
      try {
        setError(false);
        setLoading(false);
        const snapshot = await get(productQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setProducts((products) => {
            return [...snapshot.val()];
          });
        } else {
          // sethasMore(false);
        }
        
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }
    fetchProducts();
  }, []);
  return {
    loading,
    error,
    products,
  };
}
