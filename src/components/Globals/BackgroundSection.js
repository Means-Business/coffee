import React from 'react';
import BackgroundImage from 'gatsby-background-image';

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  console.log(title);
  var moo = title.substring(0, 3);
  var coding = title.substring(3, 11);
  console.log(moo);
  console.log(coding);
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1
        id={title === "moocoding's" ? 'moo' : null}
        className="title text-white text-uppercase text-center font-weight-bold"
      >
        <span>{moo}</span>
        {coding}
      </h1>
      {children}
    </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: 'default title',
  styleClass: 'default__background',
};
