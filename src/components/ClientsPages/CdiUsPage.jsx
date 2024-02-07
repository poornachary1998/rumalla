import React from "react";
import Oracle from "../../Assests/Images/Oracle_logosvg.png";
import TextDisplayCard from "./TextDisplayCard";

const CdiUsPage = () => {
  return (
    <section className="CdiUsPage">
      <div className="container">
        <h2 className="CdiSingaporePageHead text-center my-4">
          We have worked for several projects based on oracle at cdi Us{" "}
        </h2>
        <div className="row justify-content-center my-5">
          <img className="col-6 " src={Oracle} />
        </div>
        <div className="" >
        <TextDisplayCard Heading={"Order Entry in Oracle"} ListItems={[
            "Order Entry in the Oracle system includes below activities",
            "Creating new versions for the existing orders in oracle to fulfil the requirement.",
            "Mapping the Promise date to an order",
            "Changing the Earliest delivery date for an Order",
            "Removing the orders from a set of holds Example- EAD Hold, Shipping Hold. to proceed with shipment.",
            "Changing the Shipping method and shipping instructions based on the order requirement.",
            "Trading Partner Item Updates"
        ]} />

        <TextDisplayCard Heading={"Work Definition"} ListItems={[
            "Verifying if the Work instruction is created for a part and is linked to the Oracle part number.",
            "Resequencing the warehouse operations  based on the requirement, Example - Quality to Assembly.",
            "Creating new Work centers and assigning them to the parts in Oracle system.",
            "Allocating Resources/items for a newly created material.",
            "Creating new versions for a part in oracle and assigning them to the relevant work centers and resources."
        ]} />

        <TextDisplayCard Heading={"Oracle Quality"} ListItems={[
            "Creating ECRN-Engineering Change Request for the parts/items that requires Deviations as per requirement and sending them for Approval.",
            "Linking the ECRN to all the relevant parts in assembly and updating the same Item + ECRN in Oracle to have a traceability.",
            "Verifying the Drawing Number/Tolerances/Dimensions as per the latest drawing available.",
            "Linking Parts with Drawing Reports in Oracle with latest revision."
        ]} />

        <TextDisplayCard Heading={"Master Data (PLM)"} ListItems={[
            "Based on the ECRN(Engineering change request Number) - ECON(Engineering change order notifications) is created which requires creation o new versions of New Parts, Drawings, work instructions and specifications based on the requirement.",
            "Adding all the new parts/drawings as effected items in ECON.",
            "Creating BOM(Bill of Material) for the parts",
            "Mapping the Workflow to the ECON so that it can be Approved by the responsible department/person.",
            "Also includes creation of CCO-Commercialization change order for the same parts in ECON."
        ]} />

        <TextDisplayCard Heading={"Work Instructions"} ListItems={[
            "Creation of work instructions for the newly created parts that undergoes different manufacturing processes.",
            "Loading/attaching the completed work instruction in the Oracle and sending it for Approval.",
            "Re-sequencing the Manufacturing process and removing unwanted steps to avoid delays in production.",
            "Linking the old part number and new Part number which is created, by a Oracle document number(ORA-XXXX) to trace the Work instruction in Oracle."
        ]} />
        </div>
      </div>
    </section>
  );
};

export default CdiUsPage;
