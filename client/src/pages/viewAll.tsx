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
    <div>
      <h1>View All</h1>
      <Filters filters={filter} setFilters={setFilter} />
      <List list={data} />
      <Pagination
        total={total}
        page={filter.page}
        onChange={() => setFilter({ ...filter, page: filter.page + 1 })}
      />
    </div>
  );
};
export default ViewAll;
