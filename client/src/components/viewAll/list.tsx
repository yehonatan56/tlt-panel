import { Button } from "@mantine/core";
import fallbackImage from "../../assets/logo.png";

type Props = {
  list: {
    _id: string;
    link: string;
    purchases: number;
    image: string;
  }[];
  deleteLink: (id: string) => void;
};
const List = ({ list, deleteLink }: Props) => {
  // @ts-ignore
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list.length === 0 && <p>No links found</p>}
        {list.map((item, index) => (
          <li
            key={index}
            style={{
              position: "relative",
              padding: "10px",
              border: "1px solid #ccc",
              margin: "1rem",
              borderRadius: "5px",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <a href={item.link} style={{ textDecoration: "none" }}>
              {item.link}
            </a>
            <p>Purchases: {item.purchases}</p>
            <img
              src={
                item.image.includes("undefined") ? fallbackImage : item.image
              }
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "5px",
                margin: "10px",
              }}
              alt="link"
            />
            <br />
            <Button
              style={{
                backgroundColor: "red",
                opacity: 0.8,
                color: "#fff",
                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={() => deleteLink(item._id)}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
