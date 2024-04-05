import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface Props {
  readonly url: string;
  readonly icon: IconDefinition;
  readonly name?: string;
}
export function IconAndUrl({ url, icon, name }: Props) {
  return (
    <div>
      <a href={url} className={`iconAndUrlContent iconAndUrl`}>
        <FontAwesomeIcon icon={icon} className="iconAndUrlContent" />
        {name ?? ""}
      </a>
    </div>
  );
}

export function IconAndTextUrl({ url, icon }: Props) {
  return (
    <div className="iconAndUrl">
      <FontAwesomeIcon icon={icon} className="iconAndUrlContent" />
      <p className="iconAndUrlContent">{url}</p>
    </div>
  );
}
