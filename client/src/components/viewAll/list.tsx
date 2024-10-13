import { Button } from "@mantine/core";

type Props = {
  list: {
    _id: string;
    link: string;
    purchases: number;
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
              padding: "10px",
              border: "1px solid #ccc",
              margin: "1rem",
              borderRadius: "5px",
              maxWidth: "300px",
              textAlign: "center",
              maxHeight: "100px",
            }}
          >
            <a href={item.link} style={{ textDecoration: "none" }}>
              {item.link}
            </a>
            <p>Purchases: {item.purchases}</p>
            <Button
              style={{
                backgroundColor: "#f00",
                color: "#fff",
                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={() => deleteLink(item._id)}
            >
              X
            </Button>
            +
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
