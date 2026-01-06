import React from "react";
import Image from "next/image";

export function Paragraph({ attributes, children }) {
  return <p {...attributes}>{children}</p>;
}

export function Heading({ attributes, children }) {
  const Tag = attributes && attributes.level ? `h${attributes.level}` : "h2";
  return <Tag {...attributes}>{children}</Tag>;
}

export function ImageBlock({ attributes }) {
  const { url, alt = "", width, height } = attributes || {};
  if (!url) return null;
  return (
    <div className="wp-block-image">
      <Image src={url} alt={alt} width={width || 800} height={height || 400} unoptimized />
    </div>
  );
}

export default {
  "core/paragraph": Paragraph,
  "core/heading": Heading,
  "core/image": ImageBlock,
};
