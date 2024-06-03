import React from "react";

import Card from "./Card";
import ListSkeleton from "./ListSkeleton";

export default function List() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://www.reddit.com/r/reactjs.json");

        if (!response.ok) {
          throw new Error("HTTP Error " + response.status);
        }

        const json = await response.json();
        setItems(json.data.children);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (error)
    return (
      <div className="text-3xl text-red-500 min-h-screen text-center">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#131313] text-white">
      <div className="max-w-[1280px] mx-auto p-4">
        {loading ? (
          <ListSkeleton />
        ) : items.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Card item={item} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="text-3xl text-center">No items to show!</div>
        )}
      </div>
    </div>
  );
}
