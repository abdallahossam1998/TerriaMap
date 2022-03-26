import React from "react";
import PropTypes from "prop-types";

import MenuPanel from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx";
import PanelStyles from "terriajs/lib/ReactViews/Map/Panels/panel.scss";
import Styles from "./related-maps.scss";
import classNames from "classnames";

function RelatedMaps(props) {
  const dropdownTheme = {
    inner: Styles.dropdownInner,
    icon: "gallery"
  };

  return (
    <MenuPanel
      theme={dropdownTheme}
      btnText="Related Apps"
      smallScreen={props.smallScreen}
      viewState={props.viewState}
      btnTitle="See related apps"
    >
      <div className={classNames(PanelStyles.header)}>
        <label className={PanelStyles.heading}>Related Apps</label>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a
          target="_blank"
          href="https://geoclip-projects.business-geografic.com/demo_ksa/"
        >
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/urban-observatory.png")}
            alt="URBAN OBSERVATORY"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://geoclip-projects.business-geografic.com/demo_ksa/"
        >
          URBAN OBSERVATORY
        </a>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam quia, deleniti molestias ipsam mollitia dicta, optio saepe
          quod architecto, cum ipsum quos! Illo quaerat itaque quod ad soluta
          at.
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://covid-dashboard.mapsaudi.com/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/app1.png")}
            alt="COVID-19 STATISTICS DASHBOARD"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://covid-dashboard.mapsaudi.com/"
        >
          COVID-19 STATISTICS DASHBOARD
        </a>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam quia, deleniti molestias ipsam mollitia dicta, optio saepe
          quod architecto, cum ipsum quos! Illo quaerat itaque quod ad soluta
          at.
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://mapsaudi.com/saudi-covidtrends/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/app2.png")}
            alt="COVID-19 TRENDS"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://mapsaudi.com/saudi-covidtrends/"
        >
          COVID-19 TRENDS
        </a>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam quia, deleniti molestias ipsam mollitia dicta, optio saepe
          quod architecto, cum ipsum quos! Illo quaerat itaque quod ad soluta
          at. .
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://kepler-covid.mapsaudi.com/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/app3.png")}
            alt="COVID-19 KEPLER DASHBOARD"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://kepler-covid.mapsaudi.com/"
        >
          COVID-19 KEPLER DASHBOARD
        </a>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam quia, deleniti molestias ipsam mollitia dicta, optio saepe
          quod architecto, cum ipsum quos! Illo quaerat itaque quod ad soluta
          at.
        </p>
      </div>
      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://mapsaudi.com/dashboards/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/app5.png")}
            alt="DASHBOARDS"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://mapsaudi.com/dashboards/"
        >
          DASHBOARDS
        </a>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          numquam quia, deleniti molestias ipsam mollitia dicta, optio saepe
          quod architecto, cum ipsum quos! Illo quaerat itaque quod ad soluta
          at.
        </p>
      </div>
    </MenuPanel>
  );
}

RelatedMaps.propTypes = {
  viewState: PropTypes.object.isRequired,
  smallScreen: PropTypes.bool
};

export default RelatedMaps;
