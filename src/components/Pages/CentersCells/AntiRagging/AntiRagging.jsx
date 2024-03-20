import React, { useContext } from 'react'
import { Box, Button, Grid } from '@mui/material';
import { AppContext } from '../../../../contexts/AppContext';

function AntiRagging() {
  const { maxWidth } = useContext(AppContext);

  const AntiRaggingCommitteeList = [
    {
      CommitteeComposition: "Hon. Provost",
      Designation: "Chairman",
      Name: "Dr. A.B.Chaudhari"
    },
    {
      CommitteeComposition: "Representative of Local Media nominated by Provost",
      Designation: "Member",
      Name: "Mr. Yogen Joshi"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Dattesh Joshi"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Dattesh Joshi"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Nitesh M. Sureja"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Falgun Mehta"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Paras Bhura"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Prof. Nimesh Chikshi"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Malharo Sirdeshpande"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. A.B. Chaudhari"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Pinakin Jaiswal"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. J.M.Sanghani"
    },
    {
      CommitteeComposition: "Representative of Faculty members",
      Designation: "Member",
      Name: "Dr. Rashmi Vyas"
    },
    {
      CommitteeComposition: "Legal Officer of the University",
      Designation: "Member",
      Name: "Mr. Gaurang Datar"
    },
    {
      CommitteeComposition: "Representative of Parents nominated by the Provost",
      Designation: "Member",
      Name: "Mr. Rakesh Chandra Panchal [KSET]"
    },
    {
      CommitteeComposition: "Representative of Parents nominated by the Provost",
      Designation: "Member",
      Name: "Ms. Jitikha Desai [KSPR]"
    },
    {
      CommitteeComposition: "Representative of Students nominated by the Provost",
      Designation: "Member",
      Name: "Mr. Samarthkumar Bhatt [KSDS]"
    },
    {
      CommitteeComposition: "Representative of Students nominated by the Provost",
      Designation: "Member",
      Name: "Mr. Nimanza Oza [KSP]"
    },
    {
      CommitteeComposition: "Representative of Students nominated by the Provost",
      Designation: "Member",
      Name: "Mr. Krunal Vankar [KAMC]"
    },
    {
      CommitteeComposition: "Representative of Students nominated by the Provost",
      Designation: "Member",
      Name: "Mr. Jainam Panchal [KSET]"
    },
    {
      CommitteeComposition: "Representative of Non-teaching staff",
      Designation: "Member",
      Name: "Dr. R.K.Yadav"
    },
    {
      CommitteeComposition: "Registrar (I/C)",
      Designation: "Member Secretary",
      Name: "Dr. Chirag Nagda"
    },
  ]
  const AntiRaggingSquadMaleList = [
    {
      CommitteeComposition: "Principal/Director nominated by Provost",
      Designation: "Chairman",
      Name: "Dr. Dattesh Joshi",
    },
    {
      CommitteeComposition: "Faculty Members nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Gopal Bhatt",
    },
    {
      CommitteeComposition: "Faculty Members nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Shivam Upadhyay",
    },
    {
      CommitteeComposition: "Faculty Members nominated by the Provost",
      Designation: "Member",
      Name: "Dr. Pravin Phirke",
    },
    {
      CommitteeComposition: "Non-teaching staff nominated by the Provost",
      Designation: "Member",
      Name: "Mr. Gopal Desai",
    },
    {
      CommitteeComposition: "Warden - Boys Hostel",
      Designation: "Member",
      Name: "Mr. Mayursinh Chudasama",
    },
    {
      CommitteeComposition: "Security Officer",
      Designation: "Member",
      Name: "Mr. Kesharisinh Rana",
    },
    {
      CommitteeComposition: "Faculty Member",
      Designation: "Member Secretary",
      Name: "Mr. Tushar Desai",
    },
  ]

  const AntiRaggingSquadFemaleList = [
    {
      CommitteeComposition: "Principal/Director nominated by Provost",
      Designation: "Chairman",
      Name: "Dr. Rashmi Vyas",
    },
    {
      CommitteeComposition: "Faculty Members nominated by the Provost",
      Designation: "Dr. Priyanka Day",
      Name: "Member",
    },
    {
      CommitteeComposition: "Faculty Members nominated by the Provost",
      Designation: "Dr. Ashwini Patel",
      Name: "Member",
    },
    {
      CommitteeComposition: "Faculty Members nominated by the Provost",
      Designation: "Ms. Aifiya Vhora",
      Name: "Member",
    },
    {
      CommitteeComposition: "Non-teaching staff nominated by the Provost",
      Designation: "Member",
      Name: "Ms. Gaytri Patel",
    },
    {
      CommitteeComposition: "Warden - Boys Hostel",
      Designation: "Security Officer",
      Name: "Faculty Member",
    },
    {
      CommitteeComposition: "Security Officer",
      Designation: "Member",
      Name: "Mr. Kesharisinh Rana",
    },
    {
      CommitteeComposition: "Faculty Member",
      Designation: "Member Secretary",
      Name: "Prof. Jalpa Bhatt",
    },

  ]

  const AntiRaggingCommitteeListComponent = ({ CommitteeComposition, Designation, Name }) =>
  (
    <tr>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{CommitteeComposition}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Designation}</td>
      <td className='text-uppercase fw-bold bg-light p-2 border-5 border-white ' style={{ borderRadius: "10px" }}>{Name}</td>
    </tr>
  )

  return (
    <>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary'>Implementation of UGC Regulations to Combat Ragging in Higher Educational Institutions</h3>
        <h5 className='fw-bolder '>In pursuance of the Judgment of the Hon’ble Supreme Court of India dated 08.05.2009 in Civil Appeal No. 887/2009, the University Grants Commission has framed “UGC Regulations on curbing the menace of ragging in higher educational institutions, 2009” which have been notified on 4th July, 2009 in the Gazette of India. Ragging is a form of abuse on newcomers to any institution and to check the menace of ragging.</h5>
      </Box>
      {/* ================================ Punishment for Ragging ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} >
            <Box className="smooth-shadow-card" height={"100%"}>
              <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1710492423/KPGU/Images/anti-ragging/h4bcn0ynsffufeofnyp8.jpg" className='w-100 h-100 object-fit-cover ' alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8} >
            <Box className="">
              <h3 className='fw-bold color-secondary '>Legal Measures and Disciplinary Actions for Ragging</h3>
              <h5 className='fw-semibold mb-3 '>Ragging is a criminal offense. Ragging is strictly prohibited by both State Govt. and Central Govt. Punishment for ragging will be as follows</h5>
              <Box m={1}>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Cancellation of admission.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Suspension from attending classes.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Withholding/withdrawing scholarship/fellowship and other benefits.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Debarring from appearing in any test/examination, placement activities, or other evaluation processes.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Withholding results.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Debarring from representing the institution in any regional, national, or international meet, tournament, youth festival, etc.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Suspension/expulsion from the Hall of Residence.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Rustication from the University. </h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Expulsion from the institution and consequent debarring from admission to any other institution.</h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Fine will be imposed as per severity of an offense. </h5>
                <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>Collective punishment: when the persons committing or abetting the crime of ragging are not identified, the institution will resort to collective punishment as a deterrent to ensure community pressure on the potential offenders</h5>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* ================================ Objectives for Ragging Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Objectives Of Anti Ragging Committee</h3>
        <h5 className='fw-semibold mb-3 '>Anti-Ragging Committee will be the supervisory and advisory committee in preserving a Culture of Ragging Free Environment in the university Campus. The main objectives of this cell are as follows</h5>
        <Box m={1}>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To aware the students of dehumanizing effect of ragging inherent in its perversity.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To keep a continuous watch and vigil over ragging so as to prevent its occurrence and recurrence.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To promptly and stringently deal with the incidents of ragging brought to our notice.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To generate an atmosphere of discipline by sending a clear message that no act of ragging shall be tolerated and any act of ragging shall not go unnoticed and unpunished.</h5>
        </Box>
      </Box>
      {/* ================================ Anti-Ragging Regulations ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Anti-Ragging Regulations</h3>
        <h5 className='fw-semibold mb-3 '>UGC Regulation on Curbing the Menace of Ragging in Higher Educational Institutions, 2009 completely forbids ragging of any kind in an institute of higher education</h5>
        <h5 className='fw-semibold mb-3 '>The students in distress due to ragging related incident can use the Anti-Ragging
          National Helpline No: 1800-180-5522(24X7 Toll free)</h5>
        <h3 className='fw-bold color-secondary text-center'>OR</h3>
        <h5 className='fw-semibold mb-3 '>Send e-mail on <Button variant='contained' color='secondary' href='mailto:help.antiragging@kpgu.ac.in' size='small' className='text-lowercase'>help.antiragging@kpgu.ac.in</Button></h5>
        <h5 className='fw-semibold mb-3 '>For any other anti-ragging related information, students may visit the UGC website: <a href="www.ugc.ac.in" target='_blank'>www.ugc.ac.in</a> & <a href="www.antiragging.in" target='_blank'>www.antiragging.in</a></h5>
      </Box>
      {/* ================================ Functions of the Ragging Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow" textAlign={{
        xs: "start",
        sm: "justify"
      }}>
        <h3 className='fw-bold color-secondary '>Functions of the Ragging Committee</h3>

        <Box m={1}>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To design strategies and action plans for curbing the Menace of Ragging on the university campus.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To plan awareness campaigns about moral and ethical principles, human rights, dignity, and gender.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To investigate the complaints that students have made about ragging and to investigate this matter.</h5>
          <h5 className='mb-2 p-2 smooth-shadow-card rounded-2 color-secondary fw-bold '>To formulate strategies to prevent and discourage the menace of Ragging on and off the campus.</h5>


        </Box>
      </Box>
      {/* ================================ Anti-ragging Committee ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow overflow-x-auto ">
        <h3 className='fw-bold color-secondary'>Composition of Committees for Ragging Prevention and Response</h3>
        <table style={{ width: "100%" }}>
          <thead style={{}} className='text-white'>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Committee Composition	</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Designation	</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Name</th>
          </thead>
          <tbody>
            {
              AntiRaggingCommitteeList.map(({ CommitteeComposition, Designation, Name }, index) => <AntiRaggingCommitteeListComponent CommitteeComposition={CommitteeComposition} Designation={Designation} Name={Name} key={index} />)
            }
          </tbody>
        </table>
      </Box>
      {/* ================================ Male Squad For Anti Ragging ================================  */}
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
              AntiRaggingSquadMaleList.map(({ CommitteeComposition, Designation, Name }, index) => <AntiRaggingCommitteeListComponent CommitteeComposition={CommitteeComposition} Designation={Designation} Name={Name} key={index} />)
            }
          </tbody>
        </table>
      </Box>
      {/* ================================ Female Squad For Anti Ragging ================================  */}
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow overflow-x-auto ">
        <h3 className='fw-bold color-secondary'>Female Squad For Anti Ragging</h3>
        <table style={{ width: "100%" }}>
          <thead style={{}} className='text-white'>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Committee Composition	</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Designation	</th>
            <th className='p-2 fs-5 border-5 border-white  text-uppercase' style={{ letterSpacing: "1px", background: "#264796", borderRadius: "10px" }}>Name</th>
          </thead>
          <tbody>
            {
              AntiRaggingSquadFemaleList.map(({ CommitteeComposition, Designation, Name }, index) => <AntiRaggingCommitteeListComponent CommitteeComposition={CommitteeComposition} Designation={Designation} Name={Name} key={index} />)
            }
          </tbody>
        </table>
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} >
            <Box className="smooth-shadow-card">
              <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1710492423/KPGU/Images/anti-ragging/c0c8yrwmnthgzbmhhtqm.jpg" className='w-100' alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Box className="smooth-shadow-card">
              <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1710492423/KPGU/Images/anti-ragging/zputqg4kvtlkyzbudsiu.jpg" className='w-100' alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Box className="smooth-shadow-card">
              <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1710492423/KPGU/Images/anti-ragging/eym4fykw92dkw5ebphsx.jpg" className='w-100' alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AntiRagging





