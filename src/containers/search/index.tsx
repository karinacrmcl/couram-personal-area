import React from "react";
import { Search } from "../../components/search";
import { SectionLayout } from "../../layouts/section";

export function SearchContainer() {
  return (
    <SectionLayout title="Search">
      <Search />
    </SectionLayout>
  );
}
