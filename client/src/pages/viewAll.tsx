import { useEffect, useState } from "react";
import { getLinksRequest, getPagesRequest } from "../requests/links.ts";
import List from "../components/viewAll/list.tsx";
import { Pagination } from "@mantine/core";

const ViewAll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getLinksRequest({}).then((data) => {
      setData(data);
    });
    getPagesRequest().then((data) => {
      setTotal(data);
    });
  }, []);

  useEffect(() => {
    console.log(page);
    getLinksRequest({ page }).then((data) => {
      setData(data);
    });
  }, [page]);

  return (
    <div>
      <h1>View All</h1>
      <List list={data} />
      <Pagination
        total={total}
        page={page}
        onChange={() => setPage((prevState) => prevState + 1)}
      />
    </div>
  );
};
export default ViewAll;
