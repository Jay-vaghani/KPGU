import { DescriptionRounded } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function InstituteOfPharmacy() {
  const ListOfDocs = [
    {
      title: "EOA BIT 2014-15",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA-BIT-Report-2014-15.pdf",
    },
    {
      title: "EOA BIT 2013-14",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA-BIT-2013-14-.pdf",
    },
    {
      title: "EOA BIT 2012-13",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA-BIT-Report-2012-13.pdf",
    },
    {
      title: "EOA BIT 2011-12",
      docLink:
        "https://kpgu.ac.in/wp-content/uploads/2022/08/EOA-BIT-2011-12Report.pdf",
    },
    {
      title: "EOA BIT 2010-11",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/2010-11.pdf",
    },
    {
      title: "EOA BIT 2009-10",
      docLink: "https://kpgu.ac.in/wp-content/uploads/2022/08/2009-10.pdf",
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

export default InstituteOfPharmacy;
