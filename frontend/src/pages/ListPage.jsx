import { useState } from "react";
import { useGetAllItemsQuery } from "../api/items";
import { Header } from "../components/Header/Header";
import { ItemCardList } from "../components/Items/ItemCardList";

export const ListPage = () => {
  const { data: items, isLoading, isError } = useGetAllItemsQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items
    ? items.filter((item) => item.name.toString().includes(searchQuery))
    : [];

  return (
    <>
      <Header />
      <ItemCardList
        items={items}
        filteredItems={filteredItems}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};
