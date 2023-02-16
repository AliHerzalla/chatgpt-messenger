"use client";
import useSWR from "swr";
import Select from "react-select";
import { useState } from "react";

const ModelSelection = () => {
  const fitchModels = () =>
    fetch("/api/getEngines")
      .then((res) => res.json())
      .catch((error) => console.log(error));

  const {
    data: models,
    error,
    isLoading,
  } = useSWR("/api/getEngines", fitchModels);

  const { data: model, mutate: setModel } = useSWR("getModels", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        options={models?.modelOptions!}
        defaultValue={model}
        placeholder={model}
        isSearchable={true}
        isLoading={isLoading}
        menuPosition={"fixed"}
        classNames={{
          control: (props) => "bg-[#434654] border-[#434654] mt-2",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
