import * as React from "react";
import {
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { toastError, toastSuccess } from "../toast/toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const defaultTheme = createTheme();

export default function Register() {

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    try {
      const request = auth.createUserWithEmailAndPassword(email, password);
      request;
      request.then((result) => {
        let accessToken = result.user.multiFactor.user.accessToken;
        localStorage.setItem("accessToken", accessToken);
        toastSuccess("User Signed Up Successfully");
        navigate("/");
        console.log(result);

      });
    } catch (error) {
      toastError(error.message);
      event.preventDefault(false);
      console.log(error)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 100, // Optionally adjust the width
              height: 100, // Optionally adjust the height
            }}
            alt="Ava"
            src="https://trolologuy.github.io/me.png"
            className="border-4"
          />

          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
