select count("countryId") as "totalCities",
       "countries"."name"
      from "cities"
      join "countries" using ("countryId")
      group by "countryId";
