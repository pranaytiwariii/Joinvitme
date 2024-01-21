import React from "react";
import BookExp from "../Components/bookExperience/BookExp";
import HikeCard from "../Components/bookExperience/HikeCard";
import Query from "../Components/bookExperience/Query";
import Scroll from "../Components/Scroll";

export default function Book_Experience() {
  return (
    <div>
      <BookExp />
      <HikeCard />
      <Scroll />
      <Query />
    </div>
  );
}
