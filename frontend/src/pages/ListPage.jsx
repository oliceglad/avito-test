import { useState } from "react";
import { useGetAllItemsQuery } from "../api/items";
import { Header } from "../components/Header/Header";
import { ItemCardList } from "../components/Items/ItemCardList";
import { Pagination } from "../components/UI/Pagination";
import { SearchInput } from "../components/UI/SearchInput";
import { CategoryTabs } from "../components/UI/CategoryTabs";
import { ITEMS_PER_PAGE } from "../utils/variables";

export const ListPage = () => {
  const { data: items, isLoading, isError } = useGetAllItemsQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Все");
  const [page, setPage] = useState(1);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const filteredItems = items
    ? items.filter(
        (item) =>
          (searchQuery.length < 3 ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
          (category === "Все" || item.type === category)
      )
    : [];

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <Header />
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CategoryTabs value={category} onChange={handleCategoryChange} />
      <ItemCardList
        items={paginatedItems}
        isLoading={isLoading}
        isError={isError}
      />
      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </>
  );
};
