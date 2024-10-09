import { useEffect, useState } from "react";
import { getLinksRequest, getPagesRequest } from "../requests/links.ts";
import List from "../components/viewAll/list.tsx";
import { Pagination } from "@mantine/core";
import Filters from "../components/viewAll/filters.tsx";

const ViewAll = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ page: 1 });
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
    getLinksRequest(filter).then((data) => {
      setData(data);
    });
  }, [filter]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>View All</h1>
      {/*@ts-ignore*/}
      <Filters filters={filter} setFilters={setFilter} />
      <List list={data} />
      (
      <Pagination
        total={total}
        value={filter.page}
        onChange={(page) => setFilter({ ...filter, page })}
      />
      )
    </div>
  );
};
export default ViewAll;
