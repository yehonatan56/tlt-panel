type Props = {
  list: {
    link: string;
    purchases: number;
  }[];
};
const List = ({ list }: Props) => {
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
        {list.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              margin: "1rem",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            <a href={item.link} style={{ textDecoration: "none" }}>
              {item.link}
            </a>
            <p>Purchases: {item.purchases}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
