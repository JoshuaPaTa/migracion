import productos from "../../data/datos";
import ProductCard from "./ProductCard";

function ProductsList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {productos.map((prod, index) => (
                <ProductCard key={index} producto={prod} />
            ))}
        </div>
    );
}

export default ProductsList;