import React from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col } from "react-grid-system";
import StaffCss from "../css/staff.module.css";
import StaffImage from "../Image/staff.png";

const Program = () => {
  return (
    <>
      <Navigation />
      <div className={StaffCss.StaffContainer}>
        <h1 className={StaffCss.ProgramTtl}>Welcome to Staff page</h1>
        <Row className={StaffCss.RowContainer}>
          <Col sm={4}>
            <h3>Oragnization Structure</h3>
            <img src={StaffImage} />
            <p>
              Today the clinic’s staff spans a range of age, experience, and
              ethnicity. A visitor to the clinic might hear three or four
              languages being used at any given moment as the staff go about
              their work. Medics volley in conversation, jumping between
              Burmese, English and their own ethnic languages. Of course, the
              original founders of the clinic were from the Karen and Burman
              ethnic groups, however, this was due mainly to the proximity of
              the clinic to Karen State, and the linguistic needs of the
              majority of patients. Despite the traditionally large contingent
              of Karen speaking staff, recent years have shown a growing
              diversity in the languages used in the daily running of the
              clinic’s operations. We have been fortunate over the years to have
              good working partnerships with national, regional and
              international partners. Thanks to our partners, our staff have
              given great opportunities to improve their skills and knowledge
              through training, accredited university education programmes, and
              workshops. Births, weddings, deaths, and festivals are celebrated
              within the clinic society, with staff quarters centered around the
              clinic grounds. When Dr. Cynthia remarks, “This is not only a
              clinic, it is also a village”, one can see that this applies to
              both patients and staff. In 2019, around 390 staff are working in
              Mae Tao Clinic from the health to education to training to Burma
              Based Health Services. (Last Update: 7 August 2019)
            </p>
          </Col>

          <Col sm={4}>
            <h3>Collaboration</h3>
            <p>
              Some of the collaborations and partnerships with educational
              institutions have been mentioned in the section below related to
              improving the skills and knowledge of our sta and partners. We
              have been fortunate over the years to have good working
              partnerships with national, regional and international partners.
            </p>
            <ul>
              <li>
                <strong>Education Facilities</strong> Khon Kaen University,
                Thammasat University School of Global Studies, JPHIEGO Johns
                Hopkins University, Rajamangala University of Technology,
                Chulalongkorn University, Mahidol University
              </li>
              <li>
                <strong>Government Agencies</strong> Thai Ministry of Health,
                Myanmar Ministry of Health, Mae Sot Hospital, Tha Song Yang
                Hospital, Thai Ministry of Interior, Thai Ministry of Education
              </li>
              <li>
                <strong>NGOs</strong> The Shoklo Malaria Research Unit (SMRU),
                The International Rescue Committee (IRC), Community Partners
                International (CPI), Help Without Frontiers
              </li>
              <li>
                <strong>CBOs</strong> Burma Medical Association (BMA), BPHWT
                (Backpack Health Worker Team), Karen Women Organisation (KWO),
                Committee for the Protection and Promotion of Child Rights
                (CPPCR), Burmese Migrant Teachers Association (BMTA), Burmese
                Children Medical Fund (BCMF), Burma Border Project, Japan
                Association for Mae Tao Clinic (JAM)
              </li>
              <li>
                <strong>Thai Foundations</strong> Suwannimit Foundation, Child’s
                Dream, Bridging Education Access for Migrants
              </li>
            </ul>
          </Col>
          <Col sm={4}>
            <h3>Staff profile</h3>
            <p>To put the staff Form</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Program;
