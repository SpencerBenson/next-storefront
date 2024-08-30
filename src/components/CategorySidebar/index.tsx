import  { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineDoubleRight } from "react-icons/ai";

function CategorySidebar() {
  const [categories, setCategories] = useState<string[]>([]);
  const { categoryname } = useParams<{ categoryname: string }>();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get<string[]>(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <aside className="px-6">
      <div>
        <h3 className="font-semibold text-2xl mb-16">Categories</h3>
        <div className="flex space-y-4 flex-col">
          {categories.map((category, index) => (
            <Link
              to={`/products/category/${category}`}
              key={index}
              className={`${
                category === categoryname
                  ? " space-x-1 flex items-center text-gray-900 font-medium"
                  : "text-gray-400 opacity-90 hover:text-gray-900 hover:opacity-100"
              }`}
            >
              {category === categoryname ? <AiOutlineDoubleRight /> : ""}
              <span>{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default CategorySidebar;
