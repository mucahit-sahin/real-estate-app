import { Link } from "react-router-dom";

export const RecentSearchLocationItem = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  return (
    <Link to={url} className="bg-black bg-opacity-20 p-2 rounded text-center">
      <span>{name}</span>
    </Link>
  );
};
