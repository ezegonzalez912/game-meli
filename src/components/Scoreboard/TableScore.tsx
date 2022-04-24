import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useMemo } from "react";
import { db } from "../../context/firebase/config";
import { firebaseContext } from "../../context/firebase/firebaseContext";
import { scoreboardContext } from "../../context/scoreboard";

const namespace = "scoreboard";

interface Props {
  filters: any;
}

export const TableScore:React.FC<Props> = ({filters}) => {
  const { scoreboard, setScoreboard } = useContext(scoreboardContext);
  const { user } = useContext(firebaseContext);

  useEffect(() => {
    const getCities = async (db: any) => {
      const data = await getDocs(collection(db, "data"));
      const dataList = data.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      const sortedList = dataList.sort((a: any, b: any) =>
        a.maxScore >= b.maxScore ? -1 : 1
      );
      setScoreboard(sortedList);
    };
    getCities(db);
    // eslint-disable-next-line
  }, []);

  const sortedScoreboard = useMemo(() => {
    let sortedList = scoreboard;
    if(filters.country !== "all") {
      sortedList = sortedList.filter((data: any) => data.country.id === filters.country);
    }
    if(filters.category !== "all") {
      sortedList = sortedList.filter((data: any) => {
        let categoryList = [];
        categoryList = data.categories.filter((category: any) => category.id === filters.category);
        return categoryList.length > 0;
      });
    }
    return sortedList;
  }, [scoreboard, filters]);

  return (
    <main className={`${namespace}-table`}>
      <ul>
        {sortedScoreboard.map(
          (
            { userId, username, maxScore, country, categories }: any,
            index: number
          ) => (
            <li key={userId} className={userId === user?.uid ? `table-active` : ""}>
              <div className={`${namespace}-left-data`}>
                <p>
                  {index + 1}. {username}
                </p>
                <b>{maxScore} puntos</b>
              </div>
              <div className={`${namespace}-right-data`}>
                <p>{country.name}</p>
                {categories.map((category: any) => (
                  <p key={category.id}>{category.name}</p>
                ))}
              </div>
            </li>
          )
        )}
      </ul>
    </main>
  );
};
