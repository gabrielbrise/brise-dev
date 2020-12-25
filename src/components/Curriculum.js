import React from "react";
import styled from "styled-components";

const Timeline = ({
  date = {},
  id,
  title,
  subtitle,
  info = [],
  description = [],
}) => (
  <article className="py-3" id={id}>
    <div className="col-md-3 left month-year-data">
      {date.start} - {date.end}
    </div>
    <div className="col-md-9 right description">
      <h4>{title}</h4>
      <h5 className="pb-2">{subtitle}</h5>
      {info.map((text, key) => (
        <h6 key={`${id}-info-${key}`}>{text}</h6>
      ))}
      {description.map((text, key) => (
        <p className="m-0" key={`${id}-description-${key}`}>
          {text}
        </p>
      ))}
    </div>
  </article>
);

const SkillLevel = ({ title, text, level }) => {
  const percentageLevel = `${level * 10}%`;
  const backgroundImage = `linear-gradient(to right, #303030 ${percentageLevel}, #b9b9b9 ${percentageLevel})`;
  return (
    <div>
      <div className="col-md-3 left">{title}</div>
      {level && (
        <LevelBar
          className="col-md-9 right"
          style={{ backgroundImage }}
        ></LevelBar>
      )}
      <div className="col-md-12 left" style={{ backgroundColor: "white" }}>
        <p className="pt-1 text-secondary">{text}</p>
      </div>
    </div>
  );
};

const LevelBar = styled.div`
  height: 12px;
  top: 6px;
`;

const components = {
  Timeline,
  SkillLevel,
};

const Curriculum = ({ sections }) => (
  <div id="curriculum" className="container-fluid col-md-8">
    {sections.map(({ title, component, list }, key) => {
      return (
        <section className="py-2" key={`section-${key}`}>
          <h3 className="mb-5">
            <span>{title}</span>
          </h3>
          <div>
            {list.map((item, key) => {
              const TagName = components[component];
              return <TagName {...item} key={`section-component-${key}`} />;
            })}
          </div>
        </section>
      );
    })}
  </div>
);

export default Curriculum;
