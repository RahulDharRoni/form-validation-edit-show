import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
// import SelctTest from "./SelctTest";
const FormSection = () => {
  const [storeData, setStoreData] = useState({});
  const [existdata, setExist] = useState(false);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("brands.json")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);
  // Handle Post
  const { register, control, handleSubmit, watch } = useForm({});
  const submit = (data) => {
    const product = {
      name: data.name,
      brand: data.brand,
      agree: data.agree,
    };

    fetch("http://localhost:5000/postinfo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setStoreData(data);
          setExist(true);
          Swal.fire("Data Posted!", "Data sent to Server", "success");
        }
      });
  };
  // Watch for form data changes
  const watchFormData = watch();
  console.log(watchFormData);
  const handleUpdate = () => {
    if (existdata) {
      fetch(`http://localhost:5000/user/${storeData?.data._id}`, {
        method: "PUT",
        body: JSON.stringify(watchFormData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json) {
            Swal.fire("User Updated!", "Data updated Successful", "success");
          }
        });
    } else {
      alert("No Data Exist in Form");
    }
  };
  return (
    <div className="border-2 bg-white flex justify-center flex-col relative">
      {/* form start */}
      <form
        className=" w-80 shadow-lg p-10 rounded-md flex flex-col gap-4 max-w-3xl justify-start bg-white pb-16"
        onSubmit={handleSubmit(submit)}
      >
        <p>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </p>
        <div className="flex flex-col justify-start w-full max-w-xs">
          <label className="mb-2 flex justify-start" htmlFor="model">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name")}
            className="border p-3 rounded"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2 flex justify-start" htmlFor="brand">
            Brand
          </label>
          <select
            className="border p-3 rounded"
            name="brand"
            id="brand"
            {...register("brand")}
          >
            {datas?.map((data, i) => (
              <>
                {!data.subbrand && (
                  <option key={i} value={data.name}>
                    {data.name}
                  </option>
                )}
                {data.subbrand && (
                  <optgroup label={data.name}>
                    {data.subbrand.map((data, i) => (
                      <option key={i} value={data}>
                        {data}
                      </option>
                    ))}
                  </optgroup>
                )}
              </>
            ))}
          </select>
        </div>
        <label htmlFor="" className="flex flex-auto justify-start" name="agree">
          <Controller
            name="agree"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                id="agree"
                {...register("agree")}
                className="border m-1"
              />
            )}
          />
          Agree to terms
        </label>

        <div className="flex justify-between items-center w-full">
          {!existdata && (
            <button
              className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
      {/* edit button  */}
      <div>
        {existdata && (
          <button
            onClick={handleUpdate}
            className="absolute bottom-5 left-10 w-28 px-4 block py-3 bg-red-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormSection;
