import { DescriptionRounded, GavelRounded } from '@mui/icons-material'
import { Box, Button, Typography,Stack } from '@mui/material'
import React from 'react'

function UgcApproval() {
    return (
        <Box >
            <h5 >
                Drs. Kiran & Pallavi Patel Global University (KPGU), Krishna Edu Campus, Vadodara-Mumbai NH#8, Varnama, Vadodara, Gujarat is established by the Gujarat State Act, the name of the University has been included in the list of Universities established as Per
            </h5>
            <Typography
                variant="h6"
                fontWeight={600}
                color={"secondary"}
                display={"flex"}
            >
                <Box pr={2}>
                    <GavelRounded color="inherit" />
                </Box>
                <Box>Section 2(f) of UGC Act, 1956.</Box>
            </Typography>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                mt={4}
            >
                <Typography variant="h6">UGC Approval</Typography>
                <Button
                    variant="contained"
                    href="https://kpgu.ac.in/wp-content/uploads/2023/06/KPGU-UGC-Letter-website.pdf"
                    color="secondary"
                    target="_blank"
                    startIcon={<DescriptionRounded />}
                    disableElevation
                    size="small"
                >
                    View
                </Button>
            </Stack>
        </Box>
    )
}

export default UgcApproval