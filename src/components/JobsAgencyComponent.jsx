import { AgencySearch } from "../actions/Jobs";
import { useCallback, useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchAgency = () => {
  const dispatch = useDispatch();
  const jobsAgency = useSelector((state) => state.jobsAgency.jobs);
  const [agencyResearch, setAgencyResearch] = useState("Olla");
  const setAgencyResearchCallback = useCallback(
    (value) => {
      setAgencyResearch(value);
    },
    [setAgencyResearch]
  );

  useEffect(() => {
    dispatch(AgencySearch(agencyResearch)); // Assicurati che dispatch venga chiamato correttamente
    console.log(jobsAgency);
  }, [agencyResearch]);

  return (
    <>
      <Card className=" mt-3">
        <div className=" px-3 divAcaso">
          <Row>
            <Col xs={8}>
              <h2 className="titleJobCards">
                selezione un azienda che ti interessa:
              </h2>
            </Col>
            <Col xs={4}>
              <Form.Select
                value={agencyResearch}
                onChange={(e) => setAgencyResearchCallback(e.target.value)}
              >
                <option value="Olla">Olla</option>
                <option value="CYOS Solutions">CYOS Solutions</option>
                <option value="Antidote">Antidote</option>
                <option value="Live Graphic Systems Pty Ltd">
                  Live Graphic Systems Pty Ltd
                </option>
                <option value="Robots & Pencils">Robots & Pencils</option>
                <option value="Nordcloud Global">Nordcloud Global</option>
                <option value="Fugue, Inc">Fugue, Inc</option>
              </Form.Select>
            </Col>
          </Row>
        </div>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          {jobsAgency ? (
            jobsAgency.map((job) => (
              <div key={job._id} className=" px-3 d-flex  pt-1">
                <img
                  src="https://placecats.com/louie/300/300"
                  className="workImage"
                />
                <div className=" container-fluid">
                  <h2 id="jobTitle">{job.title}</h2>
                  <p>
                    {job.company_name} · {job.candidate_required_location}
                  </p>
                  <Row>
                    <Col xs={8}>
                      <p className=" text-start">
                        Category: {job.category}, job type:{" "}
                        {job.job_type.replaceAll("_", " ")}
                      </p>
                    </Col>
                    <Col xs={4}>
                      <p className=" text-end">
                        {job.publication_date.slice(0, 10)}
                      </p>
                    </Col>
                  </Row>
                  <hr />
                </div>
              </div>
            ))
          ) : (
            <p>No jobs available</p>
          )}
        </div>
      </Card>
    </>
  );
};

export default SearchAgency;
