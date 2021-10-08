import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function BlogHomeImage() {
  const imageData = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "BackyardFar.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const blogHomeImage = getImage(
    imageData.file.childImageSharp.gatsbyImageData
  );
  if (!imageData) return <></>;
  return <GatsbyImage image={blogHomeImage} alt="" />;
}
