import React from "react";

const Timeline = ({
  date = {},
  title,
  subtitle,
  info = [],
  description = []
}) => (
  <article id="roo-m">
    <div className="col-md-3 left month-year-data">
      {date.start} - {date.end}
    </div>
    <div className="col-md-9 right description">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      {info.map(text => (
        <h6>{text}</h6>
      ))}
      {description.map(text => (
        <p>{text}</p>
      ))}
    </div>
  </article>
);

const SkillLevel = ({ title, text, level }) => (
  <article id="dutch">
    <div className="col-md-3 left">{title}</div>
    <div className="col-md-9 right level">
      <label className="circle"></label>
      <label
        className="circle full"
        style={{ width: `${level * 10}%` }}
      ></label>
    </div>
    <span></span>
    <div className="col-md-12 right description">
      <p>{text}</p>
    </div>
  </article>
);

const components = {
  Timeline,
  SkillLevel
};

const Curriculum = ({ sections }) => (
  <div id="curriculum" className="container-fluid col-md-8">
    {sections.map(({ title, component, list }) => {
      return (
        <>
          <h3>
            <span>{title}</span>
          </h3>
          <div>
            {list.map(item => {
              const TagName = components[component];
              return <TagName {...item} />;
            })}
          </div>
        </>
      );
    })}
  </div>
);

export default Curriculum;
