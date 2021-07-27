import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react";
import useGlobalStore from "../../hooks/useGlobalStore";
import Link from "next/link";
import Head from "next/head";
import HomeLayout from "../../components/layouts/home";
import Store from "./store";

const FirsePost = observer((props) => {
  const store = useLocalObservable(() => Store({ list: props.list }));

  const UserStore = useGlobalStore("User");

  console.log(UserStore);

  useEffect(() => {
    setTimeout(() => {
      UserStore?.setUserInfo({ name: "11111111" });
    }, [1000]);
  }, []);

  return (
    <HomeLayout>
      <Link href="/">
        <h1>back home</h1>
      </Link>
      <Head>
        <title>First post</title>
      </Head>

      <h1>username : {UserStore?.userInfo?.name}</h1>
      <div>
        {store.list?.map((i, k) => {
          return <h1 key={k}>{i}</h1>;
        })}
      </div>
    </HomeLayout>
  );
});

export async function getServerSideProps() {
  const res = await new Promise((r) => {
    setTimeout(() => {
      r([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 1000);
  });
  return {
    props: {
      list: res,
    },
  };
}

export default FirsePost;
