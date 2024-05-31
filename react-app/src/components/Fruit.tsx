import { useState } from "react";

type ProductType = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
};

function ProductRow({product}: {product: ProductType}) {
    const name = product.stocked ? product.name : <span style={{color:"red"}} >{product.name}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductCategoryRow({ category }: { category: string }) {
    return (
        <tr>
            <th>{category}</th>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }: { products: Array<ProductType>, filterText: string, inStockOnly: boolean }) {
    const rows: JSX.Element[] = [];
    let lastCategory: string | null = null;
    products.forEach((product) => {
        if (product.category != lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} />);
        }
        if ((inStockOnly && product.stocked) || !inStockOnly) {
            rows.push(<ProductRow product={product} key={product.name} />);
        }

        lastCategory = product.category;
    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } : { filterText: string, inStockOnly: boolean, onFilterTextChange:React.Dispatch<React.SetStateAction<string>>, onInStockOnlyChange:React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div>
            <form action="">
                <input
                    type="text"
                    value={filterText}
                    placeholder="Search Product"
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <label>
                    <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                    {}Only show products in stock
                </label>
            </form>
        </div>
    );
}

function FilterableProductTable({ products }: { products: Array<ProductType> }) {
    const [filterText, changeFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={changeFilterText} onInStockOnlyChange={setInStockOnly} />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}

const PRODUCTS: Array<ProductType> = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function FruitsTable() {
    return <FilterableProductTable products={PRODUCTS} />;
}
