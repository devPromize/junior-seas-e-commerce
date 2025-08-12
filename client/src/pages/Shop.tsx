// // src/pages/ShopPage.tsx
// import { useState, useEffect } from "react";
// import { useProducts } from "../hooks/useProducts";
// import ProductCard from "../ui/components/ProductCard";
// import FilterSidebar from "../ui/components/FilterSidebar";
// import SortDropdown from "../ui/components/SortDropdown";

// interface FilterState {
//   priceRange: [number, number];
//   category: string;
//   ram?: string;
//   rom?: string;
// }

// export default function ShopPage() {
//   const [filters, setFilters] = useState<FilterState>({
//     priceRange: [0, 10000],
//     category: "",
//   });

//   const [sortBy, setSortBy] = useState<string>("latest");
//   const { data: products = [], isLoading } = useProducts(filters);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
//       <FilterSidebar filters={filters} setFilters={setFilters} />

//       <div className="col-span-3">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">All Products</h2>
//           <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
//         </div>

//         {isLoading ? (
//           <p>Loading products...</p>
//         ) : products.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useProducts } from "../hooks/useProducts";
// import { Product } from "../../type";
// import FilterSidebar from "../ui/components/FilterSidebar";
// import SortDropdown from "../ui/components/SortDropdown";
// import ProductCard from "../ui/components/ProductCard";

// interface FiltersState {
//   category: string;
//   priceRange: [number, number];
//   ram: string;
//   rom: string;
//   sort: string;
// }

// const Shop = () => {
//   const [filters, setFilters] = useState<FiltersState>({
//     category: "",
//     priceRange: [0, 1000],
//     ram: "",
//     rom: "",
//     sort: "latest",
//   });

//   const { data: products = [], isLoading } = useProducts(filters);

//   const handleSortChange = (sortValue: string) => {
//     setFilters((prev) => ({ ...prev, sort: sortValue }));
//   };

//   const handleFilterChange = (newFilters: Partial<typeof filters>) => {
//     setFilters((prev) => ({ ...prev, ...newFilters }));
//   };

//   return (
//     <div className="flex gap-6">
//       {/* Sidebar */}
//       <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

//       {/* Main content */}
//       <div className="flex-1">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">All Products</h2>
//           <SortDropdown sortBy={filters.sort} onSortChange={handleSortChange} />
//         </div>

//         {isLoading ? (
//           <p>Loading products...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {products.map((product: Product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;









// import { useState } from "react";
// import { useProducts } from "../hooks/useProducts";
// import { Product } from "../../type";
// import FilterSidebar from "../ui/components/FilterSidebar";
// import SortDropdown from "../ui/components/SortDropdown";
// import ProductCard from "../ui/components/ProductCard";
// import Pagination from "../ui/components/Pagination";

// const Shop = () => {
//   const [filters, setFilters] = useState({
//     category: "",
//     priceRange: [0, 1000] as [number, number],
//     ram: "",
//     rom: "",
//     sort: "latest",
//   });

//   const [page, setPage] = useState(1);
//   const { data, isLoading } = useProducts({ ...filters, page });
//   const products = data?.products || [];
//   const totalPages = data?.totalPages || 1;

//   const handleSortChange = (sortValue: string) => {
//     setFilters((prev) => ({ ...prev, sort: sortValue }));
//   };

//   const handleFilterChange = (newFilters: Partial<typeof filters>) => {
//     setFilters((prev) => ({ ...prev, ...newFilters }));
//     setPage(1); // Reset to first page on filter change
//   };

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   return (
//     <div className="flex gap-6">
//       {/* Sidebar */}
//       <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

//       {/* Main content */}
//       <div className="flex-1">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">All Products</h2>
//           <SortDropdown sortBy={filters.sort} onSortChange={handleSortChange} />
//         </div>

//         {isLoading ? (
//           <p>Loading products...</p>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {products.map((product: Product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//             </div>
//             <div className="mt-6 flex justify-center">
//               <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;



import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../../type";
import FilterSidebar from "../ui/components/FilterSidebar";
import SortDropdown from "../ui/components/SortDropdown";
import ProductCard from "../ui/components/ProductCard";
import Pagination from "../ui/components/Pagination";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000] as [number, number],
    ram: "",
    rom: "",
    sort: "latest",
    page: 1,
    limit: 9,
  });

  const { data, isLoading } = useProducts(filters);
  const products: Product[] = data?.products || [];
  const totalPages = data?.totalPages || 1;

  const handleSortChange = (sortValue: string) => {
    setFilters((prev) => ({ ...prev, sort: sortValue, page: 1 }));
  };

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };


  
  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

      {/* Main content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Products</h2>
          <SortDropdown sortBy={filters.sort} onSortChange={handleSortChange} />
        </div>

        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="mt-8">
              <Pagination
                currentPage={filters.page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
