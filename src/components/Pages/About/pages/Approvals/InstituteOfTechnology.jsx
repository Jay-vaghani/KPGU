import React from "react";
import { DescriptionRounded } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";

function InstituteOfTechnology() {
  const ListOfDocs = [
    {
      title: "AICTE Mandatory Disclosure",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2022/08/AICTE-Mandatory-Disclosure-1_compressed.pdf",
    },
    {
      title: "Letters of Approval",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA_Report_2017-18BIT.pdf",
    },
    {
      title: "EOA BIT 2023-24",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2023/06/EOA-Report-2023-24-20-6-2023.pdf",
    },
    {
      title: "EOA BIT 2022-23",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2023/06/EOA-Report-2022-23.pdf",
    },
    {
      title: "EOA BIT 2021-22",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2023/06/BIT-EOA-Report_21-22.pdf",
    },
    {
      title: "EOA BIT 2020-21",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/12/Corrigendum-EOA_Report_2020-21.pdf",
    },
    {
      title: "EOA BIT 2019-20",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/AICTE-BIT-EOA_Report_2019-20.pdf",
    },
    {
      title: "EOA BIT 2018-19",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/BIT-AICTE-EOA-Report_2018-19.pdf",
    },
    {
      title: "EOA BIT 2017-18",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA_Report_2017-18BIT-1.pdf",
    },
    {
      title: "EOA BIT 2016-17",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA_BIT-Report_2016-17-BIT.pdf",
    },
    {
      title: "EOA BIT 2015-16",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA_-BIT-2015-2016.pdf",
    },
    {
      title: "EOA BIT 2013-14",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA_-BIT-2015-2016.pdf",
    },
    {
      title: "EOA BIT 2011-12",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA-BIT-2011-12Report-2.pdf",
    },
  ];

  const ListComponent = ({ title, docLink }) => (
    <Grid item xs={12}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <Typography variant="h6">{title}</Typography>

        <Button
          variant="contained"
          href={docLink}
          color="secondary"
          target="_blank"
          startIcon={<DescriptionRounded />}
          disableElevation
          size="small"
        >
          View
        </Button>
      </Stack>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {ListOfDocs.map(({ docLink, title }, index) => (
        <ListComponent key={index} docLink={docLink} title={title} />
      ))}
    </Grid>
  );
}

export default InstituteOfTechnology;
