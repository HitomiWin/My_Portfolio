import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/iconAndUrl.module.css";
import { ICategoryType } from "@/constants";

interface Props {
  readonly url: string;
  readonly icon: IconDefinition;
  readonly name?: string;
}

interface ICategoryTypeWithProps {
  readonly children: ReactNode;
  readonly category: ICategoryType;
}

export function IconAndUrl({ url, icon, name }: Props) {
  return (
    <div className={styles.iconAndUrlContainer}>
      <a
        href={url}
        target="_blank"
        className={`${styles.iconAndUrlContent} ${styles.iconAndUrl}`}
      >
        <FontAwesomeIcon icon={icon} className={styles.iconAndUrlContent} />
        <p>
          {name ?? ""}
          &#8599;
        </p>
      </a>
    </div>
  );
}

export function IconAndTextUrl({ url, icon }: Props) {
  return (
    <div className={styles.iconAndUrl}>
      <FontAwesomeIcon icon={icon} className={styles.iconAndUrlContent} />
      <p className={styles.iconAndUrlContent}>{url}</p>
    </div>
  );
}

export function CategoryTypeWith({
  children,
  category,
}: ICategoryTypeWithProps) {
  return (
    <div className={styles.contentWrapper}>
      <h4>{category.toLocaleUpperCase()}</h4>
      <>{children}</>
    </div>
  );
}
