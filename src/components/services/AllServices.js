import React from "react";
import OperationsImg from "../../Assests/Images/Operations.png";
import ProcurementImg from "../../Assests/Images/procurement.jpg";
import ManufacturingImg from "../../Assests/Images/manufacturing.png";
import EngineeringImg from "../../Assests/Images/engineering.jpg";
import DataAnalyticsImg from "../../Assests/Images/dataAnalytics.jpg";
import DocumentationImg from "../../Assests/Images/Documentations.jpg";
import DataScienceImg from "../../Assests/Images/DataScience.jpg";
import SapImg from "../../Assests/Images/Sap.jpg";

export const Operations = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div className="my-4 col-12 col-md-6 " data-aos="fade-right">
        <h4>What we can do for you in operations</h4>
        <ul>
          <li>Research</li>
          <li>Data Handling</li>
          <li>Data Visualization</li>
          <li>Estimating</li>
          <li>Costing</li>
          <li>Quality Control</li>
          <li>Forecasting</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg col-12 col-md-3 " src={OperationsImg}></img>
    </div>
  );
};
export const Procurememnt = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in procuremment</h4>
        <ul>
          <li>Purchasing</li>
          <li>Vendor Management</li>
          <li>Dealing with suppliers</li>
          <li>Business Compliance</li>
          <li>Contracting</li>
          <li>Monitor suppliers</li>
          <li>Supply Chain</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg col-12 col-md-3 " src={ProcurementImg}></img>
    </div>
  );
};
export const Manufacturing = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in manufacturing</h4>
        <ul>
          <li>Creation of Manufacturing Orders</li>
          <li>Printing Orders</li>
          <li>Classification</li>
          <li>Verification of BOM</li>
          <li>Verification of Drawings</li>
          <li>Releasing Order to Production</li>
          <li>Production Operations</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg col-12 col-md-3" src={ManufacturingImg}></img>
    </div>
  );
};
export const Engineering = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in engineering</h4>
        <ul>
          <li>Material Management</li>
          <li>NDT Testing verification</li>
          <li>Quality Check</li>
          <li>Parameters Check</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg my-4 col-12 col-md-3" src={EngineeringImg}></img>
    </div>
  );
};
export const DataAnalytics = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in data analytics</h4>
        <ul>
          <li>Data Integration</li>
          <li>Data Modernization</li>
          <li>Oracle</li>
          <li>Data Science</li>
          <li>Data Visualization</li>
          <li>Cloud Data</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg col-12 col-md-3" src={DataAnalyticsImg}></img>
    </div>
  );
};
export const Documentation = () => {
  return (
    <div className="d-flex row justify-content-around align-items-start">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in documentation</h4>
        <ul>
          <li>Document Management</li>
          <li>Document Control</li>
          <li>Document Review</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg  col-12 col-md-3 " src={DocumentationImg}></img>
    </div>
  );
};
export const DataScience = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in data science</h4>
        <ul>
          <li>Forecasting</li>
          <li>Classification</li>
          <li>Deep Learning</li>
          <li>Optimization</li>
          <li>Data analysis</li>
          <li>Power BI</li>
          <li>Advanced Excel</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg  col-12 col-md-3" src={DataScienceImg}></img>
    </div>
  );
};
export const Sap = () => {
  return (
    <div className="d-flex row justify-content-around align-items-center">
      <div data-aos="fade-right" className="my-4 col-12 col-md-6 ">
        <h4>What we can do for you in sap</h4>
        <ul>
          <li>Material Management</li>
          <li>CRM</li>
          <li>Dynamics CRM</li>
          <li>Salesforce CRM</li>
          <li>Enterprise Planning</li>
          <li>Resource Planning</li>
          <li>Financial Management</li>
          <li>Supply Chaing Management</li>
        </ul>
      </div>
      <img data-aos="fade-left" className="OperationsImg  col-12 col-md-3" src={SapImg}></img>
    </div>
  );
};

const AllServices = () => {
  return (
    <div className="d-flex justify-content-around align-items-center">
      All services are exported from this component
    </div>
  );
};

export default AllServices;
