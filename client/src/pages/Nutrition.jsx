import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import "../App.css";
import Spinner from "../components/Spinner";

const importantNutrients = [
  "Protein",
  "Carbohydrate",
  "Total lipid (fat)",
  "Energy",
  "Sucrose",
  "Glucose",
  "Maltose",
  "Calcium",
  "Potassium",
  "Vitamin",
  "Fatty acids",
  "Cholesterol",
  "Vitamin A",
  "Vitamin B-12",
  "Vitamin B-6",
];

function Nutrition() {
  const [query, setQuery] = useState("");
  const [finalQuery, setFinalQuery] = useState("");
  const [container, setContainer] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (finalQuery) => {
    const url = `https://food-nutrition-information.p.rapidapi.com/foods/search?query=${finalQuery}&pageSize=1&pageNumber=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "food-nutrition-information.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.foods[0].foodNutrients);
      if (result.foods && result.foods[0]) {
        setContainer(result.foods[0].foodNutrients);
        if (result.foods[0].foodNutrients) {
          setLoading(false);
        } else {
          setContainer([]);
        }
      } else {
        console.error("No foods found");
        setContainer([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (finalQuery) {
      fetchData(finalQuery);
    }
  }, [finalQuery]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setFinalQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto py-10">
      <h1 className="text-center text-4xl font-bold my-5">Check your Meals</h1>
      <div className=" justify-center">
        <form className="flex justify-center gap-4" onSubmit={onSubmitHandler}>
          <div className="">
            <TextField
              type="text"
              placeholder="Enter meal name"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <div className="mt-2">
            <Button onClick={onSubmitHandler} variant="contained" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center">
          {finalQuery && (
            <Card className="my-4 px-[10%] ">
              <CardContent>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <p className="text-lg font-semibold">Nutrient</p>
                        </TableCell>
                        <TableCell align="right">
                          <p className="text-lg font-semibold">Value</p>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {container &&
                        container.map(
                          (item) =>
                            importantNutrients.includes(
                              item.nutrientName.split(",")[0]
                            ) &&
                            item.value > 0 && (
                              <TableRow key={item.nutrientId}>
                                <TableCell component="th" scope="row">
                                  {item.nutrientName}
                                </TableCell>
                                <TableCell align="right">
                                  {item.value} {item.unitName.toLowerCase()}
                                </TableCell>
                              </TableRow>
                            )
                        )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

export default Nutrition;
