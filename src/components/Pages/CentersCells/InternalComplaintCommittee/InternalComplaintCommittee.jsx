import React, { useContext } from 'react'
import { Alert, Box, Button, Stack } from '@mui/material';
import { AppContext } from '../../../../contexts/AppContext';
import { ArticleRounded, ReportProblemTwoTone } from '@mui/icons-material';

function InternalComplaintCommittee() {
  const { maxWidth } = useContext(AppContext);


  const InternalComplaintCommitteeMembersList = [
    {
      Name: "Dr. Nandini Chaudari",
      Designation: "Professor and Head IT at KSET",
      EmailId: "hod.it.kset@kpgu.ac.in",
      Role: "Chairman",
    },
    {
      Name: "Dr. Camy Bhura,",
      Designation: "Associate professor at KSPR",
      EmailId: "camybhura.kspr@kpgu.ac.in",
      Role: "Member Secretary",
    },
    {
      Name: "Apoorva Shah",
      Designation: "Assistant professor CSE at KSET",
      EmailId: "apoorvashah.cse.kset@kpgu.ac.in",
      Role: "Member",
    },
    {
      Name: "Dr. Rita Mahapatra",
      Designation: "Professor at KSS",
      EmailId: "admission.kss@kpgu.ac.in",
      Role: "Member",
    },
    {
      Name: "Ms. Palak Landge",
      Designation: "OSD || KPGU",
      EmailId: "osd@kpgu.edu.in",
      Role: "Member",
    },
    {
      Name: "Ms. Vama Choksi",
      Designation: "HR Assistant, KPGU",
      EmailId: "establishment@kpgu.edu.in",
      Role: "Member",
    },
    {
      Name: "Ms. Rachana Parikh",
      Designation: "NGO Representative",
      EmailId: "info@kpgu.edu.in || rachana@psca.in",
      Role: "Member",
    },
  ]

  const InternalComplaintCommitteeMembersListComponent = ({ Name, Designation, EmailId, Role }) =>
  (
    <tr>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Name}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Designation}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{EmailId}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Role}</td>
    </tr>
  )

  return (
    <>
      {/* ================================ Internal Compliant Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Internal Compliant Committee [ICC]</h3>
        <h5 className='fw-semibold mb-3 '>In pursuance of “University Grants Commission (Prevention, prohibition and redressal of sexual harassment of women employees and students in higher educational institutions) Regulations, 2015 read with sexual harassment of women at work place (Prevention, prohibition and redressal) Act 2013 , Drs. Kiran & Pallavi Patel Global University has constituted the Internal Complaints Committee (ICC) to deal with complaint relating the sexual harassment of women employees and students at the university.</h5>
        <h5 className='fw-semibold mb-3 '>To prevent the victim from being persuaded to withdraw their accusations by the offender(s), the committee accepts complaints from victims and maintains their confidentiality. The committee firmly deals with all instances of sexual harassment and assault. The committee not only pursues retributive measures against sexual harassment offenders but also makes an effort to raise awareness of it through sensitization initiatives.  The ICC addresses the problems immediately and takes appropriate action. Thus, the employees and students feel entirely safe on campus thanks to this swift resolution mechanism.</h5>
      </Box>
      {/* ================================ Objectives of the ICC ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Objectives of the ICC</h3>
        <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To increase awareness of sexual harassment through educational programs that support and promote a respectful and secure campus environment.</h5>
        <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To deal with situations of discrimination and sexual harassment against women promptly to ensure support services for the harmed and the cessation of the harassment. Inform complainants of the informal and formal mechanisms of settlement as outlined by the Cell.
        </h5>
        <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To offer an unbiased, secretive, and encouraging setting for any victims of sexual abuse.</h5>
        <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Advocate suitable sanctions against the offender</h5>
        <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To inform people about the support and counseling options available on our campus</h5>
        <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Ensuring that faculty, staff, and students have access to the most recent and complete resources on sexual harassment and assault.</h5>
      </Box>
      {/* ================================ Internal Complaint Committee Members ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow overflow-x-auto" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Internal Complaint Committee Members</h3>
        <h5 className='fw-bold '>As per the notification 15-2023 dated 05-09-2023 Revised Internal Complaint Committee members</h5>
        <table style={{ width: "100%" }}>
          <thead style={{}} className='text-white'>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Name</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Designation</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>EmailId</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Role</th>
          </thead>
          <tbody>
            {
              InternalComplaintCommitteeMembersList.map(({ Name, Designation, EmailId, Role }, index) => <InternalComplaintCommitteeMembersListComponent Name={Name} Designation={Designation} EmailId={EmailId} Role={Role} key={index} />)
            }
          </tbody>
        </table>
      </Box>
      {/* ================================ Complaint Procedure ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Complaint Procedure</h3>
        <h5 className='fw-semibold mb-3 '>An aggrieved person (who has been victimized) may launch the complaints by</h5>
        <ol>
          <li className='fs-5 color-secondary fw-bold '>Sending an email to: <Button variant='contained' color='secondary' href='mailto:icc@kpgu.ac.in' size='small' className='text-lowercase'>icc@kpgu.ac.in</Button></li>
          <li className='fs-5 color-secondary fw-bold mt-3'>Writing handwritten/print application.</li>
        </ol>
        <Alert color='warning' icon={<ReportProblemTwoTone />}>
          <ol>
            <li className='fs-6 fw-semibold '>Submit the complaint within three months from the date of the incident and in case of a series of incidents within a period of three months from the date of the last incident.</li>
            <li className='fs-6 fw-semibold '>You have to mention all your details like name, designation, mobile no & mail Id, Enrolment no in case of student.</li>
            <li className='fs-6 fw-semibold '>Mention the incident description like date, time, location, respondent’s name, working relationships etc.</li>
            <li className='fs-6 fw-semibold '>Committee shall follow the KPGU policy on prevention of sexual harassment.</li>
          </ol>
        </Alert>
      </Box>
      {/* ================================ Contact Us ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Contact Us</h3>
        <h5 className='fw-semibold'>Internal Complaint Committee<br />
          Drs. Kiran & Pallavi Patel Global University (KPGU) <br />
          Vadodara- 391240, Gujarat</h5>
        <Button variant='contained' color='secondary' href='mailto:student.grievance@kpgu.ac.in' size='small' className='text-lowercase'>icc@kpgu.ac.in</Button>
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

export default InternalComplaintCommittee
