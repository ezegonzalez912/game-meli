import { useMemo } from "react";

export const useScoreboard = (scoreboard:any, user:any) => {
  let maxScore = 0;
   const position = useMemo(() => {
      let position = 0;
      // eslint-disable-next-line array-callback-return
      if(user) {
        // eslint-disable-next-line array-callback-return
        scoreboard.map((data: any, index: number) => {
          if (data.userId === user.uid) {
            position = index + 1;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            maxScore = data.maxScore;
          }
        });
      }
      return position;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scoreboard]);

    return { position, maxScore };
};
