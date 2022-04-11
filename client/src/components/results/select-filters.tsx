import react, { Key, useState } from "react";
import { Dropdown } from "../../shared/components/dropdown";
import { FilterRange } from "../../shared/components/range";

export type FilterItem = {
  searchKey: string;
  id: Key | null | undefined;
  minValue: number;
  maxValue: number;
  startValue: number;
  endValue: number;
  step: number;
  unit: string;
  icon: string;
};

type FilterOptions = {
  item: FilterItem;
  onUpdate: (key: string, values: number[]) => void;
};

export function SelectFilters({ item, onUpdate }: FilterOptions) {
  const [values, setValues] = useState([item.startValue, item.endValue]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleSetValues(items: number[]) {
    setValues(items);
  }

  function handleOpen() {
    setIsDropdownOpen(!isDropdownOpen);
    onUpdate(item.searchKey, values);
  }

  return (
    <Dropdown
      preview={values}
      isOpen={isDropdownOpen}
      handleOpen={handleOpen}
      unit={item.unit}
      icon={item.icon}
    >
      <FilterRange
        minValue={item.minValue}
        maxValue={item.maxValue}
        defValues={values}
        setNewValues={handleSetValues}
        step={item.step}
      />
    </Dropdown>
  );
}
