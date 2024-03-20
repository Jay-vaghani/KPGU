import React, { useContext } from 'react'
import { Alert, Box, Button, Stack } from '@mui/material';
import { AppContext } from '../../../../contexts/AppContext';
import { ArticleRounded, ReportProblemTwoTone } from '@mui/icons-material';

function GrievanceRedressalCommittee() {
  const { maxWidth } = useContext(AppContext);

  const GrievanceList = [
    {
      TypeofGrievance: "Academic administration and support services",
      Specification: "Admissions, Examinations, Assessments, Evaluation, Library facilities, Issuance of certificates, Add-on courses, Research related issues, etc."
    },
    {
      TypeofGrievance: "Enrichment & Co-curricular activities",
      Specification: "Students’ club registration, Award of non-academic credits, Physical Education, Extra-curricular awards and certificates related issues etc."
    },
    {
      TypeofGrievance: "Facilities Management",
      Specification: "Allocation of class rooms, Standard of Canteen food, Wi-Fi internet connectivity, Utility-stores, Computer facilities, Drinking water , Sanitation & hygiene, Maintenance, Medical facilities related issues, etc."
    },
    {
      TypeofGrievance: "Professional Development",
      Specification: "On-campus or off-campus interviews, Soft skills training, Internships related issues, etc."
    },
    {
      TypeofGrievance: "Administrative affairs",
      Specification: "Collection of fee, online fee payment gateway, ID cards, attendance, Scholarships, Transcript, Transportation, Bonafede certificates related issues, etc."
    },
    {
      TypeofGrievance: "Student Welfare and Campus Safety",
      Specification: "Safety & Security, Discipline, Misbehaviours, Emergency services, Harassment by fellow students, teachers or staff related issues, etc."
    },
  ]

  const CompositionOfKpguGrievanceRedressalCommitteeList = [
    {
      CommitteeComposition: "A Dean/Director of the Faculty of the University on rotation nominated by Provost",
      Designation: "Chairperson",
      Name: "Dr. Nitesh Sureja"
    },
    {
      CommitteeComposition: "Registrar of the University",
      Designation: "Member",
      Name: "Dr. Chirag Nagda",
    },
    {
      CommitteeComposition: "Dean, Student Welfare or equivalent",
      Designation: "Member",
      Name: "Dr. Kautuk Shah",
    },
    {
      CommitteeComposition: "Two Directors of the Schools on rotation nominated by the Provost",
      Designation: "Members",
      Name: "Dr. Falgun Mehta",
    },
    {
      CommitteeComposition: "Two Directors of the Schools on rotation nominated by the Provost",
      Designation: "Members",
      Name: "Prof. Nimesh Chokshi",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Asha Joshi",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Pinakin Jaiswal",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Prachi Pandey",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Pragna Landge",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Rupali Bava",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Shivam Upadhyay",
    },
    {
      CommitteeComposition: "One Professor from each School nominated by the Provost",
      Designation: "Member",
      Name: "Mrs. Chintal Purohit",
    },
    {
      CommitteeComposition: "A representative from among students of the Schools to be nominated by the Provost based on academic merit/ excellence in sports performance in curricular activities",
      Designation: "Special Invitee",
      Name: "Mr. Sumukh",
    },
    {
      CommitteeComposition: "A representative from among students of the Schools to be nominated by the Provost based on academic merit/ excellence in sports performance in curricular activities",
      Designation: "Special Invitee",
      Name: "Vasisht(KSP)",
    },
    {
      CommitteeComposition: "A representative from among students of the Schools to be nominated by the Provost based on academic merit/ excellence in sports performance in curricular activities",
      Designation: "Special Invitee",
      Name: "Mr. Sukhpal Singh",
    },
    {
      CommitteeComposition: "A representative from among students of the Schools to be nominated by the Provost based on academic merit/ excellence in sports performance in curricular activities",
      Designation: "Special Invitee",
      Name: "Pannu (KSS)",
    },
    {
      CommitteeComposition: "Senior Faculty",
      Designation: "Member Secretary",
      Name: "Dr. Nirmal Kushwaha",
    },
  ]

  const GrievanceListComponent = ({ TypeofGrievance, Specification }) =>
  (
    <tr>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white text-start' style={{ borderRadius: "10px" }}>{TypeofGrievance}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white text-start' style={{ borderRadius: "10px" }}>{Specification}</td>
    </tr>
  )

  const CompositionOfKpguGrievanceRedressalCommitteeListComponent = ({ CommitteeComposition, Designation, Name }) =>
  (
    <tr>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{CommitteeComposition}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Designation}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Name}</td>
    </tr>
  )

  return (
    <>
      {/* ================================ Grievance Redressal Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Grievance Redressal Committee</h3>
        <h5 className='fw-semibold mb-3 '>A grievance encompasses any manifestation of discontent, dissatisfaction, or negative perception, whether articulated or not, stemming from any aspect associated with the University, which a student perceives, or even senses, as being unjust, inequitable, or unfair. The Grievance Redressal System is a vital part of any administration. It falls under the purview of University Administration to ensure the provision of a secure and conducive environment for the students.</h5>
        <h5 className='fw-semibold mb-3 '>In accordance with UGC guidelines, the Grievance Redressal Committee has been established within the university to address grievances raised by the students. This platform facilitates an open forum for students to express their concerns, it is crucial for the complainant to exercise diligence and discretion in determining what constitutes a grievance significant enough to warrant the attention of the committee, which consists of senior administrators and faculty members of the university. The following types of grievances are considered under the purview of the committee.</h5>
      </Box>
      {/* ================================ Types of Grievance and Specification ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow overflow-x-auto" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary'>Types of Grievance and Specification</h3>
        <table style={{ width: "100%" }}>
          <thead style={{}} className='text-white'>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Type of Grievance</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Specification</th>
          </thead>
          <tbody>
            {
              GrievanceList.map(({ TypeofGrievance, Specification }, index) => <GrievanceListComponent TypeofGrievance={TypeofGrievance} Specification={Specification} key={index} />)
            }
          </tbody>
        </table>
      </Box>
      {/* ================================ Objectives of the Grievance Redressal Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Objectives of the Grievance Redressal Committee</h3>
        <Box m={1}>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To provide a platform for students to address their grievances related to academic, administrative, or personal matters within the university.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To ensure that grievances are addressed impartially and in a fair manner, without any bias or discrimination.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To maintain confidentiality and privacy throughout the grievance resolution process, safeguarding the interests of all parties involved.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To promote transparency in the handling of grievances by keeping all stakeholders informed about the progress and outcomes of the resolution process.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To identify root causes of grievances and recommend measures to prevent their recurrence in the future, thereby fostering a positive and conducive environment within the university.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To educate students about the grievance redressal mechanism and their rights and responsibilities in lodging and resolving grievances.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To regularly review and improve the grievance redressal process based on feedback and emerging needs, ensuring its effectiveness and efficiency.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To facilitate amicable resolution of grievances through mediation, negotiation, or other appropriate means, aiming for mutual understanding and agreement.</h5>
        </Box>
      </Box>
      {/* ================================ Composition of KPGU Grievance Redressal Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow overflow-x-auto ">
        <h3 className='fw-bold color-secondary'>Male Squad For Anti Ragging</h3>

        <table style={{ width: "100%" }}>
          <thead style={{}} className='text-white'>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Committee Composition	</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Designation	</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Name</th>
          </thead>
          <tbody>
            {
              CompositionOfKpguGrievanceRedressalCommitteeList.map(({ CommitteeComposition, Designation, Name }, index) => <CompositionOfKpguGrievanceRedressalCommitteeListComponent CommitteeComposition={CommitteeComposition} Designation={Designation} Name={Name} key={index} />)
            }
          </tbody>
        </table>
      </Box>
      {/* ================================ Ombudsperson of KPGU ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Ombudsperson of KPGU</h3>
        <h5 className='fw-semibold mb-3 '>Honorable Retd. Chief Judge Shri Ketan Kumar Dasondi, Family Court, Surat.</h5>

      </Box>
      {/* ================================ Procedure for submitting the Grievance ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Procedure for submitting the Grievance</h3>
        <h5 className='fw-semibold mb-3 '>Any stakeholder with a genuine grievance should initially approach the Department Student Grievance Redressal Committee (DSGRC) or the Institutional Student Grievance Redressal Committee (ISGRC). In the event that grievances still remain unresolved, students are encouraged to approach the University Grievance Redressal Committee (USGRC) to formally submit their grievances by</h5>
        <ol>
          <li className='fs-5 color-secondary fw-bold '>Sending an email to: <Button variant='contained' color='secondary' href='mailto:student.grievance@kpgu.ac.in' size='small' className='text-lowercase'>student.grievance@kpgu.ac.in</Button></li>
          <li className='fs-5 color-secondary fw-bold mt-3'>Writing handwritten/print application.</li>
        </ol>
        <Alert color='warning' icon={<ReportProblemTwoTone />}>
          <h6 className='fw-semibold mb-3 '>Note: When submitting your grievance, it is essential to include all required details for effective resolution. Please ensure that your submission includes the following information: your <b>full name</b>, <b>enrolment number</b>, <b>course name</b>, <b>branch or department</b>, <b>school name</b>, <b>mobile number</b>, <b>email address</b> and <b>type of grievance</b>.</h6>
        </Alert>
      </Box>
      {/* ================================ Contact Us ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Contact Us</h3>
        <h5 className='fw-semibold'>Grievance Redressal Committee <br />
          Drs. Kiran & Pallavi Patel Global University (KPGU) <br />
          Vadodara- 391240, Gujarat</h5>
        <Button variant='contained' color='secondary' href='mailto:student.grievance@kpgu.ac.in' size='small' className='text-lowercase'>student.grievance@kpgu.ac.in</Button>
      </Box>
      {/* ================================ Attachments ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Attachments</h3>
        <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
          <Button variant='contained' color='secondary' href='https://www.ugc.gov.in/pdfnews/7203627_UGC_regulations-harassment.pdf' target='_blank' startIcon={<ArticleRounded />}>
            UGC REGULATION ON SEXUAL HARASSMENT
          </Button>
          <Button variant='contained' color='secondary' href='https://wcd.nic.in/sites/default/files/Handbook%20on%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf' target='_blank' startIcon={<ArticleRounded />}>
            HANDBOOK ON SEXUAL HARASSMENT OF WOMEN AT WORKPLACE
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default GrievanceRedressalCommittee









