"use client";
import { contactsData, ICategoryType } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactNode } from "react";
import styles from "../home.module.css";
import { IconAndTextUrl, IconAndUrl } from "../../iconAndUrl";

type ICategoryTypeWithProps = {
  readonly children: ReactNode;
  readonly category: ICategoryType;
};

export default function Contacts() {
  const contact = contactsData.find(
    ({ category }) => category === ICategoryType.contact,
  );
  const socials = contactsData.filter(
    ({ category }) => category === ICategoryType.social,
  );

  const CategoryTypeWith: FC<ICategoryTypeWithProps> = ({
    children,
    category,
  }) => {
    return (
      <div className={styles.contentWrapper}>
        <h4>{category.toLocaleUpperCase()}</h4>
        <>{children}</>
      </div>
    );
  };

  return (
    <div className={styles.contactContainer}>
      {contact && (
        <>
          <CategoryTypeWith category={ICategoryType.contact}>
            <IconAndTextUrl icon={contact.icon} url={contact.url} />
          </CategoryTypeWith>
        </>
      )}
      {socials && (
        <>
          <CategoryTypeWith category={ICategoryType.social}>
            <div className={styles.iconAndUrlWrapper}>
              {socials.map(({ id, icon, url, name }) => (
                <IconAndUrl key={id} icon={icon} url={url} name={name} />
              ))}
            </div>
          </CategoryTypeWith>
        </>
      )}
    </div>
  );
}
