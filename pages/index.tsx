import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "@store/actions/counter";
import { getUsers } from "@store/actions/users";
import Examples from "@components/Examples";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
      <hr />
      <Link href="/users">
        <a>users</a>
      </Link>

      <div>
        <Link href="/home">
          <a>home</a>
        </Link>
      </div>
    </>
  );
};

export default Index;
