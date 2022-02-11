import { CategoriesItem } from "./CategoriesItem";

export const Categories = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-3 sm:mx-auto my-4">
      {/* Title */}
      <div className="flex mb-3">
        <span className="text-black font-bold text-3xl">Categories</span>
      </div>
      {/* Border */}
      <div className="bg-tango h-1 w-20 mb-3"></div>

      {/* Categories */}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-3  lg:grid-cols-5">
        <CategoriesItem
          name="Apartments"
          url="/?category=apartments"
          icon="https://cdn-icons-png.flaticon.com/512/2101/2101081.png"
        />
        <CategoriesItem
          name="Rooms"
          url="/?category=rooms"
          icon="https://cdn-icons-png.flaticon.com/512/489/489874.png"
        />
        <CategoriesItem
          name="Houses"
          url="/?category=houses"
          icon="https://cdn-icons-png.flaticon.com/512/489/489874.png"
        />
        <CategoriesItem
          name="Cabins"
          url="/?category=cabins"
          icon="https://cdn-icons-png.flaticon.com/512/292/292968.png"
        />
        <CategoriesItem
          name="All Properties"
          url="/?category=all"
          icon="https://cdn-icons-png.flaticon.com/512/483/483236.png"
        />
      </div>
    </div>
  );
};
