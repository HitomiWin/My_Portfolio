"use client";
import { contactsData, ICategoryType } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import firstletterUpperCase from "@/app/utils/firstletterUpperCase";
import styles from "../home.module.css";

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
        <div className={styles.contentWrapper}>
          <h4>{ICategoryType.contact.toLocaleUpperCase()}</h4>
          <div className={styles.iconAndUrl}>
            <FontAwesomeIcon icon={contact.icon} className={styles.content} />
            <p className={styles.content}>{contact.url}</p>
          </div>
        </div>
      )}
      {socials && (
        <div className={styles.contentWrapper}>
          <h4>{ICategoryType.social.toLocaleUpperCase()}</h4>
          <div className={styles.iconAndUrlWrapper}>
            {socials.map(({ id, icon, url, name }) => (
              <div key={id} className={styles.iconAndUrl}>
                <FontAwesomeIcon icon={icon} className={styles.content} />
                <a href={url} className={styles.content}>
                  {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}