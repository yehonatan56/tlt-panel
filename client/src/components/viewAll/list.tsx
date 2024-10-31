import { useState } from "react";
import { Button } from "@mantine/core";
import Edit from "./edit";
import fallbackImage from "../../assets/logo.png";

interface Props {
  list: {
    _id: string;
    link: string;
    purchases: number;
    image: string;
  }[];
  deleteLink: (id: string) => void;
}

interface Item {
  isEditing: boolean;
  _id: string;
  link: string;
  purchases: number;
  image: string;
}

const baseItem: Item = {
  isEditing: false,
  _id: "",
  link: "",
  purchases: 0,
  image: "",
};

const List = ({ list, deleteLink }: Props) => {
  const [itemState, setItem] = useState<Item>(baseItem);

  const openModal = (item: Item) => setItem({ ...item, isEditing: true });
  const closeModal = () => setItem(baseItem);

  return (
    <div>
      {itemState.isEditing && (
        <Edit
          id={itemState._id}
          defaultLink={itemState.link}
          reset={closeModal}
          opened={itemState.isEditing}
          onClose={closeModal}
        />
      )}
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
        {list.map((item) => (
          <li
            key={item._id}
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
              src={item.image || fallbackImage}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "5px",
                margin: "10px",
              }}
              alt="link"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
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
              <Button
                style={{
                  backgroundColor: "blue",
                  opacity: 0.8,
                  color: "#fff",
                  borderRadius: "5px",
                  padding: "10px",
                  marginLeft: "10px",
                }}
                onClick={() => openModal({ ...item, isEditing: true })}
              >
                E
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
