import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Divider,
} from "@mui/material";

export default function HdmiTestRequest() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = React.useCallback(() => {
    setActiveStep((prevStep) => prevStep + 1);
  }, []);

  const handleBack = React.useCallback(() => {
    setActiveStep((prevStep) => prevStep - 1);
  }, []);

  const handleReset = React.useCallback(() => {
    setActiveStep(0);
  }, []);

  const steps = ["Basic Information", "Select Agent", "Select TC", "Preview"];

  return (
    <Box sx={{ mt: 2, mx: 2, bgcolor: "background.paper" }}>
      <Box
        sx={{
          mx: "15%",
          mb: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Divider />
      {
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {activeStep === steps.length ? (
              <>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
                <Box sx={{ flex: "1 1 auto" }} />
              </>
            ) : (
              <>
                <Box sx={{ flex: "2 1 auto" }} />
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
                <Box sx={{ flex: "2 1 auto" }} />
              </>
            )}
          </Box>
        </Box>
      }
      <Divider />
      {(() => {
        let ret = null;
        switch (activeStep) {
          case 0:
            ret = <h3>Step 1</h3>;
            break;
          case 1:
            ret = <h3>Step 2</h3>;
            break;
          case 2:
            ret = <h3>Step 3</h3>;
            break;
          case 3:
            ret = <h3>Step 4</h3>;
            break;
          default:
            ret = <h3>Finished</h3>;
            break;
        }
        return ret;
      })()}
    </Box>
  );
}
