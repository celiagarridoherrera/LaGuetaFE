export const ProductCardPublic = ({ title, imageUrl }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-cover"
        />
        <div className="bg-gradient-to-t from-gray-300 to-white p-4 text-center">
          <h3 className="font-primary sm:text-[1.875rem] lg:text-[3rem]">{title}</h3>
        </div>
      </div>
    );
  };
  