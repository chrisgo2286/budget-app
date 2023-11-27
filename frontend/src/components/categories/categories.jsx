import CategoryItem from "./categoryItem"
import categoryItem from "./categoryItem"

export default function Categories ({ categories }) {
    return (
        <div className="categories">
            { categories.map((category) => (
                <CategoryItem key={ category.id } category={ category } />
            ))}
        </div>
    )
}