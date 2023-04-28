import { useEffect, useState } from "react";

const ShowData = () => {
  const [data, setData] = useState([]);

  const fetcher = async () => {
    await fetch("http://localhost:5000/getinfo")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetcher();
  }, [data]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "Delete",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex justify-center lg:my-10">
      <table className="table-auto border border-dotted">
        <thead className="border bg-blue-950 text-white font-bold text-xl">
          <tr>
            <th className="lg:py-4 lg:px-4">User Name</th>
            <th className="lg:py-4 lg:px-4">Brand</th>
            <th className="lg:py-0 lg:px-4">Remove User</th>
          </tr>
        </thead>
        {data?.map((val, i) => (
          <tbody key={i} className=" border-b-2 border-dotted ">
            <tr>
              <td className="border-r-2 border-dotted lg:p-3">{val.name}</td>
              <td className="border-r-2 border-dotted lg:px-10">{val.brand}</td>
              <td className="lg:px-10">
                <button
                  onClick={() => handleDelete(val._id)}
                  className="lg:px-2 lg:py-1 bg-red-500 rounded-md text-white text-xs disabled:bg-gray-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ShowData;
