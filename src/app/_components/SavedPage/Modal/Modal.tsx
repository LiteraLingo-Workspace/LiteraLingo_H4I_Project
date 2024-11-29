import styles from "./Modal.module.css";
import React from "react";
import { Item } from "./Item";
import { api } from "~/trpc/react";
import { getServerAuthSession } from "~/server/auth";

interface Fav {
  id: number,
  type: string,
  text: string,
}

export const Modal: React.FC = async () => {

  const session = await getServerAuthSession();
  const items: Fav[] = [];
  
  if (session) {
    const { data: favorites, isLoading, isError } = api.user.getUserHistoryFavorites.useQuery({
      userId: session.user.id,
    });

    const items = (favorites || []).map((favorite) => ({
      id: favorite.id,
      type: "temp",
      text: favorite.textEntered,
    }));
  }
  
  return (
    <div className={styles.savedPage}>
      <div className={styles.savedItems}>
        {items.map((item, index) => (
          <Item key={index} id={item.id} type={item.type} text={item.text} />
        ))}
      </div>
    </div>
  );
};
export default Modal;