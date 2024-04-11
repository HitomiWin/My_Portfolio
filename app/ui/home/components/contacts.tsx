"use client";
import React from "react";
import { contactsData, ICategoryType } from "@/constants";
import styles from "@/styles/home.module.css";
import { CategoryTypeWith, IconAndTextUrl, IconAndUrl } from "../../iconAndUrl";

export default function Contacts() {
  const contact = contactsData.find(
    ({ category }) => category === ICategoryType.contact,
  );
  const socials = contactsData.filter(
    ({ category }) => category === ICategoryType.social,
  );

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
